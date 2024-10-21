/* eslint-disable react/prop-types */
import { useNode } from "@craftjs/core";
import { useState, useRef } from "react";
import {
  TextSettings,
  PositionSettings,
  ButtonSettings,
} from "../componentSettings/ComponentSettings.jsx";
import Draggable from "react-draggable";
function convertCssStringToReactStyles(cssString) {
  const styleArray = cssString.split(";").filter(Boolean);
  const reactStyles = {};
  styleArray.forEach((style) => {
    const [property, value] = style.split(":").map((item) => item.trim());
    const parts = property.split("-");
    const camelCaseProperty =
      parts[0] +
      parts
        .slice(1)
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join("");
    reactStyles[camelCaseProperty] = value;
  });
  return reactStyles;
}

export const PositionComponent = ({ transform, children }) => {
  const {
    connectors: { connect },
    selected,
    actions: { setProp },
  } = useNode((state) => ({
    selected: state.events.selected,
  }));

  const nodeRef = useRef();
  const [position, setPosition] = useState(() => {
    const [x, y] = transform
      .slice(10, -1)
      .split(",")
      .map((v) => parseInt(v));
    return { x: x || 0, y: y || 0 };
  });
  const [bounds, setBounds] = useState({
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  });

  const handleDrag = (e, data) => {
    const parent = nodeRef.current.closest(".dragComponent");
    if (!parent) return;

    const parentRect = parent.getBoundingClientRect();
    const elementRect = nodeRef.current.getBoundingClientRect();
    const newX = Math.min(
      Math.max(0, data.x),
      parentRect.width - elementRect.width
    );
    const newY = Math.min(
      Math.max(0, data.y),
      parentRect.height - elementRect.height
    );
    setPosition({ x: newX, y: newY });
    const newTransform = `translate(${newX}px, ${newY}px)`;
    setProp((props) => {
      props.transform = newTransform;
    });
  };

  const handleStart = () => {
    document.body.style.pointerEvents = "none";

    const parent = nodeRef.current.closest(".dragComponent");
    if (parent) {
      const parentRect = parent.getBoundingClientRect();
      const elementRect = nodeRef.current.getBoundingClientRect();

      setBounds({
        top: 0,
        left: 0,
        bottom: parentRect.height - elementRect.height,
        right: parentRect.width - elementRect.width,
      });
    }
  };

  const handleStop = () => {
    document.body.style.pointerEvents = "";
  };

  return (
    <Draggable
      nodeRef={nodeRef}
      position={{ x: position.x, y: position.y }}
      bounds={bounds}
      onDrag={handleDrag}
      onStart={handleStart}
      onStop={handleStop}
      disabled={!selected}
    >
      <div
        ref={(ref) => {
          connect(ref);
          nodeRef.current = ref;
        }}
        style={{
          minHeight: "50px",
          padding: "5px",
          position: "absolute",
          transform: `${transform}`,
          border: selected ? "2px solid #1976d2" : "none",
          width: children ? "max-content" : "100%",
          cursor: "move",
        }}
        className="position"
        tabIndex={0}
      >
        {children}
      </div>
    </Draggable>
  );
};

PositionComponent.craft = {
  related: {
    settings: PositionSettings,
  },
  props: {
    transform: "",
  },
  rules: {
    canMoveIn: (incomingNodes) =>
      incomingNodes.every(
        (incomingNode) =>
          incomingNode.data.name == "Button" || incomingNode.data.name == "Text"
      ),
  },
  isCanvas: true,
};

export const Button = ({ text, styles }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <button
      ref={(ref) => connect(drag(ref))}
      style={convertCssStringToReactStyles(styles)}
    >
      {text}
    </button>
  );
};
Button.craft = {
  related: {
    settings: ButtonSettings,
  },
  props: {
    text: "Click me",
    styles: "",
  },
};
export const Text = ({ text, fontSize, color, styles }) => {
  const {
    connectors: { connect, drag },
    hasSelectedNode,
    actions: { setProp },
  } = useNode((state) => ({
    hasSelectedNode: state.events.selected,
  }));
  const reactStyles = convertCssStringToReactStyles(styles);
  const baseStyles = {
    fontSize: `${fontSize}px`,
    color: color,
    border: hasSelectedNode ? "1px solid #1976d2" : "none",
    background: "transparent",
    width: "auto",
    height: "auto",
    padding: "0 10px",
  };
  const [editing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleBlur = () => {
    setEditing(false);
    setProp((props) => (props.text = editedText));
  };

  const handleChange = (e) => {
    setEditedText(e.target.value);
  };
  return (
    <div
      ref={(ref) => connect(drag(ref))}
      style={{
        ...baseStyles,
        ...reactStyles,
      }}
      id="textComponent"
    >
      {editing ? (
        <input
          type="text"
          value={editedText}
          onChange={handleChange}
          onBlur={handleBlur}
          style={{
            fontSize: `${fontSize}px`,
            color: color,
            background: "transparent",
            border: "none",
          }}
        />
      ) : (
        <span onClick={handleEdit}>{text}</span>
      )}
    </div>
  );
};
Text.craft = {
  related: {
    settings: TextSettings,
  },
  props: {
    text: "sampleText",
    fontSize: 20,
    color: "#000",
    styles: "",
  },
};
export const DropComponent = ({ children }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <div
      ref={(ref) => connect(drag(ref))}
      className="dragComponent"
      style={{
        position: "absolute",
        zIndex: "1",
        width: "100%",
        height: "100%",
        minHeight: "1px",
      }}
    >
      {children}
    </div>
  );
};
DropComponent.craft = {
  rules: {
    canMoveIn: (incomingNodes) =>
      incomingNodes.every(
        (incomingNode) => incomingNode.data.name == "PositionComponent"
      ),
  },
};

/* eslint-disable react/prop-types */
import HomeStyles from "../../../pages/Home.module.css";
import { useNode, Element } from "@craftjs/core";
import { ContainerSettings } from "../componentSettings/ContainerSettings.jsx";
import { componentsList } from "../dynamiccomponents/componentList.jsx";
export const Layout = ({ children }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <div
      ref={(ref) => connect(drag(ref))}
      style={{ minHeight: "50px", margin: "0" }}
      className="testlayout row"
    >
      {children}
    </div>
  );
};
function checkComponent(componentName) {
  return componentsList.includes(componentName);
}
Layout.craft = {
  rules: {
    canMoveIn: (incomingNodes) =>
      incomingNodes.every(
        (incomingNode) =>
          incomingNode.data.name == "Container" ||
          checkComponent(incomingNode.data.name)
      ),
  },
};
export const Container = ({
  container,
  wrapperBgcolor,
  wrapperTop,
  wrapperBottom,
  wrapperPadding,
  className,

  children,
}) => {
  const {
    connectors: { connect, drag },
    hasSelectedNode,
  } = useNode((state) => ({
    hasSelectedNode: state.events.selected,
  }));

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      style={{
        marginTop: `${wrapperTop}`,
        marginBottom: `${wrapperBottom}`,
        background: `${wrapperBgcolor}`,
        padding: `${wrapperPadding}`,
        border: hasSelectedNode ? "3px solid #1976d2" : "3px dashed",
        minHeight: "50px",
        position: "relative",
      }}
      className={`${container} ${className} ${HomeStyles.containerComponent}`}
    >
      <div
        className={`${HomeStyles.selector}`}
        style={{
          width: "fit-content",
          position: "absolute",
          left: "10px",
          top: "-25px",
          background: hasSelectedNode ? "#1976d2" : "#0f0",
          color: hasSelectedNode ? "#fff" : "#000",
        }}
      >
        container
      </div>
      <Element id="layout" is={Layout} canvas>
        {children}
      </Element>
    </div>
  );
};

Container.craft = {
  props: {
    container: "container",
    wrapperBgcolor: "#eee",
    wrapperTop: "5px",
    wrapperBottom: "5px",
    wrapperPadding: "0px",
    className: "testClass",
  },
  related: {
    settings: ContainerSettings,
  },
};

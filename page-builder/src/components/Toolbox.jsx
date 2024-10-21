import { useEditor } from "@craftjs/core";
import {
  Button,
  PositionComponent,
  Text,
} from "./userComponents/components/Component.jsx";
import { Container } from "./userComponents/components/Container.jsx";
import allDynamicComponents from "./userComponents/dynamiccomponents/generateComponents.jsx";
import { componentsList } from "./userComponents/dynamiccomponents/componentList.jsx";
const getComponent = (componentName) => {
  return allDynamicComponents[componentName] || null;
};
export const Toolbox = () => {
  const { connectors } = useEditor();
  return (
    <div style={{ padding: "20px", minHeight: "200px" }}>
      <div style={{ paddingBottom: "2px" }}>
        <p>Drag to add</p>
      </div>
      <div
        style={{
          display: "grid",
          gap: "5px",
          maxHeight: "590px",
          overflowY: "scroll",
        }}
      >
        <button
          ref={(ref) => connectors.create(ref, <Container />)}
          style={{
            backgroundColor: "#1976d2",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            padding: "6px 12px",
            cursor: "pointer",
          }}
        >
          Container
        </button>
        {/* <button
          ref={(ref) => connectors.create(ref, <PositionComponent />)}
          style={{
            backgroundColor: "#1976d2",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            padding: "6px 12px",
            cursor: "pointer",
          }}
        >
          Position
        </button>

        <button
          ref={(ref) => connectors.create(ref, <Text />)}
          style={{
            backgroundColor: "#1976d2",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            padding: "6px 12px",
            cursor: "pointer",
          }}
        >
          Text
        </button>

        <button
          ref={(ref) => connectors.create(ref, <Button />)}
          style={{
            backgroundColor: "#1976d2",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            padding: "6px 12px",
            cursor: "pointer",
          }}
        >
          Button
        </button> */}

        {componentsList.map((component) => {
          const DynamicComponent = getComponent(component);
          if (!DynamicComponent) {
            console.log(`Component ${component} not found`);
            return null;
          }
          return (
            <button
              key={component}
              ref={(ref) => connectors.create(ref, <DynamicComponent />)}
              style={{
                backgroundColor: "#1976d2",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                padding: "6px 12px",
                cursor: "pointer",
              }}
            >
              {component}
            </button>
          );
        })}
      </div>
    </div>
  );
};

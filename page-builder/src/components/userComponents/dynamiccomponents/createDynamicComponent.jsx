import { useNode, Element } from "@craftjs/core";
import { DropComponent } from "../components/Component.jsx";
import HomeStyles from "../../../pages/Home.module.css";
export const createDynamicComponent = ({ props }) => {
  const DynamicComponent = (componentProps) => {
    const {
      componentName,
      version,
      componentBgcolor = "#ffffff",
      gridDesktop = "12",
      gridTablet = "12",
      gridMobile = "12",
      className = "default-class",
      ...additionalProps
    } = componentProps;

    const {
      connectors: { connect, drag },
      hasSelectedNode,
    } = useNode((state) => ({
      hasSelectedNode: state.events.selected,
    }));

    return (
      <div
        className={`component col-lg-${gridDesktop} col-md-${gridTablet} col-xs-${gridMobile} ${className} ${componentName}_${version} ${HomeStyles.component}`}
        style={{
          background: componentBgcolor,
          border: hasSelectedNode ? "3px solid #1976d2 " : "3px solid",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100px",
          position: "relative",
        }}
        ref={(ref) => connect(drag(ref))}
      >
        <Element is={DropComponent} id="DropComponent" canvas />
        <div
          className={`${HomeStyles.selector}`}
          style={{
            width: "fit-content",
            position: "absolute",
            left: "100px",
            top: "-25px",
            background: hasSelectedNode ? "#1976d2" : "#0f0",
            color: hasSelectedNode ? "#fff" : "#000",
            padding: "0 5px",
            zIndex: "1",
          }}
        >
          {componentName}
        </div>
        {componentName}
      </div>
    );
  };

  const DynamicComponentSettings = () => {
    const {
      actions: { setProp },
      node,
    } = useNode((node) => ({
      node,
    }));
    const {
      componentName,
      version,
      componentBgcolor,
      gridDesktop,
      gridTablet,
      gridMobile,
      className,
      ...additionalProps
    } = node.data.props;

    const allProps = {
      componentName,
      version,
      componentBgcolor,
      gridDesktop,
      gridTablet,
      gridMobile,
      className,
      ...additionalProps,
    };

    return (
      <div className={`${HomeStyles.settings}`}>
        {Object.keys(allProps).map((propName) => {
          if (propName == "componentName") {
            return (
              <div key={propName}>
                <div className="col-6">{propName}</div>
                <div className="col-6">{allProps[propName]}</div>
              </div>
            );
          } else {
            return (
              <div key={propName}>
                <label htmlFor={propName}>{propName}</label>
                <input
                  name={propName}
                  value={allProps[propName]}
                  onChange={(e) =>
                    setProp((currentProps) => {
                      currentProps[propName] = e.target.value;
                    })
                  }
                />
              </div>
            );
          }
        })}
      </div>
    );
  };

  DynamicComponent.craft = {
    related: {
      settings: DynamicComponentSettings,
    },
    props: props,
  };

  return { Component: DynamicComponent };
};

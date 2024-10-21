import { createDynamicComponent } from "./createDynamicComponent.jsx";
import { getVersionProps, componentsList } from "./componentList.jsx";

const generateExampleProps = (componentNames) => {
  const defaultProps = {
    version: "ver0",
    componentBgcolor: "#ffffff",
    gridDesktop: "12",
    gridTablet: "12",
    gridMobile: "12",
    className: "",
  };

  const exampleProps = componentNames.reduce((acc, name) => {
    acc[name] = {
      componentName: name,
      ...defaultProps,
    };
    return acc;
  }, {});
  return exampleProps;
};
const exampleProps = generateExampleProps(componentsList.map((item) => item));

const generateComponents = (componentNames, propsList) => {
  const dynamicComponents = {};
  componentNames.forEach((componentName) => {
    let widgetprops = getVersionProps(componentName);
    const { Component } = createDynamicComponent({
      props: { ...propsList[componentName], ...widgetprops },
    });
    dynamicComponents[componentName] = Component;
  });

  return dynamicComponents;
};

const allDynamicComponents = generateComponents(componentsList, exampleProps);

export default allDynamicComponents;

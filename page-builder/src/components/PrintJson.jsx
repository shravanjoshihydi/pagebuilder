import { useEditor } from "@craftjs/core";
import lz from "lzutf8";

export const PrintJson = () => {
  const { query } = useEditor();
  function transformJson(json) {
    function processComponent(node, allNodes, layoutNodeprops = {}) {
      const props = { ...node.props, ...layoutNodeprops };
      let type = node?.type?.resolvedName;
      let component = {
        type: type,
        widgetprops: props,
        children: [],
      };
      if (type == "Container") {
        component = {
          type: "Section",
          props: props,
          children: [],
        };
      }
      if (props?.componentName != undefined) {
        component.componentName = component.widgetprops.componentName.toLowerCase();
        component.version = component.widgetprops.version;
        delete component.widgetprops.componentName;
        delete component.widgetprops.version;
      }
      if (Object.keys(node.linkedNodes).length !== 0) {
        let objKeys = Object.keys(node.linkedNodes);
        objKeys.forEach((key) => {
          const layoutNode = allNodes[node.linkedNodes[key]];
          if (layoutNode.nodes && layoutNode.nodes.length > 0) {
            const layoutNodeprops = layoutNode.props;
            layoutNode.nodes.forEach((childNodeId) => {
              const childNode = allNodes[childNodeId];
              if (childNode) {
                const processedChild = processComponent(
                  childNode,
                  allNodes,
                  layoutNodeprops
                );
                component.children.push(processedChild);
              }
            });
          }
        });
      } else {
        const parentNode = node;
        if (parentNode.nodes && parentNode.nodes.length > 0) {
          parentNode.nodes.forEach((childNodeId) => {
            const childNode = allNodes[childNodeId];
            if (childNode) {
              const processedChild = processComponent(childNode, allNodes);
              component.children.push(processedChild);
            }
          });
        }
      }
      return component;
    }
    const allNodes = json;
    const rootComponent = json["ROOT"];
    const result = processComponent(rootComponent, allNodes);
    return result.children;
  }
  const customSerialize = () => {
    let craftSearialise = JSON.parse(query.serialize());
    // console.log("previous", craftSearialise);
    const transformedJson = transformJson(craftSearialise);
    console.log("JSON : ", JSON.stringify(transformedJson, null, 2));
    return transformedJson;
  };
  return (
    <button
      id="saveButtonPageBuilder"
      className="btn btn-primary  mt-3 mx-2"
      // style={{ display: "none" }}
      onClick={() => {
        const customizedJson = customSerialize();
        const compresseddata = lz.encodeBase64(lz.compress(query.serialize()));
        const toStoreInDB = {
          json: customizedJson,
          compressed: compresseddata,
        };
        const data = JSON.stringify(toStoreInDB, null, 2);
        // document.querySelector("#template").value = data;
        console.log("toStoreInDB", data);
        localStorage.setItem("data", data); //api call to save the json and compressed data
      }}
    >
      Save
    </button>
  );
};

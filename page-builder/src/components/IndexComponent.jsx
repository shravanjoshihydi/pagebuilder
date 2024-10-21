import { useNode } from "@craftjs/core";

export const IndexComponent = ({ children }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <div style={{ minHeight: "100px" }} ref={(ref) => connect(drag(ref))}>
      {children}
    </div>
  );
};

IndexComponent.craft = {
  rules: {
    canMoveIn: (incomingNodes) =>
      incomingNodes.every(
        (incomingNode) => incomingNode.data.name === "Container"
      ),
  },
};

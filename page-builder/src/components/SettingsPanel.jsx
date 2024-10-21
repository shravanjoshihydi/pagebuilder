import React from "react";
import HomeStyles from "../pages/Home.module.css";
import { useEditor } from "@craftjs/core";
export const SettingsPanel = () => {
  const { actions, selected } = useEditor((state, query) => {
    const [currentNodeId] = state.events.selected;
    let selected;

    if (currentNodeId) {
      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
        settings:
          state.nodes[currentNodeId].related &&
          state.nodes[currentNodeId].related.settings,
        isDeletable: query.node(currentNodeId).isDeletable(),
      };
    }

    return {
      selected,
    };
  });
  return selected ? (
    <div
      className={`${HomeStyles.SettingsPanel}`}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.06)",
        marginTop: "16px",
        padding: "16px",
        minHeight: "200px",
      }}
    >
      <h3>Properties Panel</h3>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <div style={{ paddingBottom: "16px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: "16px", fontWeight: 600 }}>Selected</p>
              </div>
              <div>
                <span
                  style={{
                    backgroundColor: "#2196f3",
                    padding: "2px 4px",
                    borderRadius: "4px",
                    fontSize: "12px",
                  }}
                >
                  {selected.name}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div style={{ maxHeight: "490px", overflowY: "scroll" }}>
          {selected.settings && React.createElement(selected.settings)}
        </div>
        {selected.isDeletable ? (
          <button
            style={{
              backgroundColor: "#fff",
              color: "rgba(0, 0, 0, 0.87)",
              border: "none",
              borderRadius: "4px",
              padding: "6px 16px",
              fontSize: "14px",
              fontWeight: 500,
            }}
            onClick={() => {
              actions.delete(selected.id);
            }}
          >
            Delete
          </button>
        ) : null}
      </div>
    </div>
  ) : (
    <div style={{ minHeight: "200px" }}>
      Select one component to change its properties
    </div>
  );
};

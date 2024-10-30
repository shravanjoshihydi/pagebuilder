"use client";
import "bootstrap/dist/css/bootstrap.css";
import HomeStyles from "./Home.module.css";
import { SettingsPanel } from "../components/SettingsPanel.jsx";
import { Toolbox } from "../components/Toolbox.jsx";
import { IndexComponent } from "../components/IndexComponent.jsx";
import { Editor, Frame, Element, useEditor } from "@craftjs/core";
import { PrintJson } from "../components/PrintJson.jsx";
import {
  Text,
  PositionComponent,
  Button,
  DropComponent,
} from "../components/userComponents/components/Component.jsx";
import {
  Container,
  Layout,
} from "../components/userComponents/components/Container.jsx";
import allDynamicComponents from "../components/userComponents/dynamiccomponents/generateComponents.jsx";
import lz from "lzutf8";
import { useState, useEffect } from "react";

const Home = () => {
  let data = null;
  if (typeof window !== "undefined") {
    const compressedData = localStorage.getItem("data"); //api call to get the json and compressed data
    // const compressedData = document.querySelector("#template").value;
    if (compressedData) {
      data = lz.decompress(
        lz.decodeBase64(JSON.parse(compressedData).compressed)
      );
      console.log(
        "JSON : ",
        JSON.stringify(JSON.parse(compressedData).json, null, 2)
      );
    }
  }
  const [content, setContent] = useState();

  useEffect(() => {
    if (data != null) {
      setContent(<Frame data={data} />);
    } else {
      setContent(
        <Frame>
          <Element
            id="index"
            is={IndexComponent}
            canvas
            key="indexElement"
          ></Element>
        </Frame>
      );
    }
  }, [data]);

  const RedoUndoButtons = () => {
    const { actions } = useEditor(); // Craft.js hooks for editor actions and state
    return (
      <>
        <div
          className="btn btn-danger mx-2"
          onClick={() => {
            actions.history.undo();
          }}
        >
          Undo
        </div>
        <div
          className="btn btn-primary mx-2"
          onClick={() => {
            actions.history.redo();
          }}
        >
          Redo
        </div>
      </>
    );
  };

  return (
    <>
      <Editor
        resolver={{
          Container,
          Layout,
          IndexComponent,
          Text,
          PositionComponent,
          Button,
          DropComponent,
          ...allDynamicComponents,
        }}
        suppressHydrationWarning={true}
      >
        <div className={`undoredo ${HomeStyles.undoredo}`}>
          <div className="d-flex justify-content-center w-100 my-1">
            <RedoUndoButtons />
            <PrintJson />
          </div>
          <div className={`componentlist ${HomeStyles.toolbox}`}>
            <div style={{ backgroundColor: "#eee", padding: "10px" }}>
              <Toolbox />
            </div>
          </div>
          <div className={`canvas ${HomeStyles.canvas}`}>{content}</div>
          <div className={`settingslist ${HomeStyles.settingslist}`} >
            <div style={{ backgroundColor: "#eee", padding: "10px" }}>
              <SettingsPanel />
            </div>
          </div>
        </div>
      </Editor>
    </>
  );
};

export default Home;

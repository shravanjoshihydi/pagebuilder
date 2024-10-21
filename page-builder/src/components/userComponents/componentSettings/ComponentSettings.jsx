import HomeStyles from "../../../pages/Home.module.css";
import { useNode } from "@craftjs/core";
export const PositionSettings = () => {
  const { transform } = useNode((node) => ({
    transform: node.data.props.transform,
  }));
  return (
    <div className={`${HomeStyles.settings}`}>
      <span>grab and place in required position</span>
      <div>
        <label>Transform :</label>
        <span>{transform}</span>
      </div>
    </div>
  );
};
export const ButtonSettings = () => {
  const {
    text,
    styles,
    actions: { setProp },
  } = useNode((node) => ({
    text: node.data.props.text,
    left: node.data.props.left,
  }));
  return (
    <div className={`${HomeStyles.settings}`}>
      <div>
        <label htmlFor="text">Button Text</label>
        <input
          name="text"
          value={text}
          onChange={(e) => setProp((props) => (props.text = e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="styles">Button styles</label>
        <input
          name="styles"
          defaultValue={styles}
          value={styles}
          onChange={(e) => setProp((props) => (props.styles = e.target.value))}
        />
      </div>
    </div>
  );
};
export const TextSettings = () => {
  const {
    text,
    fontSize,
    color,
    styles,
    actions: { setProp },
  } = useNode((node) => ({
    text: node.data.props.text,
    fontSize: node.data.props.fontSize,
    color: node.data.props.color,
    styles: node.data.props.styles,
  }));
  return (
    <div className={`${HomeStyles.settings}`}>
      <div>
        <label>Entered Text&nbsp;:&nbsp;</label>
        <span>{text}</span>
      </div>
      <div>
        <label htmlFor="fontSize">Font Size</label>
        <input
          name="fontSize"
          type="number"
          min={1}
          max={150}
          value={fontSize}
          onChange={(e) =>
            setProp((props) => (props.fontSize = e.target.value))
          }
        />
      </div>
      <div>
        <label htmlFor="Color">Color</label>
        <input
          name="Color"
          value={color}
          onChange={(e) => setProp((props) => (props.color = e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="Styles">Styles</label>
        <input
          name="Styles"
          value={styles}
          onChange={(e) => setProp((props) => (props.styles = e.target.value))}
        />
      </div>
    </div>
  );
};

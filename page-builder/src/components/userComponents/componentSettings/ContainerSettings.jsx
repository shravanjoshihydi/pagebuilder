import { useNode } from "@craftjs/core";
import HomeStyles from "../../../pages/Home.module.css";

export const ContainerSettings = () => {
  const {
    container,
    wrapperBgcolor,
    wrapperTop,
    wrapperBottom,
    wrapperPadding,
    className,
    actions: { setProp },
  } = useNode((node) => ({
    container: node.data.props.container,
    wrapperBgcolor: node.data.props.wrapperBgcolor,
    wrapperTop: node.data.props.wrapperTop,
    wrapperBottom: node.data.props.wrapperBottom,
    wrapperPadding: node.data.props.wrapperPadding,
    className: node.data.props.className,
  }));
  return (
    <div className={`${HomeStyles.settings}`}>
      <div>
        <label htmlFor="Container">Container</label>
        <input
          name="Container"
          value={container}
          onChange={(e) =>
            setProp((props) => (props.container = e.target.value))
          }
        />
      </div>
      <div>
        <label htmlFor="wrapperBgcolor">wrapperBgcolor</label>
        <input
          name="wrapperBgcolor"
          value={wrapperBgcolor}
          onChange={(e) =>
            setProp((props) => (props.wrapperBgcolor = e.target.value))
          }
        />
      </div>
      <div>
        <label htmlFor="wrapperTop">wrapperTop</label>
        <input
          name="wrapperTop"
          value={wrapperTop}
          onChange={(e) =>
            setProp((props) => (props.wrapperTop = e.target.value))
          }
        />
      </div>
      <div>
        <label htmlFor="wrapperBottom">wrapperBottom</label>
        <input
          name="wrapperBottom"
          value={wrapperBottom}
          onChange={(e) =>
            setProp((props) => (props.wrapperBottom = e.target.value))
          }
        />
      </div>
      <div>
        <label htmlFor="wrapperPadding">wrapperPadding</label>
        <input
          name="wrapperPadding"
          value={wrapperPadding}
          onChange={(e) =>
            setProp((props) => (props.wrapperPadding = e.target.value))
          }
        />
      </div>
      <div>
        <label htmlFor="className">className</label>
        <input
          name="className"
          value={className}
          onChange={(e) =>
            setProp((props) => (props.className = e.target.value))
          }
        />
      </div>
    </div>
  );
};

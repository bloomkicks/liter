import type { Memory } from "../../store/storage";
import classes from "./Memo.module.scss";

const Memo = (props: Memory) => {
  const image = props.image

  return (
    <div className={classes.memo}>
      {image && (
        <img
          src={"./" + image.src}
          className={(image.vertical && classes.vertical) || ""}
          alt=""
        />
      )}
      <div className={classes.text}>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Memo;

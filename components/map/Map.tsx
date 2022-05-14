import { CSSTransition } from "react-transition-group";
import { MouseEventHandler } from "react";
import { useDispatch } from "react-redux";
import { roomActions } from "../../store";
import classes from "./Map.module.scss";

let isClicked = false;

const wife: "kitchen" | "bedroom" | "wife" | "exponts" | "office" | null =
  "wife";
const exponts: "kitchen" | "bedroom" | "wife" | "exponts" | "office" | null =
  "exponts";
const office: "kitchen" | "bedroom" | "wife" | "exponts" | "office" | null =
  "office";
const kitchen: "kitchen" | "bedroom" | "wife" | "exponts" | "office" | null =
  "kitchen";
const bedroom: "kitchen" | "bedroom" | "wife" | "exponts" | "office" | null =
  "bedroom";

const Map = () => {
  const dispatch = useDispatch();

  const selectHandler: MouseEventHandler<HTMLImageElement> = (e) => {
    const id = e.currentTarget.id;
    isClicked = true;
    dispatch(roomActions.select(id));
  };

  return (
    <CSSTransition
      in={isClicked}
      timeout={300}
      classNames={{ enterActive: classes.entering, enterDone: classes.entered }}
    >
      <section className={classes.map}>
        <div className={classes.top}>
          <img
            onClick={selectHandler}
            id={wife}
            src="./wife.png"
            alt="Комната Жены"
            className={classes.wife}
          />
          <img
            onClick={selectHandler}
            src="./kitchen.png"
            id={kitchen}
            alt="Столовая"
            className={classes.kitchen}
          />
          <img
            onClick={selectHandler}
            src="./bedroom.png"
            id={bedroom}
            alt="Спальня"
            className={classes.bedroom}
          />
          <img
            onClick={selectHandler}
            src="./office.png"
            id={office}
            alt="Кабинет Блока"
            className={classes.office}
          />
        </div>
        <img
          onClick={selectHandler}
          id={exponts}
          src="./exponts.png"
          alt="Экспонаты"
          className={classes.exponts}
        />
      </section>
    </CSSTransition>
  );
};

export default Map;

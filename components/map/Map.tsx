import { CSSTransition } from "react-transition-group";
import { MouseEventHandler, useState } from "react";
import { useDispatch } from "react-redux";
import { roomActions } from "../../store";
import classes from "./Map.module.scss";

let isClicked = false;

const Map = () => {
  const [selected, setSelected] = useState<string | null>(null)
  const dispatch = useDispatch();

  const selectHandler: MouseEventHandler<HTMLImageElement> = (e) => {
    const id = e.currentTarget.id;
    setSelected(id)
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
            id="wife"
            src="./wife.png"
            alt="Комната Жены"
            className={classes.wife + ` ${selected === "wife" && classes.selected || ''}`}
          />
          <img
            onClick={selectHandler}
            src="./kitchen.png"
            id="kitchen"
            alt="Столовая"
            className={classes.kitchen + ` ${selected === "kitchen" && classes.selected || ''}`}
          />
          <img
            onClick={selectHandler}
            src="./bedroom.png"
            id="bedroom"
            alt="Спальня"
            className={classes.bedroom + ` ${selected === "bedroom" && classes.selected || ''}`}
          />
          <img
            onClick={selectHandler}
            src="./office.png"
            id="office"
            alt="Кабинет Блока"
            className={classes.office + ` ${selected === "office" && classes.selected || ''}`}
          />
        </div>
        <img
          onClick={selectHandler}
          id="exponts"
          src="./exponts.png"
          alt="Экспонаты"
          style={{paddingTop: '1px'}}
          className={classes.exponts + ` ${selected === "exponts" && classes.selected || ''}`}
        />
      </section>
    </CSSTransition>
  );
};

export default Map;

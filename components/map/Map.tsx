import { MouseEventHandler } from "react";
import { useDispatch } from "react-redux";
import { roomActions } from "../../store";
import classes from "./Map.module.scss";

const Map = () => {
  const dispatch = useDispatch();

  const selectHandler: MouseEventHandler<HTMLImageElement> = (e) => {
    const id = e.currentTarget.id;
    dispatch(roomActions.select(id));
  };

  return (
    <section className={classes.map}>
      <div className={classes.top}>
        <img
          onClick={selectHandler}
          id="wife"
          src="/wife.png"
          alt="Комната Жены"
          className={classes.wife}
        />
        <img
          onClick={selectHandler}
          src="/kitchen.png"
          id="kitchen"
          alt="Столовая"
          className={classes.kitchen}
        />
        <img
          onClick={selectHandler}
          src="/bedroom.png"
          id="bedroom"
          alt="Спальня"
          className={classes.bedroom}
        />
        <img
          onClick={selectHandler}
          src="/office.png"
          id="office"
          alt="Кабинет Блока"
          className={classes.office}
        />
      </div>
      <img
        onClick={selectHandler}
        id="exponts"
        src="/exponts.png"
        alt="Экспонаты"
        className={classes.exponts}
      />
    </section>
  );
};

export default Map;

import { CSSTransition } from "react-transition-group";
import classes from "./Photos.module.scss";
import storage from "../../store/storage";
import { useEffect, useMemo, useState } from "react";

const Photos = (props: { id: string }) => {
  const images = storage[props.id as keyof typeof storage].photos;
  const [toggle, setToggle] = useState<boolean>(false);

  useEffect(() => {
    setToggle((prev) => !prev);
  }, []);
  useMemo(() => {
    setToggle((prev) => !prev);
    return props.id;
  }, [props.id]);

  return (
    <CSSTransition
      in={toggle}
      timeout={400}
      classNames={{
        enterActive: classes.entering,
        enterDone: classes.entered,
        exitActive: classes.entering,
        exitDone: classes.entered,
      }}
    >
      <section className={classes.photos}>
        {images.map((image) =>
          image.src ? (
            <img src={"./" + image.src} alt="" key={Math.random()} />
          ) : (
            <div className={classes.space} key={Math.random()}></div>
          )
        )}
      </section>
    </CSSTransition>
  );
};

export default Photos;

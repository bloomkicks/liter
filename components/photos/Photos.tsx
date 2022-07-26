import { CSSTransition } from "react-transition-group";
import classes from "./Photos.module.scss";
import rooms from "../../data/rooms";
import { useEffect, useMemo, useState } from "react";

const Photos = (props: { id: string }) => {
  const images = rooms[props.id].photos;
  const [animateIn, setAnimateIn] = useState<boolean>(false);
  function animate(): void {
    setAnimateIn((prev) => !prev);
  }

  useEffect(() => {
    animate();
  }, []);
  useMemo(() => {
    animate();
  }, [props.id]);

  return (
    <CSSTransition
      in={animateIn}
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
            <img
              src={"./" + image.src}
              alt=""
              key={Math.random()}
            />
          ) : (
            <div
              className={classes.space}
              key={Math.random()}
            ></div>
          )
        )}
      </section>
    </CSSTransition>
  );
};

export default Photos;

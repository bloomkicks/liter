import { CSSTransition } from "react-transition-group";
import { useEffect, useState, useMemo } from "react";
import classes from "./Memos.module.scss";
import rooms from "../../data/rooms";
import Memo from "./Memo";

const Memos = (props: { id: string }) => {
  const memos = rooms[props.id].memos;
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
      <section className={classes.memos}>
        {memos.map((memo) => (
          <Memo
            title={memo.title}
            key={memo.title + memo.image}
            text={memo.text}
            image={memo.image}
          />
        ))}
      </section>
    </CSSTransition>
  );
};

export default Memos;

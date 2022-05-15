import { CSSTransition } from "react-transition-group";
import { useEffect, useState, useMemo } from "react";
import classes from "./Memos.module.scss";
import storage from "../../store/storage";
import Memo from "./Memo";

const Memos = (props: { id: string }) => {
  const memos = storage[props.id as keyof typeof storage].memos;
  const [toggle, setToggle] = useState<boolean>(false);

  useEffect(() => {
    setToggle((prev) => !prev);
  }, []);
  useMemo(() => {
    setToggle((prev) => !prev);
    return props.id;
  }, [props.id]);

  console.log(memos);

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
      <section className={classes.memos}>
        {memos.map((memo) => (
          <Memo
            title={memo.title}
            key={Math.random()}
            text={memo.text}
            image={memo.image}
          />
        ))}
      </section>
    </CSSTransition>
  );
};

export default Memos;

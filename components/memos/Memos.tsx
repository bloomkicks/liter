import classes from "./Memos.module.scss";
import storage from "../../store/storage";
import Memo from "./Memo";

const Memos = (props: {id: string }) => {
  const memos = storage[props.id as keyof typeof storage].memos;

  console.log(memos);

  return (
    <section>
      {memos.map((memo) => (
        <Memo title={memo.title} key={Math.random()} text={memo.text} image={memo.image} />
      ))}
    </section>
  );
};

export default Memos;

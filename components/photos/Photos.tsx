import classes from "./Photos.module.scss";

const Photos = (props: {id: string}) => {
  return (
    <section>
      <h1>{props.id} Photos</h1>
    </section>
  );
};

export default Photos;

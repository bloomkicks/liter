import classes from "./Photos.module.scss";
import storage from "../../store/storage";

const Photos = (props: { id: string }) => {
  const images = storage[props.id as keyof typeof storage].photos;

  return (
    <section className={classes.photos}>
      {images.map((image) =>
        image.src ? (
          <img src={"./" + image.src} alt="" key={Math.random()} />
        ) : (
          <div className={classes.space} key={Math.random()}></div>
        )
      )}
    </section>
  );
};

export default Photos;

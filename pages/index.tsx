import { RootState } from "../store";
import type { NextPage } from "next";
import { useSelector } from "react-redux";
import classes from "./index.module.scss";
import Map from "../components/map/Map";
import Memos from "../components/memos/Memos";
import Photos from "../components/photos/Photos";

const translation = {
  kitchen: "Столовая",
  wife: "Комната Жены",
  bedroom: "Спальня",
  office: "Кабинет Блока",
  exponts: "Экспонаты",
};

const Home: NextPage = () => {
  const roomState = useSelector(
    (state: RootState) => state.room
  );

  return (
    <main className={classes.main}>
      <h1>
        {roomState.current
          ? translation[roomState.current]
          : "Квартира А. Блока"}
      </h1>
      <article className={classes.content}>
        <Map />
        {roomState.current && (
          <>
            <Photos id={roomState.current} />
            <Memos id={roomState.current} />
          </>
        )}
      </article>
    </main>
  );
};

export default Home;

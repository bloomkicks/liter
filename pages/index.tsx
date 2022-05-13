import type { NextPage } from "next";
import { useSelector } from "react-redux";
import classes from "./index.module.scss";
import Map from "../components/map/Map";
import Memos from "../components/memos/Memos";
import Photos from "../components/photos/Photos";

const Home: NextPage = () => {
  const roomState = useSelector((state) => state.room);

  return (
    <main className={classes.main}>
      <h1>Квартира-Музей А. Блока</h1>
      <Map />
      {roomState.current && (
        <>
          <Photos id={roomState.current} />
          <Memos id={roomState.current} />
        </>
      )}
    </main>
  );
};

export default Home;

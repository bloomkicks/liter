import { CSSTransition } from "react-transition-group";
import type { NextPage } from "next";
import { useSelector } from "react-redux";
import classes from "./index.module.scss";
import Map from "../components/map/Map";
import Memos from "../components/memos/Memos";
import Photos from "../components/photos/Photos";
import { useState } from "react";

const translation = {
  kitchen: "Столовая",
  wife: "Комната Жены",
  bedroom: "Спальня",
  office: "Кабинет Блока",
  exponts: "Экспонаты",
};

const Home: NextPage = () => {
  const roomState = useSelector<
    { room: { current: string | null } },
    { current: string | null }
  >((state) => state.room);

  return (
    <main className={classes.main}>
      <h1>
        {roomState.current
          ? translation[roomState.current]
          : "Квартира А. Блока"}
      </h1>
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

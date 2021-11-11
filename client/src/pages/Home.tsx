import React, { ReactElement } from "react";
import Announcement from "../components/Announcement/Announcement.component";
import NabBar from "../components/NavBar/NabBar.component";
import Slider from "../components/Slider/Slider.component";
interface Props {}

export default function Home({}: Props): ReactElement {
  return (
    <div>
      <Announcement />
      <NabBar />
      <Slider />
    </div>
  );
}

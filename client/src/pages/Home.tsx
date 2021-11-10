import React, { ReactElement } from "react";
import Announcement from "../components/Announcement/Announcement.component";
import NabBar from "../components/NavBar/NabBar.component";

interface Props {}

export default function Home({}: Props): ReactElement {
  return (
    <div>
      <Announcement />
      <NabBar />
    </div>
  );
}

import React, { ReactElement } from "react";
import Announcement from "../components/Announcement/Announcement.component";
import NabBar from "../components/NavBar/NabBar.component";

import Categories from "../components/Categories/Categories.component";
import Slider from "../components/Slider/Slider.component";
import Products from "../components/Product/Product.component";
import Newsletter from "../components/Newsletter/Newsletter.component";
interface Props {}

export default function Home({}: Props): ReactElement {
  return (
    <div>
      <Announcement />
      <NabBar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
    </div>
  );
}

import React from "react"
import Slidern from "./components/Slider"
import Topheader from "./components/Topheader"
import Header from "./components/Header"
import HomeSlider from "./components/HomeSlider"
import SectionTitle from "./components/SectionTitle"
import Slider2 from "./components/Slider2"

function App() {
  return (
    <>
      <Topheader />
      <Header />
      <HomeSlider />
      <SectionTitle section_title_name="Flash" />
      <Slidern />
      <SectionTitle section_title_name="Top Categories" />
      <Slider2 />
    </>
  )
}

export default App

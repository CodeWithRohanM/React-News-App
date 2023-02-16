import { useState } from "react";
import Header from "./Components/Header";
import News from "./Components/News";

import { useSelector, useDispatch } from "react-redux";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {


  const currentCountryName = useSelector((state)=>state.changeNews.country);
  const dispatch = useDispatch();



  const Business = "CategoryIcons/growth.png"
  const Health = "CategoryIcons/healthcare.png";
  const Science = "CategoryIcons/chemistry.png";
  const Technology = "CategoryIcons/technology.png";
  const Entertainment = "CategoryIcons/popcorn.png";
  const Global = "CategoryIcons/icons8-globe-africa-94.png";
  const Sports = "CategoryIcons/balls-sports.png";


  const sportsImage = "CategoryBackgrounds/sports.jpg";
  const technologyImage = "CategoryBackgrounds/technologyy.jpg";
  const scienceImage = "CategoryBackgrounds/science.jpg";
  const businessImage = "CategoryBackgrounds/business.jpg";
  const healthImage = "CategoryBackgrounds/health.jpg";
  const entertainmentImage = "CategoryBackgrounds/entertainment.jpg";
  const globalImage = "CategoryBackgrounds/newsBackground.jpg";



  return <>

    <Router>

      <Routes>


        <Route exact path="/" element={
          <>
            <Header />
            <News key="general" category="general" headline="GLOBAL" categoryIcon={Global} backgroundImage={globalImage} />

          </>
        }>
        </Route>

        <Route exact path="/sports" element={
          <>
            <Header />
            <News key="sports" category="sports" headline="SPORTS" categoryIcon={Sports} backgroundImage={sportsImage} />
          </>
        }>
        </Route>

        <Route exact path="/business" element={
          <>
            <Header/>
            <News key="business" category="business" headline="BUSINESS" categoryIcon={Business} backgroundImage={businessImage} />
          </>
        }>
        </Route>

        <Route exact path="/health" element={
          <>
            <Header/>
            <News key="health" category="health" headline="HEALTH" categoryIcon={Health} backgroundImage={healthImage} />
          </>
        }>
        </Route>

        <Route exact path="/entertainment" element={
          <>
            <Header/>
            <News key="entertainment" category="entertainment" headline="ENTERTAINMENT" categoryIcon={Entertainment} backgroundImage={entertainmentImage} />
          </>
        }>
        </Route>

        <Route exact path="/science" element={
          <>
            <Header/>
            <News key="science" category="science" headline="SCIENCE" categoryIcon={Science} backgroundImage={scienceImage} />
          </>
        }>
        </Route>

        <Route exact path="/technology" element={
          <>
            <Header />
            <News key="technology" category="technology" headline="TECHNOLOGY" categoryIcon={Technology} backgroundImage={technologyImage} />
          </>
        }>
        </Route>


      </Routes>

    </Router>
  </>
}

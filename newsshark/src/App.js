import { Component } from "react";
import Header from "./Components/Header";
import News from "./Components/News";
import Sports from "/Users/rohanmote/Desktop/Test_React_News_App/newsshark/src/CategoryIcons/balls-sports.png";

import Business from "/Users/rohanmote/Desktop/Test_React_News_App/newsshark/src/CategoryIcons/growth.png";

import Health from "/Users/rohanmote/Desktop/Test_React_News_App/newsshark/src/CategoryIcons/healthcare.png";

import Science from "/Users/rohanmote/Desktop/Test_React_News_App/newsshark/src/CategoryIcons/chemistry.png";

import Technology from "/Users/rohanmote/Desktop/Test_React_News_App/newsshark/src/CategoryIcons/technology.png";

import Entertainment from "/Users/rohanmote/Desktop/Test_React_News_App/newsshark/src/CategoryIcons/popcorn.png";

import Global from "/Users/rohanmote/Desktop/Test_React_News_App/newsshark/src/CategoryIcons/icons8-globe-africa-94.png";

import sportsImage from "/Users/rohanmote/Desktop/Test_React_News_App/newsshark/src/CategoryBackgrounds/sports.jpg";

import technologyImage from "/Users/rohanmote/Desktop/Test_React_News_App/newsshark/src/CategoryBackgrounds/technology.jpg";

import scienceImage from "/Users/rohanmote/Desktop/Test_React_News_App/newsshark/src/CategoryBackgrounds/science.jpg";

import businessImage from "/Users/rohanmote/Desktop/Test_React_News_App/newsshark/src/CategoryBackgrounds/business.jpg";

import healthImage from "/Users/rohanmote/Desktop/Test_React_News_App/newsshark/src/CategoryBackgrounds/health.jpg";

import entertainmentImage from "/Users/rohanmote/Desktop/Test_React_News_App/newsshark/src/CategoryBackgrounds/entertainment.jpg";

import globalImage from "/Users/rohanmote/Desktop/Test_React_News_App/newsshark/src/CategoryBackgrounds/newsBackground.jpg";




import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {

  render() {
    return <>

      <Router>

        <Routes>


          <Route exact path="/" element={
            <>
              <Header />
              <News key="general" country="in" category="general" headline="GLOBAL" categoryIcon={Global} backgroundImage={globalImage} />
            </>
          }>
          </Route>

          <Route exact path="/sports" element={
            <>
              <Header />
              <News key="sports" country="in" category="sports" headline="SPORTS" categoryIcon={Sports} backgroundImage={sportsImage} />
            </>
          }>
          </Route>

          <Route exact path="/business" element={
            <>
              <Header  />
              <News key="business" country="in" category="business" headline="BUSINESS" categoryIcon={Business} backgroundImage={businessImage} />
            </>
          }>
          </Route>

          <Route exact path="/health" element={
            <>
              <Header />
              <News key="health" country="in" category="health" headline="HEALTH" categoryIcon={Health} backgroundImage={healthImage} />
            </>
          }>
          </Route>

          <Route exact path="/entertainment" element={
            <>
              <Header />
              <News key="entertainment" country="in" category="entertainment" headline="ENTERTAINMENT" categoryIcon={Entertainment} backgroundImage={entertainmentImage} />
            </>
          }>
          </Route>

          <Route exact path="/science" element={
            <>
              <Header />
              <News key="science" country="in" category="science" headline="SCIENCE" categoryIcon={Science} backgroundImage={scienceImage} />
            </>
          }>
          </Route>

          <Route exact path="/technology" element={
            <>
              <Header />
              <News key="technology" country="in" category="technology" headline="TECHNOLOGY" categoryIcon={Technology} backgroundImage={technologyImage} />
            </>
          }>
          </Route>


        </Routes>

      </Router>
    </>
  }
}

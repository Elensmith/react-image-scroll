import React from "react";
import './App.css';
import ScrollLeft from "./ScrollLeft";
import ScrollRight from "./ScrollRight";
import main_image from "../images/main_image.jpg";
import row1_image1 from "../images/row1_image1.jpg";
import row1_image2 from "../images/row1_image2.jpg";
import row1_image3 from "../images/row1_image3.jpg";
import row2_image1 from "../images/row2_image1.jpg";
import row2_image2 from "../images/row2_image2.jpg";
import row2_image3 from "../images/row2_image3.jpg";
import row2_image4 from "../images/row2_image4.jpg";
import row2_image5 from "../images/row2_image5.jpg";
import row2_image6 from "../images/row2_image6.jpg";
import row2_image7 from "../images/row2_image7.jpg";
import row2_image8 from "../images/row2_image8.jpg";
import row3_image1 from "../images/row3_image1.jpg";
import row3_image2 from "../images/row3_image2.jpg";
import row3_image3 from "../images/row3_image3.jpg";
import row3_image4 from "../images/row3_image4.jpg";
import row3_image5 from "../images/row3_image5.jpg";
import row3_image6 from "../images/row3_image6.jpg";
import ScrollAnimation from 'react-animate-on-scroll';

function App() {
  return (
    <div className="app">
      <img src={main_image} alt="" className="app__header" />
      <ScrollAnimation animateIn="fadeIn"
        animateOut='fadeOut'>
        <ScrollLeft 
        card1={row1_image1}
        card2={row1_image2}
        card3={row1_image3}
        subtitle="01"
        title="BRAND"
        />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn"
      animateOut='fadeOut'>
        <ScrollRight 
        card1={row2_image1}
        card2={row2_image2}
        card3={row2_image3}
        card4={row2_image4}
        card5={row2_image5}
        card6={row2_image6}
        card7={row2_image7}
        card8={row2_image8}
        subtitle="02"
        title="CONTENT PRODUCTION"
        />
        </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn"
      animateOut='fadeOut'>
        <ScrollLeft 
        card1={row3_image1}
        card2={row3_image2}
        card3={row3_image3}
        card4={row3_image4}
        card5={row3_image5}
        card6={row3_image6}
        subtitle="03"
        title="DIGITAL"
        />
      </ScrollAnimation>
    </div>
  );
}

export default App;

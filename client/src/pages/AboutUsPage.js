import React from "react";
// import UDecideTitleArea from "../components/UDecideTitleArea";
import "./css/aboutus.css";
import Hero from "./Hero";

function AboutUsPage(props) {
  document.getElementsByTagName('body')[0].style.backgroundColor = '#90b753'

  return (

    <Hero>
      <section className='about-section '>
        <div className='about'>ABOUT</div>

        <p>
          Created as a project for CUNY Tech Prep’s Web Development track,
          the idea for this site was created through a brief moment of indecisiveness,
          when we were unexpectedly given the prompt:
        </p>
        &nbsp;
        <p>
          “What would you want to do your project about?”
        </p>
        &nbsp;
        <p>
          Over the course of a semester, we ended up bringing together our skills
          and coursework of UI design, front end, and back end development into our
          baby of a project.
        </p>

        &nbsp;
        <p>
          We solved the decision of what project we wanted to make,
          and you too can use this to help solve decisions in the future!
        </p>
      </section>
    </Hero>

  );
}

export default AboutUsPage;

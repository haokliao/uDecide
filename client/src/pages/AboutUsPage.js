import React from "react";
// import UDecideTitleArea from "../components/UDecideTitleArea";
import "./css/aboutus.css";

function AboutUsPage(props) {
  return <div>


    {/* <div class='navbar'>
      <span class='navbar-logo'>:):</span>
      <span class='navbar-name'>uDecide</span>
    </div> */}

    {/* class name */}
  
  <div class='d-flex align-items-center min-vh-100'>

    <div class="container-fluid">
      <div class="row">

        <div class="col-lg-6 col-md-6 col-sm-12 ">
          {/* <!-- uDecide title area --> */}
          <section class="hero-content">
            <div class="hero-logo">:):</div>
            <h1 class="hero-name">uDecide</h1>
            <div class='hero-text'>
            <p>a website designed to</p>
            <p>
              help <span class="textColorCream">YOU</span> make decisions
            </p>
            </div>
          </section>
        </div>

        <div class="col-lg-6 col-md-6 col-sm-12">
        

        <section class='about-section '>
          <div class='about'> ABOUT</div>

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
        </div>

      </div>
    </div>

  </div>    
  </div>;
}

export default AboutUsPage;

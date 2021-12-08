import React from "react";

const Hero = (props) => (
  <div>

      <div className='d-flex align-content-center min-vh-90'>

        <div className="container-fluid">
          <div className="row">

            <div className="col-lg-5 col-md-5 col-sm-12 ">
              {/* <!-- uDecide title area --> */}
              <section className="hero-content">
                <div className="hero-logo">:):</div>
                <h1 className="hero-name">uDecide</h1>
                <div className='hero-text'>
                  <p>a website designed to</p>
                  <p>
                    help <span className="textColorCream">YOU</span> make decisions
                  </p>
                </div>
              </section>
            </div>

            <div className="col-lg-7 col-md-7 col-sm-12">
              {props.children}
            </div>

          </div>
        </div>

      </div>
    </div>
);

export default Hero;

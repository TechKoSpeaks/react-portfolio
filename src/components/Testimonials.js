import React, { Component } from 'react';
export default class Testimonials extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="columns header-col">
            <h2>Resume : <a class="button" href="https://docs.google.com/document/d/1iMJFDzid7c-mCA4b2vQoJPSLNOII7lex9CM5JbsaqaU/edit?usp=sharing" target="_blank">Click Me</a> </h2>
            <br />
              <h1>Travis has a knack for learning and picking up things on the fly, he has a positive attitude, is intelligent and creative and all these qualities translate nicely in his projects, collaborations and professional work."</h1>
              <h2>- John Desrosiers (UCSD Instructor) </h2>
            </div> 
          </div> {/* row ends */}
        </div>  {/* text-container ends */}
      </section>
        );
  }
}
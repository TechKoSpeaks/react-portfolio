import React, { Component } from 'react';
export default class Testimonials extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="columns header-col">
              <h1>This guy has a wonderful future in coding."</h1>
              <h2>- Someone Technical</h2>
            </div> 
          </div> {/* row ends */}
        </div>  {/* text-container ends */}
      </section>
        );
  }
}
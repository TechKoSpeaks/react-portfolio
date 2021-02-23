import React, { Component } from 'react';
export default class Testimonials extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="olumns header-col">
              <h1><span>Client Testimonials</span></h1>
              <h2>This guy has a wonderful future in coding."</h2>
              <h2>- Someone Technical</h2>
            </div>
    
          </div> {/* row ends */}
        </div>  {/* text-container ends */}
      </section>
        );
  }
}
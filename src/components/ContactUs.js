import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <h1>
              CONTACT INFORMATION:
              </h1>
          </div>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <h4> MY RESUME : <a href="https://docs.google.com/document/d/1iMJFDzid7c-mCA4b2vQoJPSLNOII7lex9CM5JbsaqaU/edit?usp=sharing" target="_blank">Resume Link</a></h4>
              <h4> LinkedIn : <a href="https://www.linkedin.com/in/travisko/" target="_blank">LinkedIn Profile</a></h4>
              <h4> Email : <a
                href="https://mail.google.com/mail/u/0/#inbox?compose=new">tkospeaks@gmail.com</a></h4>
              <h4>Github : <a
                href="https://github.com/TechKoSpeaks" target="_blank">TechKoSpeaks</a></h4>
              <h4> Phone: (206) 694-3202</h4>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}
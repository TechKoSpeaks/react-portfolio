import React, { Component } from 'react';
export default class About extends Component {
   render() {
      let resumeData = this.props.resumeData;
      return (
         <section id="about">
            <div className="row">

               <div className="three columns">
                  <img className="profile-pic" href="/profile-pic.jpg" alt="" />
               </div>

               <div className="nine columns main-col">

                  <h2>About Me</h2>
                  <h2><strong>
                     {
                        resumeData.aboutme
                     }
                  </strong></h2>
                  <div className="row">
                     <br />

                     <div className="two-columns contact-details">

                        <p className="address">
                           <h2>Name: Travis Ko</h2>
                           <h2>Phone: (206) 694-3202</h2>
                           <h2><a href="https://mail.google.com/mail/u/0/#inbox?compose=new">Email: tkospeaks@gmail.com</a></h2>
                           <btn class="button" href="https://docs.google.com/document/d/1iMJFDzid7c-mCA4b2vQoJPSLNOII7lex9CM5JbsaqaU/edit?usp=sharing" target="_blank">Resume Link</btn>
                           <btn class="button" href="https://www.linkedin.com/in/travisko/" target="_blank">LinkedIn Profile</btn>
                           <btn class="button" href="https://github.com/TechKoSpeaks" target="_blank">Github Profile</btn>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}
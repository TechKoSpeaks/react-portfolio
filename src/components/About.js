import React, { Component } from 'react';
export default class About extends Component {
   render() {
      let resumeData = this.props.resumeData;
      return (
         <section id="about">
            <div className="row">

               <div className="three columns">

                  <img className="profile-pic" href="images/profile-pic.jpg" alt="" />

               </div>

               <div className="nine columns main-col">

                  <h2>About Me</h2>
                  <p>
                     {
                        resumeData.aboutme
                     }
                  </p>

                  <div className="row">

                     <div className="columns contact-details">

                        <h2>Contact Details</h2>
                        <p className="address">
                           <h3>Name: Travis Ko</h3>
                           <h4>Phone: (206) 694-3202</h4>
                           <h4>LinkedIn : <a href="https://www.linkedin.com/in/travisko/" target="_blank">LinkedIn Profile</a></h4>
                           <h4>Github : <a href="https://github.com/TechKoSpeaks" target="_blank">Github Profile</a></h4>
                           <h4> Email : <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">tkospeaks@gmail.com</a></h4>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}
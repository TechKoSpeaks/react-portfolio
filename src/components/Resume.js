import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

        <div className="row education">

          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="flexslider">

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item) => {
                  return (
                    <div className="row item">
                      <div className="twelve columns">
                        <h3>{item.UniversityName}</h3>
                        <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                        <p>
                          {item.Achievements}
                        </p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData.work && resumeData.work.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.CompanyName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                      <p>
                        {item.Achievements}
                      </p>
                    </div>

                  </div>

                )
              })
            }
          </div>
        </div>

        <div class="testimonials">
          <div className="row skill">

            <div className="three columns header-col">
              <h1><span>Skills</span></h1>
            </div>
            <br/>
            <br/>

            <div><strong>Languages:</strong> HTML5, CSS, React, Javascript, Express, jQuery, AJAX/JSON, Sequelize</div>
            <div><strong>Applications:</strong> OnBase, Salesforce, Workday, VS Code, Command Terminal, Symitar, Zoom, Heroku, Microsoft Excel, PowerPoint, Word, MS Teams</div>
            <div><strong>Databases:</strong> MySQL, MongoDB, NoSQL, Multi APIs</div>
            <div><strong>Professional Skills:</strong> Customer Service, Banking and Finance, Application Analysis, Programming</div>
            <div className="nine columns main-col">
              <br />
              <p>
                Animation of {resumeData.skillsDescription} Development Speed
              </p>

              <div className="bars">

                <ul className="skills">
                  {
                    resumeData.skills && resumeData.skills.map((item) => {
                      return (
                        <li>
                          <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                          </span><em>{item.skillname}</em>
                        </li>
                      )
                    })
                  }

                </ul>
              </div>
            </div>
          </div>
        </div>


        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
        </p>

      </section>
    );
  }
}
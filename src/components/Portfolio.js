import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Coding Portfolio</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">

            <div class="flex-row p2 m2 rcorners2">Employee Directory Application:<p>
                    <a class="waves-effect waves-light button"
                        href="https://techkospeaks.github.io/employee-directory/" target="_blank">Employee Directory</a> | 
                    <a class="waves-effect waves-light button"
                        href="https://github.com/TechKoSpeaks/employee-directory.git" target="_blank">ED
                        Repository</a>
                </p>
            </div>

                <div class="codingProjects flex-row p2 m2 rcorners2">Weather Dashboard API Website Application:<p>
                    <a class="waves-effect waves-light button"
                        href="https://techkospeaks.github.io/Portfolio-Weather-Dashboard/" target="_blank">Weather
                        Dashboard</a> |
                    <a class="waves-effect waves-light button"
                        href="https://github.com/TechKoSpeaks/Portfolio-Weather-Dashboard.git" target="_blank">WD
                        Repository</a>
                </p>
            </div>

            <div class="codingProjects flex-row p1 m2 rcorners2">Random Password Generator Application:<p>
                <a class="btn waves-effect waves-light button m2 p2"
                    href="https://techkospeaks.github.io/Portfolio-Password-Generator/" target="_blank">Password
                    Generator</a> |  
                <a class="waves-effect waves-light button m1 p2"
                    href="https://github.com/TechKoSpeaks/Portfolio-Password-Generator.git" target="_blank">PG
                    Repository</a>
                    </p>

              {/* {
                resumeData.portfolio && resumeData.portfolio.map((item) => {
                  return (
                    <div className="columns portfolio-item">
                      <div className="item-wrap">
                        <a href="#modal-01">
                          <card href="https://techkospeaks.github.io/Portfolio-Password-Generator/" />
                          <div className="card">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                              <p>{item.href}</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  )
                })
              } */}
            </div>
          </div>
        </div>
        </div>
      </section>
    );
  }
}
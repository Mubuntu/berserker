import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import ritchie from '../img/ritchie.jpg'

class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div 
            id="avatarDiv"
             style={{textAlign: 'center'}}>
              <img
                src={ritchie}
                alt="avatar"
                className="avatarImage"
                // style={{height: '200px',  top: '55px', right: '205px', borderRadius: '100px'}}
                 />
            </div>

            <h2 style={{paddingTop: '-1em'}}>Ritchie Maes</h2>
            <h4 style={{color: 'grey'}}>Diëtist</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>1 bramestraat 18 4413EX Krabbendijke</p>
            <h5>Phone</h5>
            <p>+31 493 735 830</p>
            <h5>Email</h5>
            <p>dietistritchiemaes@outlook.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2013}
              endYear={2016}
              schoolName="AP Hogeschool Antwerpen"
              schoolDescription="bachelor, Voeding en dietiek (Nutrition and dietetics)"
               />

              <h2>Experience</h2>

            <Experience
              startYear={2017}
              endYear={2017}
              jobName="Shop Manager bij Workout"
              jobDescription=""              />

              <Experience
                startYear={2016}
                endYear={"heden"}
                jobName="Geregistreerd diëtist"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />

                <Experience
                startYear={2017}
                endYear={2018}
                jobName="food technologist & QC"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              {/* <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      /> */}


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;

import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Dietist Ritchie Maes</h1>

            <hr/>

          {/* <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MongoDB</p> */}

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/ritchie-maes-94a614134/?originalSubdomain=be" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Facebook*/}
          <a href="https://www.facebook.com/dietistritchiemaes/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-facebook-square" aria-hidden="true" />
          </a>

          {/* Freecodecamp */}
          <a href="dietistritchiemaes@outlook.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-envelope-square" aria-hidden="true" />
          </a>

          {/* Youtube */}
          {/* <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-youtube-square" aria-hidden="true" />
          </a> */}

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;

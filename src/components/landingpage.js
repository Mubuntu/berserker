import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


const Landing  = (props)=> {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={require("../img/logox4.png")}
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Diëtist Ritchie Maes</h1>

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
          <Cell col={6}>
            <h3>About me</h3>
            <p>
            Als diëtist zijnde, heb ik mijn opleiding genoten aan de AP Hogeschool te Antwerpen. Naast een specialisatie in Klinische & Algemene Diëtiek, ben ik ook gespecialiseerd in Sportdiëtiek. Dat wil zeggen dat zo goed als iedereen bij mij terecht kan. Heb je problemen met je gezondheid of lopen je sportprestaties niet zoals je had gehoopt? Maak dan kennis met mijn persoonlijke en klantvriendelijke aanpak die ik al van 2016 hanteer.
            </p>
          </Cell>
          <Cell col={6}>
            <h3>AFSPRAAK MAKEN</h3>
            <p>Indien je geïnteresseerd bent in een afspraak, kan je hieronder 4 blokken vinden waarin we samen kunnen zitten. Bekijk in welk blok je beschikbaar bent en aarzel niet om me te contacteren.</p>
            <p>Maandag 18u00 – 22u00</p>
            <p>Woensdag 16u30 – 21u00 </p>
            <p>Vrijdag 09u00 – 16u00</p>
            <p>Vrijdag 09u00 – 16u00</p>
          </Cell> 
            {/* interactive links maken of een calend er waarin je bvb na het klikken automatisch een mail verzend */}

        </Grid>
      </div>
    )
  }


export default Landing;

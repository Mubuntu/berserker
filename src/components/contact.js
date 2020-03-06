import React, { Component } from "react";
import berserker_logo from "../img/logox4.png";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

const Contact = props => {
  return (
    <div className="contact-body">
      <Grid
        className="contact-grid"
        container
        direction="column"
        alignItems="stretch"
      >
        <Cell col={6} xs={3}>
          <h2 id="name-title-main" className="header-title">
            Ritchie Maes
          </h2>
          {/* <h2 id="name-title-sub" className="header-title">
              Diëtist & Fitnesscoach
            </h2> */}
        </Cell>
        <Cell col={4} xs={1}>
          <img
            // src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
            src={berserker_logo}
            alt="avatar"
            id="avatar-contact"
            style={{ height: "250px", borderRadius: "25px" }}
          />
        </Cell>
        <Cell col={12}>
          {/* <h2>Contacteer Me</h2>
            <hr /> */}

          <div className="contact-list">
            <List>
              <ListItem>
                <ListItemContent
                  className="list-content"
                  style={{
                    fontSize: "30px",
                    fontFamily: "Anton",
                    color: "#cfb87c"
                  }}
                >
                  <i
                    className="fa fa-user"
                    // style={{ color: "#3c3c3b", backgroundColor: "#CFB87C" }}
                    aria-hidden="true"
                  />
                  Enkel op afspraak
                </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent
                  style={{
                    fontSize: "30px",
                    fontFamily: "Anton",
                    color: "#cfb87c"
                  }}
                >
                  <i
                    className="fa fa-phone"
                    // style={{ color: "#3c3c3b", backgroundColor: "#CFB87C" }}
                    aria-hidden="true"
                  />
                  +32 493 73 58 30
                </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent
                  className="list-content"
                  style={{
                    fontSize: "30px",
                    fontFamily: "Anton",
                    color: "#cfb87c"
                  }}
                >
                  <i
                    className="fa fa-envelope"
                    aria-hidden="true"
                    // style={{ color: "#3c3c3b", backgroundColor: "#CFB87C" }}
                  />
                  dietistritchiemaes@outlook.com
                </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent
                  id="list-content-address"
                  style={{
                    fontSize: "30px",
                    fontFamily: "Anton",
                    color: "#cfb87c"
                  }}
                >
                  <i
                    className="fa fa-home"
                    aria-hidden="true"
                    // style={{ color: "#3c3c3b", backgroundColor: "#CFB87C" }}
                  />
                  bramestraat 18 4413EX Krabbendijke
                </ListItemContent>
              </ListItem>
            </List>
          </div>
        </Cell>
      </Grid>
    </div>
  );
};

export default Contact;

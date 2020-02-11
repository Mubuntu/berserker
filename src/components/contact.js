import React, { Component } from "react";
import berserker_logo from "../img/logo.png";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Ritchie Maes</h2>
            <img
              // src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              src={berserker_logo}
              alt="avatar"
              style={{ height: "250px", borderRadius: "25px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contacteer Me</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (+31) 493 735 830
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <a
                      id="link"
                      href="https://www.facebook.com/dietistritchiemaes/"
                    >
                      {" "}
                      <i className="fa fa-facebook-square" aria-hidden="true" />
                    </a>
                    {/* https://www.facebook.com/dietistritchiemaes/ */}
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent className="list-content"
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    dietistritchiemaes@outlook.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent className="list-content"
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-home" aria-hidden="true" />
                    bramestraat 18 4413EX Krabbendijke
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;

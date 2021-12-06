import React from "react";
import styled, { css } from "styled-components";
import { NavLink as Link } from "react-router-dom";

import * as colors from "../../colors";
import Arrow from "../../images/arrow-icon.png";
import SearchWhite from "../../images/search-icon-white.png";
import ArrowIcon from "../../images/arrow-icon.png";
import SearchIconWhite from "../../images/search-icon-white.png";

export default class SideNavBar extends React.Component {
  /* Write the necessary functions to show and hide the side bar on small devices */

  // state = {
  //   hoverColor: ''
  // }

  // onMouseOverColor = () => {
  //   this.setState({ hoverColor: colors.primaryColor})
  // };

  // would've been an inline style
  // onMouseOver={this.onMouseOverColor} style={this.state.hoverColor ? {color: this.state.hoverColor} : null}

  render() {
    // const { isOpen } = this.state;
    // className={isOpen ? 'visible' : ''}

    return (
      <SideNavBarCont>
        {/* Implement a hamburger icon slide in effect for small devices */}
        <SideNavMainLink className="menu_nav_link main_nav_link" to="/" exact>
          Wesley
          <NavIcon arrow>
            <img src={ArrowIcon} />
          </NavIcon>
        </SideNavMainLink>
        <SideNavMainLink className="menu_nav_link" to="/discover">
          Discover
          <NavIcon search>
            <img src={SearchIconWhite} />
          </NavIcon>
        </SideNavMainLink>
        <SideNavHeader>
          <HeaderText>Watched</HeaderText>
        </SideNavHeader>
        <hr style={{ width: "100%", textAlign: "left", marginLeft: "0" }} />
        <NavLink className="menu_nav_link" to="/watched/movies">
          Movies
        </NavLink>
        <NavLink className="menu_nav_link" to="/watched/tv-shows">
          Tv Shows
        </NavLink>
        <SideNavHeader>
          <HeaderText>Saved</HeaderText>
        </SideNavHeader>
        <hr style={{ width: "100%", textAlign: "left", marginLeft: "0" }}></hr>
        <NavLink className="menu_nav_link" to="/saved/movies">
          Movies
        </NavLink>
        <NavLink className="menu_nav_link" to="/saved/tv-shows">
          Tv Shows
        </NavLink>
      </SideNavBarCont>
    );
  }
}

const SideNavBarCont = styled.div`
  position: fixed;
  z-index: 9;
  width: 280px;
  height: 100%;
  background-color: ${colors.sideNavBar};
`;

const SideNavMainLink = styled(Link)`
  position: relative;
  display: block;
  padding: 25px 35px;
  font-size: 1.6em;
  font-weight: 700;
  color: white;
`;

const NavIcon = styled.div`
  position: absolute;
  right: 35px;
  top: 32%;
`;

const SideNavHeader = styled.div``;

const HeaderText = styled.div`
  position: relative;
  display: block;
  padding: 25px 35px;
  font-size: 1.6em;
  font-weight: 300;
  color: white;
`;

const NavLink = styled(Link)`
  position: relative;
  display: block;
  padding: 6px 35px;
  color: white;
  font-size: 1.4em;
  font-weight: 100;
`;

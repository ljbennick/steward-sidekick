import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Container } from "semantic-ui-react";
import SignedOutMenu from "./SignedOutMenu";
import SignedInMenu from "./SignedInMenu";
import { useSelector } from "react-redux";

export default function NavBar({ setFormOpen }) {
  const { authenticated } = useSelector((state) => state.auth);

  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} exact to="/" header>
          <img
            src="/images/att2png.png"
            alt="logo"
            style={{ marginRight: "15px" }}
          />
          Steward SideKick
        </Menu.Item>
        <Menu.Item as={NavLink} to="/restaurants" name="Restaurants" />
        <Menu.Item as={NavLink} to="/hotels" name="Hotels"></Menu.Item>
        {authenticated ? <SignedInMenu /> : <SignedOutMenu />}
      </Container>
    </Menu>
  );
}

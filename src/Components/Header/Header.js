import React, { Fragment } from "react";
import "./Header.css";
const Header = (props) => {
  return (
    <Fragment>
      <header className="header">
        <h1>
          {props.Title} - {props.NickName}
        </h1>
      </header>
    </Fragment>
  );
};
export default Header;

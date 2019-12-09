import { Avatar } from "antd";
import { useState } from "react";
import "./style.css";

export default ({ size, txt }) => (
  <div>
    <Avatar
      size={size}
      src="https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg"
    />
    <h4 className="uk-margin-small-top">{txt}</h4>
  </div>
);

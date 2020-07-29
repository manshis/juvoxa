import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  HomeFilled,
  LineChartOutlined,
  TableOutlined
} from "@ant-design/icons";
import { Tooltip } from "antd";

function SideNav() {
  let location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <Tooltip title="Home" placement="right">
        <NavLink
          to="/"
          className="nav-icons"
          exact
          activeClassName="active-link"
        >
          <HomeFilled style={{ fontSize: "20px", color: "white" }} />
        </NavLink>
      </Tooltip>
      <Tooltip title="Networth" placement="right">
        <NavLink
          to="/networth"
          className="nav-icons"
          activeClassName="active-link"
        >
          <LineChartOutlined style={{ fontSize: "20px", color: "white" }} />
        </NavLink>
      </Tooltip>
      <Tooltip title="Holdings" placement="right">
        <NavLink
          to="/holdings"
          className="nav-icons"
          activeClassName="active-link"
        >
          <TableOutlined style={{ fontSize: "20px", color: "white" }} />
        </NavLink>
      </Tooltip>
    </>
  );
}

export default SideNav;

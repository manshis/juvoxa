import React from "react";
import { Link } from "react-router-dom";

import { Button, PageHeader } from "antd";
import { LineChartOutlined, TableOutlined } from "@ant-design/icons";

import "../../assets/main.css";

function HomePage() {
  return (
    <>
      <div>
        <PageHeader className="site-page-header" title="Dashboard" />
      </div>
      <div className="nav-container">
        <div className="nav">
          <LineChartOutlined style={{ fontSize: "50px" }} />
          <Link to="/networth" className="nav-buttons">
            <Button className="nav-buttons" type="primary">
              Networth
            </Button>
          </Link>
        </div>
        <div className="nav">
          <TableOutlined style={{ fontSize: "50px" }} />
          <Link to="/holdings" className="nav-buttons">
            <Button className="nav-buttons" type="primary">
              Holdings
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default HomePage;

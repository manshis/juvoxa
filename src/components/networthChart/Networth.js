import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import { loadNetworth } from "../../redux/actions/networthActions";
import moment from "moment";
import { PageHeader } from "antd";

import "../../assets/networth.css";

function Networth({ networth, loadNetworth }) {
  useEffect(() => {
    if (networth.length <= 0) {
      loadNetworth().catch(error => {
        alert("Loading networth data failed" + error);
      });
    }
  }, [networth]);

  useEffect(() => {
    let chart = am4core.create("chartdiv", am4charts.XYChart);

    chart.paddingRight = 20;
    chart.data = networth.filter(nw => {
      return moment(nw["traded_on"], "DD-MM-YYYY").isAfter(
        moment().subtract(12, "months")
      );
    });

    // Create axes
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.dateFormatter.inputDateFormat = "dd-MM-yyyy";

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    var series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "net_worth";
    series.dataFields.dateX = "traded_on";
    series.tooltipText = "{net_worth}";
    series.strokeWidth = 1;
    series.minBulletDistance = 15;

    // Drop-shaped tooltips
    series.tooltip.background.cornerRadius = 20;
    series.tooltip.background.strokeOpacity = 0;
    series.tooltip.pointerOrientation = "vertical";
    series.tooltip.label.minWidth = 40;
    series.tooltip.label.minHeight = 40;
    series.tooltip.label.textAlign = "middle";
    series.tooltip.label.textValign = "middle";

    // Create a horizontal scrollbar with previe and place it underneath the date axis
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.lineY.opacity = 0;
    chart.scrollbarX = new am4charts.XYChartScrollbar();
    chart.scrollbarX.series.push(series);

    return () => {
      chart.dispose();
    };
  }, [networth]);

  return (
    <>
      <PageHeader className="site-page-header" title="Networth" />

      <div className="chart-container">
        <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
      </div>
    </>
  );
}

Networth.propTypes = {
  loadNetworth: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    networth: state.networth
  };
}

const mapDispatchToProps = {
  loadNetworth
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Networth);

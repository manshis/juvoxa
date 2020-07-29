import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Switch } from "antd";

import PropTypes from "prop-types";
import { PageHeader } from "antd";
import { loadHoldings } from "../../redux/actions/holdingsActions";
import HoldingsGroupedBy from "./HoldingsGroupedBy";
import HoldingsDataTable from "./HoldingsDataTable";

import "../../assets/holdings.css";

function Holdings({ holdings, loadHoldings }) {
  const [isGrouped, setIsGrouped] = useState(false);
  const [holdingsGroupedBy, setHoldingsGroupedBy] = useState([]);

  function onChange(checked) {
    setIsGrouped(checked);
    if (holdingsGroupedBy.length <= 0) {
      let assetClassGroup = {};
      holdings.forEach(holding => {
        if (!assetClassGroup.hasOwnProperty(holding.asset_class)) {
          assetClassGroup[holding.asset_class] = [];
        }
        assetClassGroup[holding.asset_class].push(holding);
      });
      console.log(assetClassGroup);
      setHoldingsGroupedBy(assetClassGroup);
    }
  }

  useEffect(() => {
    if (holdings.length <= 0) {
      loadHoldings().catch(error => {
        alert("Loading holdings data failed" + error);
      });
    }
  }, [holdings]);

  return (
    <>
      <PageHeader className="site-page-header" title="Holdings" />
      <div className="table-container">
        <div className="group-switch">
          <Switch className="switch" onChange={onChange} />
          <span>Group By Asset Class</span>
        </div>

        {holdings && isGrouped ? (
          <HoldingsGroupedBy holdingsGroupedBy={holdingsGroupedBy} />
        ) : (
          <HoldingsDataTable holdings={holdings} />
        )}
      </div>
    </>
  );
}

Holdings.propTypes = {
  loadHoldings: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    holdings: state.holdings
  };
}

const mapDispatchToProps = {
  loadHoldings
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Holdings);

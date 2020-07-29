import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { DownOutlined, RightOutlined } from "@ant-design/icons";

function HoldingsGroupedBy({ holdingsGroupedBy }) {
  const [assetContentVisibility, setAssetContentVisibility] = useState({});

  const changeVisibilty = (assetClass, visible) => {
    const visiblity = {};
    visiblity[assetClass] = visible;

    setAssetContentVisibility({
      ...assetContentVisibility,
      ...visiblity
    });
  };

  useEffect(() => {
    let intialVisibilty = {};
    for (const asset in holdingsGroupedBy) {
      intialVisibilty[asset] = false;
    }
    setAssetContentVisibility(intialVisibilty);
  }, [holdingsGroupedBy]);

  return (
    <table>
      <thead>
        <tr key="header">
          <th>Name</th>
          <th>Ticker</th>
          <th>Average Price</th>
          <th>Market Price</th>
          <th>Latest Change</th>
          <th>Market Value (Base CCY)</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(holdingsGroupedBy).map(assetClass => {
          return (
            <>
              <tr>
                <td colspan="6" className="group-header">
                  <span className="actions">
                    {assetContentVisibility[assetClass] ? (
                      <Button
                        icon={<DownOutlined />}
                        onClick={() => {
                          changeVisibilty(assetClass, false);
                        }}
                        className="action-button"
                      />
                    ) : (
                      <Button
                        icon={<RightOutlined />}
                        onClick={() => {
                          changeVisibilty(assetClass, true);
                        }}
                        className="action-button"
                      />
                    )}
                  </span>
                  {assetClass}
                </td>
              </tr>
              <>
                {assetContentVisibility[assetClass]
                  ? holdingsGroupedBy[assetClass].map(holding => {
                      return (
                        <tr key={holding.name}>
                          <td>{holding.name}</td>
                          <td>{holding.ticker}</td>
                          <td>{holding.avg_price}</td>
                          <td>{holding.market_price}</td>
                          <td>{holding.latest_chg_pct}%</td>
                          <td>{holding.market_value_ccy}</td>
                        </tr>
                      );
                    })
                  : ""}
              </>
            </>
          );
        })}
      </tbody>
    </table>
  );
}

export default HoldingsGroupedBy;

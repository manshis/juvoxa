import React from "react";

function HoldingsDataTable({ holdings }) {
  return (
    <table>
      <thead>
        <tr key="header">
          <th>Name</th>
          <th>Ticker</th>
          <th>Asset Class</th>
          <th>Average Price</th>
          <th>Market Price</th>
          <th>Latest Change</th>
          <th>Market Value (Base CCY)</th>
        </tr>
      </thead>
      <tbody>
        {holdings.map(holding => {
          return (
            <tr key={holding.name}>
              <td>{holding.name}</td>
              <td>{holding.ticker}</td>
              <td>{holding.asset_class}</td>
              <td>{holding.avg_price}</td>
              <td>{holding.market_price}</td>
              <td>{holding.latest_chg_pct}%</td>
              <td>{holding.market_value_ccy}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default HoldingsDataTable;

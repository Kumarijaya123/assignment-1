import React from "react";
import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";
import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";
import styles from "./List.module.css";
import timestampsData from "../../assets/timeStamps.json";

const List = ({ rows, currency, setSelectedOrderDetails, setSelectedOrderTimeStamps }) => {
  // Create a map of order IDs and their timestamps
  const timestampsMap = {};
  timestampsData.results.forEach((timestamp) => {
    timestampsMap[timestamp["&id"]] = timestamp.timestamps.orderSubmitted;
  });

  const setDetails = (row) => {
    setSelectedOrderDetails(row);
    const orderTimestamps = timestampsData.results.find((item) => item["&id"] === row["&id"]);
    setSelectedOrderTimeStamps(orderTimestamps);
  };

  return (
    <table className={styles.container}>
      <thead>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>Order Volume / USD</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody>
        {rows.map((row) => (
          <ListRow key={row["&id"]} // Add a unique key here
          row={row}
          setSelectedOrderDetails={setSelectedOrderDetails}
          setSelectedOrderTimeStamps={setSelectedOrderTimeStamps}
          onClick={() => setDetails(row)}
          >
            <ListRowCell>{row["&id"]}</ListRowCell>
            <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
            <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
            <ListRowCell>
              {timestampsMap[row["&id"]] || "N/A"} {/* Display order submitted date */}
            </ListRowCell>
            <ListRowCell>{row.bestExecutionData.orderVolume.USD}</ListRowCell>
          </ListRow>
        ))}
      </tbody>
    </table>
  );
};

export default List;

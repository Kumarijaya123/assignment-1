/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import mockData from "../assets/data.json";
import timestamps from "../assets/timeStamps.json";

import Dropdown from "../component/dropdown/Dropdown";
import HeaderTitle from "../component/header-title/HeaderTitle";
import Search from "../component/search/Search";
import List from "../component/list/List";
import styles from "./Dashboard.module.css";
import Card from "../component/card/Card";

const Dashboard = () => {
  const [currency, setCurrency] = useState("JPY");
  const [searchText, setSearchText] = useState("");
  const [selectedOrderDetails, setSelectedOrderDetails] = useState({});
  const [selectedOrderTimeStamps, setSelectedOrderTimeStamps] = useState({});
  const [showOrderDetails, setShowOrderDetails] = useState(true);

  const totalOrders = mockData.results.length;
  const orderIds = mockData.results.map((row) => row["&id"]);
  
  
  const handleRowClick = (order) => {
    setSelectedOrderDetails(order);
    const orderTimestamps = timestamps.results.find(
      (item) => item["&id"] === order["&id"]
    );
    setSelectedOrderTimeStamps(orderTimestamps);
  };
  const handleCardClick = () => {
    setShowOrderDetails(!showOrderDetails);
  };
  return (
    <div>
      <div className={styles.header}>
        <HeaderTitle
          primaryTitle="Orders"
          secondaryTitle={`${totalOrders} orders`}
        />
        <div className={styles.actionBox}>
          <Search
             searchText={searchText}
             onChange={(newSearchText) => setSearchText(newSearchText)}
             suggestions={orderIds}
             // Call handleSearch when Search button is clicked
          />
          <Dropdown
            options={["GBP", "USD", "JPY", "EUR"]}
            onChange={(e) => setCurrency(e.target.value)}
            selectedItem={currency}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.section}>
          <Card
            cardData={selectedOrderDetails}
            title="Selected Order Details"
            onClick={handleCardClick}
            style={{ backgroundColor: "blue", color: "white" }}
          />
          <Card
            cardData={selectedOrderTimeStamps}
            title="Selected Order Timestamps"
          />
        </div>
        <List
          rows={mockData.results} 
          currency={currency} 
          onRowClick={handleRowClick}
        />
      </div>
    </div>
  );
};

export default Dashboard;

import { useState } from "react";
import "./Dashboard.css";
import { Chart as ChartJS } from "chart.js/auto";
import { TransactionList } from "../components/TransactionList";
export const Dashboard = () => {

    return(
        <div className="dashboard">
            <TransactionList></TransactionList>
        </div>
    );
};
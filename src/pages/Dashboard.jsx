import { useState } from "react";
import "./Dashboard.css";
import { Chart as ChartJS } from "chart.js/auto";
import { TransactionList } from "../components/TransactionList";
import { CategoryBarChart } from "../components/CategoryBarChart";
export const Dashboard = () => {

    return(
        <div className="dashboard">
            <CategoryBarChart></CategoryBarChart>
            <TransactionList></TransactionList>
        </div>
    );
};
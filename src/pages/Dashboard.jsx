import React from "react";
import { useState } from "react";
import "./Dashboard.css";
import { CategoryBarChart } from "../components/CategoryBarChart";
import { TransactionData } from "../data/Data";
import { Chart as ChartJS } from "chart.js/auto";
import TransactionList from "../components/TranasactionList";

export const Dashboard = () => {

    //state for getting/setting transaction data
    return(
        <div className="dashboard">
            <CategoryBarChart />
            <TransactionList/>
        </div>
    );
};
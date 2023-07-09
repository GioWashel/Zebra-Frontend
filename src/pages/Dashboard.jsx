import React from "react";
import TransactionList from "../components/TranasactionList";
import "./Dashboard.css";


export const Dashboard = () => {
    return(
        <div className="dashboard">
            <TransactionList/>
        </div>
    );
};
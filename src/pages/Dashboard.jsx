import { useState } from "react";
import "./Dashboard.css";
import { Chart as ChartJS } from "chart.js/auto";
import { TransactionList } from "../components/TransactionList";
import { CategoryBarChart } from "../components/CategoryBarChart";
import data from "../data/allTransactionData.json"
export const Dashboard = () => {
    const [transactions, setTransactions] = useState(data);
    const colorMap = new Map()
    const [colors, setColors] = useState(colorMap);
    colors.set("Subscriptions", "#9d75cb");
    colors.set("Fast food", "#8daa9d"); 
    colors.set("Supermarkets/Groceries", "#565254");
    colors.set("Restaurants","#8e3b46");
    colors.set("Retail", "#d8dcff");
    colors.set("Online Shopping", "");
    return(
        <div className="dashboard">
            <CategoryBarChart transaction_data={transactions} colors={colors}></CategoryBarChart>
            <TransactionList transaction_data={transactions} colors={colors}></TransactionList>
        </div>
    );
};
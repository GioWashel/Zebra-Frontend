import {Transaction} from "./Transaction";
import { useState } from "react";
import "./TransactionList.css";
import data from "../data/Data.json";
export const TransactionList =  (props) => {
    const [transactions, setTransactions] = useState(data);

    return(
        <div className="transaction-container">

             <div className="transaction-header">
                <thead>
                    <th>Select</th>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Category </th>
                </thead>
            </div>
            <div className="transaction-list">
                {transactions.map((transaction) => {
                    <Transaction 
                    date={transaction.date}
                    desc={transaction.description} 
                    amount={transaction.amount}
                    category={transaction.category}>
                </Transaction>  
                })}
                <Transaction date="3/17/22" desc="mcdonald's"amount="20" category="fast food"></Transaction>
                <Transaction date="3/18/22" desc="spotify"amount="5" category="subscriptions"></Transaction>
                <Transaction date="3/19/22" desc="chillies"amount="30" category="restaurants"></Transaction>
                <Transaction date="3/20/22" desc="starbucks"amount="7.59" category="drinks"></Transaction>
                <Transaction date="3/21/22" desc="Kroger"amount="67.87" category="Supermarktes"></Transaction>
            </div>
        </div>
       
        
    );
    
}
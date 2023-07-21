import { useState } from "react";
import "./TransactionList.css";
import data from "../data/Data.json";
export const TransactionList =  (props) => {

    return(
        <div className="transaction-container">
            <table width="1000" className="transaction-list">
            <tr>
                <th width="200">Select</th>
                <th width="200">Date</th>
                <th width="200">Description</th>
                <th width="200">Amount</th>
                <th width="200">Category </th>
            </tr>
            {data.map((transaction) => {
                return( 
                <tr>
                    <td id="checkbox"><input type="checkbox"/></td>
                    <td id="date">{transaction.date}</td>
                    <td id="desc">{transaction.description}</td>
                    <td id="amount">{transaction.amount}</td>
                    <td id="category"><button>{transaction.category}</button></td>
                </tr>);
                })
            }
            </table>
        </div>
        

    );
    
}
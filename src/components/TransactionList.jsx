import { useState } from "react";
import "./TransactionList.css";
import data from "../data/allTransactionData.json";


export const TransactionList =  (props) => {

    const [transactions, setTransactions] = useState(data);
    const [filter, setFilter] = useState("");
    const [categoryColor, setCategoryColor] = useState("");


    return(
        <div className="transaction-container">
            <input onChange={(e) => setFilter(e.target.value)} id="input" placeholder="Filter transactions" type="text"/>
            <table width="1000" className="transaction-list">
                <tr>
                    <th width="200">Select</th>
                    <th width="200">Date</th>
                    <th width="200">Description</th>
                    <th width="200">Amount</th>
                    <th width="200">Category </th>
                </tr>
                {transactions.map((transaction) => {
                    if(transaction.description.includes(filter) ||
                       transaction.amount.toString().includes(filter) ||
                       transaction.date.includes(filter) ||
                        transaction.category.includes(filter)) {
                        return( 
                            <tr>
                                <td id="checkbox"><input type="checkbox"/></td>
                                <td id="date">{transaction.date}</td>
                                <td id="desc">{transaction.description}</td>
                                <td id="amount">{transaction.amount}</td>
                                <td id="category"><button>{transaction.category}</button></td>
                            </tr>); 
                    }})}
                    
            </table>
        </div>
    ); 
}
import { useEffect, useState } from "react";
import "./TransactionList.css";
import data from "../data/allTransactionData.json";


export const TransactionList =  () => {

    const [transactions, setTransactions] = useState(data);
    const [filter, setFilter] = useState("");
    const [categoryColor, setCategoryColor] = useState("");
    const [selectedTransactions, setSelectedTransactions] = useState([]);
    let i = 0;
    const handleCheckbox = (id) => {
        selectedTransactions[i] = transactions.filter((t) => {return t.id === id});
        i++;
        console.log(selectedTransactions);
    }
    return(
        <div className="transaction-container">
            <input onChange={(e) => setFilter(e.target.value)} id="input" placeholder="Filter transactions" type="text"/>
            <table width="1000" className="transaction-list">
                <thead>
                    <tr>
                        <th width="200">Select</th>
                        <th width="200">Date</th>
                        <th width="200">Description</th>
                        <th width="200">Amount</th>
                        <th width="200">Category </th>
                    </tr>
                </thead>
                <tbody >
                    {transactions.map((transaction) => {
                        if(transaction.description.includes(filter) ||
                        transaction.amount.toString().includes(filter) ||
                        transaction.date.includes(filter) ||
                            transaction.category.includes(filter)) {
                            return( 
                                <tr key={transaction.id}>
                                    <td id="checkbox" onClick={ handleCheckbox(transaction.id)}><input type="checkbox"/></td>
                                    <td id="date">{transaction.date}</td>
                                    <td id="desc">{transaction.description}</td>
                                    <td id="amount">${transaction.amount}</td>
                                    <td id="category"><button>{transaction.category}</button></td>
                                </tr>); 
                        }})}
                </tbody>
            </table>
        </div>
    ); 
}
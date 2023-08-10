import { useEffect, useState } from "react";
import "./TransactionList.css";


export const TransactionList =  ({transaction_data, colors}) => {
    
    const [transactions, setTransactions] = useState(transaction_data);
    const [filter, setFilter] = useState("");

    //hashmap for deleting transactions, key = id, value = row
    const transactionMap = new Map();
    const [selectedTransactions, setSelectedTransactions] = useState(transactionMap);

    //if checkbox checked, add row to hashmap, else discard from hashmap
    const handleCheckbox = (id, e) => {
        if(e.target.checked) {
            selectedTransactions.set(id, transactions.filter((t) => {return t.id === id}));
            console.log(selectedTransactions);
        }
        else {
            selectedTransactions.delete(id)
            console.log(selectedTransactions);
       }
       //if map isn't empty, then show deleteAll button
       console.log(selectedTransactions.keys);
    }
    const handleDelete = () => {
        setTransactions(transactions.filter((t) => {return !selectedTransactions.get(t.id)}));
        return(<button></button>);
    }
    const handleAdd = () => {

    }
    const setColor = (category) => {
        return colors.get(category);
    }
    return(
        <div className="transaction-list-container">
            <input onChange={(e) =>  setFilter(e.target.value)} id="input" placeholder="Filter transactions" type="text"/>
            <table width="1000" className="transaction-list">
                <thead>
                    <tr style={{borderBottom: "none"}}>
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
                                    <td id="checkbox" onChange={ (e) =>  {handleCheckbox(transaction.id, e)}}><input type="checkbox"/></td>
                                    <td id="date">{transaction.date}</td>
                                    <td id="desc">{transaction.description}</td>
                                    <td id="amount">${transaction.amount}</td>
                                    <td id="category"><button id="category" style={{backgroundColor: setColor(transaction.category)}} >{transaction.category}</button></td>
                                </tr>); 
                        }})}
                </tbody>
            </table>
            <div className="button-container">
                <button id="delete" onClick={handleDelete}>Delete transaction</button>
                <button id="add"> Add transaction</button>
            </div>
            
        </div>
    ); 
}
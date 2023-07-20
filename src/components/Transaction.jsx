import "./Transaction.css";
export const Transaction =  ({date, desc, amount, category}) => {
    return(
        <table className="transaction">
                <tr>
                    <td><input type="checkbox" name="checkbox" id="checkbox" /></td>
                    <td id="date">{date}</td>
                    <td id="desc">{desc}</td>
                    <td id="amount">${amount}</td>
                    <td><button id="category" disabled>{category}</button></td>
                </tr>
        </table>
    );
};

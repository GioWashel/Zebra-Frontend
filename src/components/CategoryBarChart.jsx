import {useState, React} from "react";
import {Bar} from "react-chartjs-2";
import {Colors} from "chart.js";
import transactionData from "../data/allTransactionData.json";
//shows total spent per category 
export const CategoryBarChart = ({transaction_data, colors}) => {
        const[transactions, setTransactions] = useState(transaction_data)

        //gets unique lables for x axis of graph 
        const getLabels = () =>  {
                const uniqueLabels = []
                let j = 0;
                let labels = transactions.map((data) => data.category);
                for(let i = 0; i < labels.length; i++) {
                        if(!uniqueLabels.includes(labels[i]))
                                uniqueLabels[j] = labels[i];
                                j++;
                }
                return uniqueLabels;;
        }
        //finds how much was spent for each category 
        function totalPerCategory() {
                return transactions.reduce((acc, item) => {
                  const { category, amount } = item;
                  acc[category] = (acc[category] || 0) + amount;
                  return acc;
                }, {});
        }
        //match colors to labels
        function getColors() {
                const labelColors = [];
                const labels = getLabels();
                for(let i = 0; i < labels.length; i++) {
                        labelColors[i] = colors.get(labels[i]);
                }
                return labelColors;
        }

        return( 
                <div className="bar-container" style={{width: "500px", height: "400px"}}>
                        <Bar 
                                data= {
                                        {
                                        labels: getLabels(),
                                        datasets: [{label: "total spent per category",
                                                    data: totalPerCategory(),
                                                    backgroundColor: getColors()
                                                   }]
                                        
                                        }

                                }

                                options={{responsive: true,maintainAspectRatio: false }}
                        />
                </div>
                );
}
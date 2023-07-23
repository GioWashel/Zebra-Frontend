import React from "react";
import {Bar} from "react-chartjs-2";
import transactionData from "../data/allTransactionData.json";
//shows total spent per category 
export const CategoryBarChart = () => {
        //gets unique lables for x axis of graph 
        const getLabels = () =>  {
                const uniqueLabels = []
                let j = 0;
                let labels = transactionData.map((data) => data.category);
                for(let i = 0; i < labels.length; i++) {
                        if(!uniqueLabels.includes(labels[i]))
                                uniqueLabels[j] = labels[i];
                                j++;
                }
                return uniqueLabels;;
        }
        //finds how much was spent for each category 
        function totalPerCategory() {
                return transactionData.reduce((acc, item) => {
                  const { category, amount } = item;
                  acc[category] = (acc[category] || 0) + amount;
                  return acc;
                }, {});
              }

        return( 
                <div className="bar-container" style={{width: "500px", height: "400px"}}>
                        <Bar 
                                data= {
                                        {
                                        labels: getLabels(),
                                        datasets: [{label: "total spent per category",
                                                    data: totalPerCategory()
                                                   }]
                                        
                                        }

                                }
                                options={{responsive: true,maintainAspectRatio: false }}
                        />
                </div>
                );
}
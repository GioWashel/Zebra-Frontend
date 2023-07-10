import React from "react";
import {Bar} from "react-chartjs-2";
import { TransactionData } from "../data/Data";
import { height } from "@mui/system";
export const CategoryBarChart = () => {
        
        return( 
        <Bar data={
                {
                labels: TransactionData.map((data) => data.category),
                datasets: [
                        {
                            label: "total spent per category",
                            data: TransactionData.map((data) => data.amount),
                        }
                        ]
        
                }
               

        }
        />);
}
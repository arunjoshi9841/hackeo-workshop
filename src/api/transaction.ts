import axios from "axios";
import Transaction from "../models/Transaction";

const getAllTransactionForUser=(id: string):Promise<Transaction[]>=> {
    return axios.get('/data/transactions.json').then((response)=> {
        return response.data.filter((transaction: Transaction)=>transaction.recipient===id);
    })  
}

const getTransactionBetween=(sender: string, recipient: string):Promise<Transaction[]>=> {
    return axios.get('/data/transaction.json').then((response)=> {
        return response.data.filter((transaction: Transaction)=>transaction.sender===sender && transaction.recipient === recipient);
    }) 
}

export {getAllTransactionForUser, getTransactionBetween}
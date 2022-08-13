import axios from "axios";
import Transaction from "../models/Transaction";
import { User } from "../models/User";

const getUSerByUserName=(userName: string):Promise<User>=> {
    return axios.get('/data/users.json').then((response)=> {
        const user = response.data.filter((user: User)=>user.userName===userName)[0];
        return user;
    })  
}

const getBalanceByUserName=(userName: string):Promise<number> => {
    let sum = 0;
    return axios.get('/data/transactions.json').then((response)=> {
        response.data.forEach((element:Transaction) => {
            if(element.recipient === userName) sum=sum+element.amount;
        });
        return sum;
    })
}

export {getUSerByUserName, getBalanceByUserName}
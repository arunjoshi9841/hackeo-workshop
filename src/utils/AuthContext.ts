import React from "react";
import { Account } from "../models/User";

export const initAccount:Account = {id: "", userName: "", name: "", emailAddress: "", isLoggedIn: false}
export const AuthContext = React.createContext<Account>(initAccount);
import React from "react";
import { TransactionApi, UserApi } from "../../api";
import Transaction from "../../models/Transaction";
import { AuthContext } from "../../utils/AuthContext";
import "./dashboard.scss";

const Dashboard: React.FC = () => {
  const account = React.useContext(AuthContext);
  const [transactions, setTransactions] = React.useState<Transaction[]>([]);
  const [balance, setBalance] = React.useState<number>();

  React.useEffect(() => {
    if (account.isLoggedIn) {
      getData();
    }
  }, [account]);

  const getData = () => {
    TransactionApi.getAllTransactionForUser(account.userName).then((response) =>
      setTransactions(response)
    );
    UserApi.getBalanceByUserName(account.userName).then((response) =>
      setBalance(response)
    );
  };

  return (
    <section id="dashboard">
      <p>{balance}</p>
    </section>
  );
};

export default Dashboard;

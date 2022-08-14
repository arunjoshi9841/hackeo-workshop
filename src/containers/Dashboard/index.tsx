import React from "react";
import { TransactionApi, UserApi } from "../../api";
import Typography from "../../components/Typography";
import Transaction from "../../models/Transaction";
import { AuthContext } from "../../utils/AuthContext";
import "./dashboard.scss";
import UserTransaction from "./UserTransaction";

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
      <Typography variant="maxHeading" color="primary">
        Welcome {account.name}!
      </Typography>
      {balance && (
        <div className="transaction-intro">
          <Typography
            variant="maxHeading"
            weight={600}
            color={balance < 0 ? "error" : "success"}
            align="right"
          >
            {balance > 0 ? "+" : ""}
            {balance}
          </Typography>
        </div>
      )}
      <UserTransaction transactions={transactions} />
    </section>
  );
};

export default Dashboard;

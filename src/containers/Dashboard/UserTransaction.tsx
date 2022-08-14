import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import Paper from "../../components/Paper";
import Typography from "../../components/Typography";
import Transaction from "../../models/Transaction";

interface Props {
  transactions: Transaction[];
}

const UserTransaction: React.FC<Props> = ({ transactions }) => {
  return (
    <div className="user-transactions">
      {transactions.map((transaction) => (
        <Paper key={transaction.id}>
          <div className="transaction">
            <div className="transaction-sender">
              <Link to={`/profile/${transaction.sender}`}>
                <Avatar
                  source={transaction.senderPic}
                  name={transaction.senderName}
                  size="large"
                />
              </Link>
              <div>
                <Typography variant="heading">
                  {transaction.senderName}
                </Typography>
                <Typography variant="subtitle" weight={600} color="tertiary">
                  @{transaction.sender}
                </Typography>
              </div>
            </div>
            <div>
              <Typography
                variant="heading"
                color={transaction.amount < 0 ? "error" : "success"}
              >
                {transaction.amount > 0 ? "+" : ""}
                {transaction.amount}
              </Typography>
            </div>
          </div>          
          <>{transaction.comment.length>0 && <div className="comment">
                <Typography variant="title">
                  {transaction.comment}
                </Typography>
              </div>}</>
        </Paper>
      ))}
    </div>
  );
};

export default UserTransaction;

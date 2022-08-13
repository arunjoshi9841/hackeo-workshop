import React from "react";
import { useParams } from "react-router-dom";
import { TransactionApi, UserApi } from "../../api";
import Transaction from "../../models/Transaction";
import { User } from "../../models/User";
import { AuthContext } from "../../utils/AuthContext";
import "./profile.scss";

const Profile: React.FC = () => {
  const [peerTransactions, setPeerTransactions] = React.useState<Transaction[]>(
    []
  );
  const account = React.useContext(AuthContext);
  const [profile, setProfile] = React.useState<User>();
  const { username } = useParams<{ username: string }>();
  React.useEffect(() => {
    if (account.isLoggedIn) {
      getData();
    }
  }, [account]);

  const getData = () => {
    UserApi.getUSerByUserName(username as string).then((response) =>
      setProfile(response)
    );
    TransactionApi.getTransactionBetween(
      username as string,
      account.userName
    ).then((response) => setPeerTransactions(response));
  };

  return <section id="profile"></section>;
};

export default Profile;

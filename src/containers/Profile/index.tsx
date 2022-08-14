import React from "react";
import { useParams } from "react-router-dom";
import { TransactionApi, UserApi } from "../../api";
import Avatar from "../../components/Avatar";
import Paper from "../../components/Paper";
import Typography from "../../components/Typography";
import Transaction from "../../models/Transaction";
import { User } from "../../models/User";
import { AuthContext } from "../../utils/AuthContext";
import UserTransaction from "../Dashboard/UserTransaction";
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

  return (
    <section id="profile">
      {profile && (
        <Paper>
          <Avatar
            source={profile.profilePic}
            name={profile.name}
            size="large"
          />
          <div>
            <Typography variant="maxHeading" color="primary">
              Name: {profile.name}
            </Typography>
            <Typography variant="heading" color="tertiary">
              Username: @{profile.userName}
            </Typography>
            <Typography variant="heading" color="tertiary">
              Email Address: {profile.emailAddress}
            </Typography>
          </div>
        </Paper>
      )}
      <UserTransaction transactions={peerTransactions}/>
    </section>
  );
};

export default Profile;

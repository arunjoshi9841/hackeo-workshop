import React from "react";
import { AuthContext } from "../../../utils/AuthContext";
import Avatar from "../../Avatar";
import Typography from "../../Typography";

const AccountInfo: React.FC = () => {
  const account = React.useContext(AuthContext);
  return (
    <div className="account-info">
      <Avatar source={account.profilePic} name={account.name} size="small"/>
      <div>
        <Typography variant="subtitle" color="white">{account.name}</Typography>
        <Typography variant="caption" color="white">@{account.userName}</Typography>
      </div>
    </div>
  );
};

export default AccountInfo;

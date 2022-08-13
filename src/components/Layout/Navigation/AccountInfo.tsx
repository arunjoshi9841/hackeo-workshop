import React from "react";
import { AuthContext } from "../../../utils/AuthContext";

const AccountInfo: React.FC = () => {
  const account = React.useContext(AuthContext);
  return (
    <div className="account-info">
      <p>{account.name}</p>
      <p>@{account.userName}</p>
    </div>
  );
};

export default AccountInfo;

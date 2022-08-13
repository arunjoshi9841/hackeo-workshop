import React from "react";
import { UserApi } from "../../api";
import { Account } from "../../models/User";
import Navigation from "./Navigation";
import "./layout.scss";
import { AuthContext, initAccount } from "../../utils/AuthContext";

interface Props {
  children: React.ReactElement;
}

const Layout: React.FC<Props> = ({ children }) => {
  const [account, setAccount] = React.useState<Account>(initAccount);

  React.useEffect(() => {
    UserApi.getUSerByUserName("hackeo420").then((response) => {
      setAccount({ ...response, isLoggedIn: true });
    });
  }, []);

  return (
    <div className="layout-container">
      <AuthContext.Provider value={account}>
        <Navigation />
        <div className="content">{children}</div>
      </AuthContext.Provider>
    </div>
  );
};
export default Layout;

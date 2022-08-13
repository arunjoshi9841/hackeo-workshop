import React from "react";
import AccountInfo from "./AccountInfo";
import Logo from "./Logo";
import './navigation.scss';

const Navigation: React.FC = () => {
    return <div className="navigation bg-tertiary">
        <div className="nav-container">
            <Logo/>
            <AccountInfo/>
        </div>
    </div>;
};
export default Navigation;

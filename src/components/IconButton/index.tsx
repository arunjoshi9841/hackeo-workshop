import React from 'react';
import './iconbutton.scss';

type Props = {
    Icon: React.FC;
    color?: string;
    onClick?: () => void;
    tooltip?: string;
};
const IconButton: React.FC<Props> = ({ Icon, color, tooltip, onClick }) => {
    return (
        <div
            className="icon-button"
            tabIndex={0}
            title={tooltip}
            onClick={onClick}
            onKeyPress={(e: React.KeyboardEvent<HTMLDivElement>) => e.key === 'Enter' && onClick && onClick()}
        >
            <div className={`icon ${color ? `color-${color}` : ''}`}>
                <Icon />
            </div>
        </div>
    );
};

export default IconButton;

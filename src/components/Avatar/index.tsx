import React, { useEffect } from 'react';
import UserIcon from '../../assets/icons/user.svg';
import Img from '../Img';
import './avatar.scss';

interface Props {
    source?: string;
    name: string;
    size: 'small' | 'medium' | 'large';
};

const Avatar: React.FC<Props> = ({ source, name, size }) => {
    const [imageSrc, setImageSrc] = React.useState<string|null>(null);
    useEffect(() => {
        if(source && source.length>0) {            
            setImageSrc(source);
        } else {
            setImageSrc(UserIcon)
        }
    }, [source]);

    const handleError = () => {
        setImageSrc(UserIcon);
    };
    
    return <>{imageSrc && <Img src={imageSrc} onError={handleError} alt={name} className={`avatar avatar-${size}`} />}</>;
};

export default Avatar;

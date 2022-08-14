import React from 'react';
import './paper.scss';

interface Props {
    children: React.ReactElement | React.ReactElement[]
}
const Paper:React.FC<Props>=({children})=> {
    return <div className='paper bg-white'>{children}</div>
}

export default Paper;
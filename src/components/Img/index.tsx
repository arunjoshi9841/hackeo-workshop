/* eslint-disable react/prop-types */
import React from 'react';
type Props = React.ImgHTMLAttributes<HTMLImageElement>;

const Img: React.FC<Props> = (props) => {
    const imgRef = React.useRef<HTMLImageElement>(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(callback);
        if (imgRef.current) observer.observe(imgRef.current);
        return () => {
            if (imgRef.current) observer.unobserve(imgRef.current);
        };
    }, [imgRef]);

    const callback: IntersectionObserverCallback = (entries: IntersectionObserverEntry[]) => {
        const [entry] = entries;
        if (!entry.isIntersecting) return true;
        if(imgRef.current) {
            const prevOpacity = imgRef.current.style.opacity;
            imgRef.current.style.opacity= "0";
            imgRef.current.src = props.src?props.src: '';
            imgRef.current.style.opacity = prevOpacity;
            imgRef.current.style.transition = "opacity 0.8s linear;";
        }
    };
    return <img {...props} ref={imgRef} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeAAAAFAAQMAAABeBj04AAAABlBMVEXMzMyWlpYU2uzLAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAKklEQVR4nO3BAQ0AAADCoPdPbQ43oAAAAAAAAAAAAAAAAAAAAAAAAIAXA0xAAAHTKSJxAAAAAElFTkSuQmCC"/>;
};

export default Img;

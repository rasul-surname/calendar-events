import React from "react";
import classes from './PageInfo.module.css';

interface InterfacePageInfo {
    children: any;
}

const PageInfo: React.FC<InterfacePageInfo> = ({children}) => {

    return (
        <div className={classes.wrapper}>
            {children}
        </div>
    );
}

export default PageInfo;
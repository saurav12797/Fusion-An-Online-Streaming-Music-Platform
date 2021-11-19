import { Drawer } from 'antd';
import React, { FC } from 'react'
import "./appDrawer.scss"

interface AppDrawerProps {
    visible: boolean;
    width?: string;
    onClose: () => void;
}

const AppDrawer: FC<AppDrawerProps> = (props) => {
    const { children, width, ...rest } = props;

    return (
        <Drawer {...rest} destroyOnClose className="app-drawer" width={width ?? "40vw"}>
            {children}
        </Drawer>
    )
}

export default AppDrawer;
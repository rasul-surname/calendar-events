import React from "react";
import {Modal} from "antd";
import {ExclamationCircleOutlined} from "@ant-design/icons/lib";
import classes from './ConfirmWindow.module.css';

interface InterfaceConfirmWindow {
    isModalVisible: boolean;
    handleOk: () => any;
    handleCancel: () => any;
    children: any;
}

const ConfirmWindow: React.FC<InterfaceConfirmWindow> = ({isModalVisible, handleOk, handleCancel, children}) => {

    return (
        <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} cancelText="Отмена">
            <p className={classes.modal__warning}>
                <span><ExclamationCircleOutlined/></span>
                {children}
            </p>
        </Modal>
    )
}

export default ConfirmWindow;
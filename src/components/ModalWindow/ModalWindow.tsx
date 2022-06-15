import React from "react";
import {Modal} from "antd";

interface InterfaceModalWidnow {
    title?: string | boolean;
    isModalVisible: boolean;
    handleOk: () => any;
    handleCancel: () => any;
    children: any;
}

const ModalWindow: React.FC<InterfaceModalWidnow> = ({title, isModalVisible, handleOk, handleCancel, children}) => {

    return (
        <Modal title={title} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} cancelText="Отмена">
            {children}
        </Modal>
    )
}

export default ModalWindow;
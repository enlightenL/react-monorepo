import { Modal, ModalProps } from "antd";

interface Props {
    visible: boolean;
    title: string;
    setInvisible: () => void;
    children: any
}

export default function CustomModal({ visible, title, setInvisible, children }: Props) {
    console.log('visible:', visible);
    
    const modalProps: ModalProps = {
        centered: true,
        destroyOnClose: true,
        visible,
        title,
		okText: '확인',
		cancelText: '취소',
        onOk() {
            setInvisible();
        },
        onCancel() {
            setInvisible();
        },
    };

    return <Modal {...modalProps}>{children}</Modal>;
}

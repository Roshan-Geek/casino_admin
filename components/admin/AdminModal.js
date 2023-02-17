import { useState } from "react";
import Modal from "react-bootstrap/Modal";

const AdminModal = ({ children, show, setShow, size }) => {
    const handleClose = () => setShow(false);

    return (
        <>
            <Modal show={show} onHide={handleClose} size={size}>
                <button type="button" className="close" onClick={handleClose}>
                    <span aria-hidden="true">×</span>
                </button>

                <Modal.Body className="overflow-text">{children}</Modal.Body>
            </Modal>
        </>
    );
};

export default AdminModal;

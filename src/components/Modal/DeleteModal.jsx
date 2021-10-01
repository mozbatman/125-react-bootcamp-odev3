import { Modal, Button } from "react-bootstrap";

function DeleteModal({ show, handleClose, deletePost, post }) {
    const _deletePost = () => {
        deletePost(post.id);
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title>Delete Post</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    No
                </Button>
                <Button variant="primary" onClick={_deletePost}>
                    Yes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DeleteModal;

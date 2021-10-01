import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function EditModal({ post, show, handleClose, editPost }) {
    const [text, setText] = useState(post?.text);

    const saveChanges = () => {
        post.text = text;
        editPost(post);
        handleClose();
    };

    const onChange = (e) => {
        setText(e.target.value);
    };
    return (
        <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Post Text</Form.Label>
                        <Form.Control type="text" placeholder="Post Text" onChange={onChange} value={text} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={saveChanges}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default EditModal;

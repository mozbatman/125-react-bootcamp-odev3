import moment from "moment";
import React, { useState } from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import DeleteModal from "./Modal/DeleteModal";
import EditModal from "./Modal/EditModal";

function Card({ post, deletePost, editPost }) {
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const handleEditClose = () => setShowEdit(false);
  const handleEditShow = () => setShowEdit(true);

  const handleDeleteClose = () => setShowDelete(false);
  const handleDeleteShow = () => setShowDelete(true);

  return (
        <div className="card">
            <div>
                <img src={post.image} />
            </div>
            <div className="date">{moment(post.publishDate).format('MMMM Do YYYY, h:mm:ss a')}</div>
            <div>{post.text}</div>
            <div className="icon-container">
                <div className="icon" onClick={handleDeleteShow}>
                    <FaTrashAlt />
                </div>
                <div className="icon" onClick={handleEditShow}>
                    <FaEdit />
                </div>
            </div>

            {showEdit && <EditModal show={showEdit} handleClose={handleEditClose} editPost={editPost} post={post}/>}
            {showDelete && <DeleteModal show={showDelete} handleClose={handleDeleteClose} deletePost={deletePost} post={post}/>}
        </div>
    );
}

export default Card;

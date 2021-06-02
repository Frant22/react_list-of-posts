import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './PostDetails.scss';

import NewCommentForm from '../NewComentForm/NewCommentForm';

import { getPostDetails } from '../../api/posts';
import { deletePostComment, getPostComments } from '../../api/comments';

export default function PostDetails({ postId }) {
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);

  const handleDeleteComment = (commentId) => {
    deletePostComment(commentId)
      .then(setComments((prevComments) => (
        prevComments.filter((comment) => (
          postId === comment.postId
        )))));
  };

  useEffect(() => {
    getPostDetails(postId)
      .then(setPost);
    getPostComments(postId)
      .then(setComments);
  }, []);

  return (
    <div className="PostDetails">
      <h2>Post details:</h2>

      <section className="PostDetails__post">
        <p>{post.title}</p>
        <p>{post.body}</p>
      </section>

      <section className="PostDetails__comments">

        <ul className="PostDetails__list">
          {comments.map((comment) => (
            <li className="PostDetails__list-item" key={comment.id}>
              <button
                type="button"
                className="PostDetails__remove-button button"
                onClick={() => handleDeleteComment(comment.id)}
              >
                X
              </button>
              <p>{comment.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <div className="PostDetails__form-wrapper">
          <NewCommentForm
            postId={postId}
          />
        </div>
      </section>
    </div>
  );
}

PostDetails.propTypes = {
  postId: PropTypes.number.isRequired,
};

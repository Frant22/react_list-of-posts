import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import './PostDetails.scss';

import NewCommentForm from '../NewComentForm/NewCommentForm';

import { getPostDetails } from '../../api/posts';
import { getPostComments, addPostComment } from '../../api/comments';

export default function PostDetails({ postId }) {
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);

  const addNewComment = useCallback((comment) => {
    addPostComment(comment)
      .then(setComments((previousComments) => [
        ...previousComments,
        comment,
      ]));
  }, [comments]);

  useEffect(() => {
    getPostDetails(postId)
      .then(setPost);
    getPostComments(postId)
      .then(setComments);
  }, [postId]);

  return (
    <div className="PostDetails">
      <h2>Post details:</h2>

      <section className="PostDetails__post">
        <p>
          Title:
          {post.title}
        </p>
        <p>
          Content:
          {post.body}
        </p>
      </section>

      <section className="PostDetails__comments">

        <ul className="PostDetails__list">
          {comments.map((comment) => (
            <li className="PostDetails__list-item" key={comment.id}>
              <p>{comment.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <div className="PostDetails__form-wrapper">
          <NewCommentForm
            postId={postId}
            addNewComment={addNewComment}
          />
        </div>
      </section>
    </div>
  );
}

PostDetails.propTypes = {
  postId: PropTypes.number.isRequired,
};

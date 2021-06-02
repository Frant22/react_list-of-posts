import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './NewCommentForm.scss';

export default function NewCommentForm({ addNewComment }) {
  const [newComment, setNewComment] = useState({
    name: '',
    email: '',
    body: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNewComment((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    addNewComment(newComment);

    setNewComment({
      name: '',
      email: '',
      body: '',
    });
  };

  return (
    <form
      className="NewCommentForm"
      onSubmit={handleSubmit}
      method="POST"
    >
      <div className="form-field">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          className="NewCommentForm__input"
          value={newComment.name}
          onChange={(event) => handleChange(event)}
        />
      </div>

      <div className="form-field">
        <input
          type="text"
          name="email"
          placeholder="Your email"
          className="NewCommentForm__input"
          value={newComment.email}
          onChange={(event) => handleChange(event)}
        />
      </div>

      <div className="form-field">
        <textarea
          name="body"
          placeholder="Type comment here"
          className="NewCommentForm__input"
          value={newComment.text}
          onChange={(event) => handleChange(event)}
        />
      </div>

      <button
        type="submit"
        className="NewCommentForm__submit-button button"
      >
        Add a comment
      </button>
    </form>
  );
}

NewCommentForm.propTypes = {
  addNewComment: PropTypes.func.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import './NewPostForm.scss';

export default function NewPostForm({ handleCreatePostButton, setNewPost, newPost }) {
  return (
    <form
      action="POST"
    >
      <input
        type="text"
        value={newPost.title}
        onChange={(event) => setNewPost((prevPost) => ({ ...prevPost, title: event.target.value }))}
      />
      <input
        type="text"
        value={newPost.body}
        onChange={(event) => setNewPost((prevPost) => ({ ...prevPost, body: event.target.value }))}
      />
      <button
        type="button"
        onClick={handleCreatePostButton}
      >
        Create
      </button>
    </form>
  );
}

NewPostForm.propTypes = {
  handleCreatePostButton: PropTypes.func.isRequired,
  setNewPost: PropTypes.func.isRequired,
  newPost: PropTypes.objectOf(PropTypes.string).isRequired,
};

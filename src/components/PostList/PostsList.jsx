import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './PostsList.scss';

import { getAllPosts, deletePost, addNewPost } from '../../api/posts';
import NewPostForm from '../NewPostForm/NewPostForm';

export default function PostsList({ setPostId }) {
  const [posts, setPosts] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState('');
  const [newPost, setNewPost] = useState({
    title: '',
    body: '',
  });

  useEffect(() => {
    getAllPosts()
      .then((result) => setPosts(result));
  }, []);

  const handleOpenButton = (postId) => {
    setSelectedPostId(postId);
    setPostId(postId);
  };

  const handleCloseButton = () => {
    setSelectedPostId('');
    setPostId(null);
  };

  const handleDeletePostButton = (postId) => {
    deletePost(postId)
      .then(setPosts((prevPosts) => (
        prevPosts.filter((postToDelete) => (
          postId !== postToDelete.id
        ))
      )));
  };

  const handleCreatePostButton = () => {
    addNewPost(newPost)
      .then((createdPost) => {
        setPosts([...posts, createdPost]);
        setNewPost({
          title: '',
          body: '',
        });
      });
  };

  return (
    <div className="PostsList">
      <h2>Posts:</h2>

      <NewPostForm
        handleCreatePostButton={handleCreatePostButton}
        setNewPost={setNewPost}
        newPost={newPost}
      />

      <ul className="PostsList__list">
        {posts.map((post) => (
          <li
            key={post.id}
            className="PostsList__item"
          >
            <div>
              <b>
                [Post]
              </b>
              {post.title || 'No title'}
            </div>
            {post.id !== selectedPostId ? (
              <button
                type="button"
                className="PostsList__button button"
                onClick={() => handleOpenButton(post.id)}
              >
                Open
              </button>
            ) : (
              <button
                type="button"
                className="PostsList__button button"
                onClick={() => handleCloseButton('')}
              >
                Close
              </button>
            )}
            <button
              type="button"
              className="PostsList__button button"
              onClick={() => handleDeletePostButton(post.id)}
            >
              Delete post
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

PostsList.propTypes = {
  setPostId: PropTypes.func.isRequired,
};

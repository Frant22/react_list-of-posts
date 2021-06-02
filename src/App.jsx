import React, { useState } from 'react';
import './styles/main.scss';
import PostsList from './components/PostList/PostsList';
import PostDetails from './components/PostDetails/PostDetails';

function App() {
  const [postId, setPostId] = useState(null);

  return (
    <div className="App">
      <header>
        <h1>List of Posts</h1>
      </header>

      <main>
        <div className="App__sidebar">
          <PostsList setPostId={setPostId} />
        </div>

        <div className="App__content">
          {postId && (
          <PostDetails
            postId={postId}
          />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;

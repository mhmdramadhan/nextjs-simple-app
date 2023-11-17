import Post from './Post';
import NewPost from './NewPost';
import classes from './PostList.module.css';
import Modal from './Modal';
import { useState, useEffect } from 'react';

const PostList = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPost() {
      const response = await fetch('http://localhost:8080/posts');
      const resData = await response.json();
      setPosts(resData.posts);
    }

    fetchPost()
  }, []);

  const addPostHandler = (postData) => {
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    setPosts((existingPost) => [postData, ...existingPost]);
  };

  let modalContent;
  if (props.isPosting) {
    modalContent = (
      <Modal onClose={props.onStopPosting}>
        <NewPost onCancel={props.onStopPosting} onAddPost={addPostHandler} />
      </Modal>
    );
  }

  return (
    <>
      {modalContent}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((item, id) => {
            return <Post key={id} author={item.author} body={item.body} />;
          })}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding one!</p>
        </div>
      )}
    </>
  );
};

export default PostList;

import Post from './Post';
import classes from './PostList.module.css';
import { useLoaderData } from 'react-router-dom';

const PostList = () => {
  // data from loader in route
  const posts = useLoaderData();

  return (
    <>
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

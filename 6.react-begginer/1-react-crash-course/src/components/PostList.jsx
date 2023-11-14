import Post from './Post';
import NewPost from './NewPost';
import classes from './PostList.module.css';

const PostList = () => {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Rama" body="INI KONTEN RAMA" />
        <Post author="Jhon Doe" body="e-book jhon doe in manual koresponden" />
      </ul>
    </>
  );
};

export default PostList;

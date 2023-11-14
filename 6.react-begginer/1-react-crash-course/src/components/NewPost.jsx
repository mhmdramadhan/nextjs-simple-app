import classes from './NewPost.module.css';

const NewPost = () => {
  const changeBodyHandler = () => {

  }

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler}/>
      </p>
      <p>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
};

export default NewPost;

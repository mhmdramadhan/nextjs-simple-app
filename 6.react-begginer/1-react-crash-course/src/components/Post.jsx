import React from 'react';
import classes from './Post.module.css';

const NAMES = ['maximillian', 'Rama'];

const Post = (props) => {
  const chosenName = Math.random() > 0.5 ? NAMES[0] : NAMES[1];

  return (
    <li className={classes.post}>
      <p className={classes.author}>{props.author}</p>
      <p className={classes.text}>{props.body}</p>
    </li>
  );
};

export default Post;

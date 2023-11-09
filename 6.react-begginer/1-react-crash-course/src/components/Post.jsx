import React from 'react';

const NAMES = ['maximillian', 'Rama'];

const Post = (props) => {
  const chosenName = Math.random() > 0.5 ? NAMES[0] : NAMES[1];

  return (
    <div className='post'>
      <p>{props.author}</p>
      <p>{props.body}</p>
    </div>
  );
};

export default Post;

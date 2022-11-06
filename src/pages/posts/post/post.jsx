import React from 'react';
import items from './post.module.css';

const Post = (props) => {

  return (
    <div className={items.posts}>
      <div className={items.item}>
        {props.msg}
        {props.like}
      </div>
    </div>
  );
}

export default Post;
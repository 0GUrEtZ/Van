import React from 'react';
import p from './posts.module.css';
import Post from './post/post';
import { TabTitle } from '../../utils/tab-title';

const Posts = () => {
  TabTitle('Posts');
  return (
    <div className={p.post}>
      <div>
        <input type="text" />
        <button>Кнопка</button>
        <button>Кнопка</button>
      </div>
      <div>
        <Post msg='post1' />
        <Post like='15' />
        <Post msg='post2' />
        <Post like='25' />
      </div>

    </div>
  );
}

export default Posts;
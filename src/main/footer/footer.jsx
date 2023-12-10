import React from 'react';
import f from './footer.module.css'
import vklogo from '../../images/vk.png';
import gitlogo from '../../images/github.png'
import tglogo from '../../images/telegram.png'

const Ftr = () => {
  return (
    <div className={f.wrapper}>
      <div className={f.links}>
        <a href='https://t.me/ogurtsovilya'><img src={tglogo} /></a>
        <a href='https://vk.com/ogurtsov_ilya'><img src={vklogo} /></a>
        <a href='https://github.com/0GUrEtZ/Van'><img src={gitlogo} /></a>
        
      </div>
      <span>
        Создатель: Илья Огурцов
      </span>
    </div>
  );
}

export default Ftr;

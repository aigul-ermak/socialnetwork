import React from 'react';
import s from './Post.module.css';

type PropsMessage = {
   /* id: number*/ //пока закомментировала тк дает ошибку
    message: string
    likesCount: number
}

const Post = (props: PropsMessage) => {
    return (
        <div className={s.posts}>
            <div className={s.item}>
                <img src="https://i.ytimg.com/vi/fUWrhetZh9M/maxresdefault.jpg"/>
                {props.message}
            </div>
            <span>Like</span>
            <span>Like</span>
        </div>
    )
}

export default Post;
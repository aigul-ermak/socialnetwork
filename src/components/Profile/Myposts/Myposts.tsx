import React, {ChangeEvent} from 'react';

import s from './Myposts.module.css';
import Post from './Post/Post';

// type MypostsType = {
//     // posts: Array<PostsType>
//     addPost: (postMessage: string) => void
//
//     postsData: Array<postType>
// }

const Myposts = (props) => {
    let postsElements = props.posts
        .map(p => <Post
            message={p.message}
            likesCount={p.likesCount}/>);

    // let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        props.addPost(props.newPostText);

    }
    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default Myposts;
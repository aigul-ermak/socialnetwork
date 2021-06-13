import React from 'react';
import Myposts from './Myposts/Myposts';
import Profileinfo from './ProfileInfo/Profileinfo';



const Profile = (props) => {

    return (
        <div>
            <Profileinfo/>
            <Myposts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}

export default Profile;
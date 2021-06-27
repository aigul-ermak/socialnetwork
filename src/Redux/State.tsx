// type MessageType = {
//     id: number
//     message: string
// }
//
// type DialogType = {
//     id: number
//     name: string
// }

// type PostType = {
//     id: number
//     message: string
//     likesCount: number
// }
//
// type ProfilePageType = {
//     posts: Array<PostType>
//     newPostText: string
//
// }
// type DialogPageType = {
//     dialogs: Array<DialogType>
//     messages: Array<MessageType>
// }

// type SideBarType {
//
// }

// type RootStateType = {
//     profilePage: ProfilePageType
//     dialogPage: DialogPageType
//     // sideBar: SideBarType
// }

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi. how are you?', likesCount: 12},
                {id: 2, message: 'It is my first post', likesCount: 12},
                {id: 3, message: 'BlaBlaBla', likesCount: 12},
                {id: 4, message: 'Dada', likesCount: 12},
                {id: 5, message: 'BlasBlasla', likesCount: 12},
                {id: 5, message: 'BlasBlasla', likesCount: 12}
            ],
            newPostText: 'It-kamasutra.com'
        },
        dialogPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Sveta'},
                {id: 3, name: 'Valera'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Viktor'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 1, message: 'How are you'},
                {id: 1, message: 'How is your It-kamasutra?'},
                {id: 1, message: 'How is your It-kamasutra?'}
            ]
        },
    },
    getState () {
        return this._state
    },
    rerenderEntireTree() {
        console.log('State is changed');
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this.rerenderEntireTree();
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this.rerenderEntireTree();
    },
    subsciber(observer) {
        this.rerenderEntireTree = observer;
    }
}

export default store;
// window.store = store;

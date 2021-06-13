let rerenderEntireTree = () => {
    console.log('State is changed')
}


let state = {
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
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree();
}
export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree();
}

export const subsciber = (observer) => {
    rerenderEntireTree = observer; //паттерн observer
}

export default state;
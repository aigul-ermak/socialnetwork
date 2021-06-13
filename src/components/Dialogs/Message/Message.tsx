import React from 'react';
import s from './Message.module.css';

// type MessageType = {
//     addPostMessage: (postMessage: string) => void
//     message: string
// }

    const Message = (props) => {

        let newMessageElement = React.createRef<HTMLTextAreaElement>();

        let addPostMessage = () => {
            let text = newMessageElement.current?.value;
            alert(text)
        }
        return <div className={s.dialog}>{props.message}
            <div>
                <textarea ref={newMessageElement}></textarea>
                <button onClick={addPostMessage}>Add post</button>
            </div>
           </div>
    }


export default Message;
import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/Dialogitem';
import Message from './Message/Message';

type dialogsElementsType = {
    name: string
    id: number
}

type messagesElementsType = {
    message: string
}

// type DialogsType = {
// }

const Dialogs = (props) => {

    let dialogsElements: React.FC<dialogsElementsType> = props.state.dialogs.map(d => <DialogItem name={d.name}
                                                                                                  id={d.id}/>);

    let messagesElements: React.FC<messagesElementsType> = props.state.messages.map(m => <Message
        message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;

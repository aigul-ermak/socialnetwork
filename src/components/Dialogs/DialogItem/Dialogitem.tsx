import React from 'react';
import {NavLink} from 'react-router-dom';
import s from "./DialogItem.module.css"


const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>// lesson 23
}

export default DialogItem;

//создали комп кот через пропс может принимать динамические данные
//берет строку dialogs и приклеивает то что в id
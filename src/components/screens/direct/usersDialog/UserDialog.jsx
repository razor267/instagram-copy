import React from "react";
import { useForm } from "react-hook-form";

import { sendMessageClick } from "../../../../redux/redusers/directReducer"

const MessageList = (props) => { 
  return props.messages.map((m) => {
    return <MessageItem message={m.message} />;
  });
};

const MessageItem = (props) => {
  return <div>{props.message}</div>;
};

export const UserDialog = (props) => {
  const { register, handleSubmit } = useForm();
  
  
  const id = props.userId;

  const messageItemEl = props.user.map((el) => {
    return <MessageList messages={el.messages} />;
  });
  
  const onSubmit = (value) => {
    debugger
    console.log(value)
    props.sendMessageClick(id, value.newMessageText)
    
  };

  return <>
  <div>{messageItemEl}</div>
  <div>
    <form onSubmit={handleSubmit(onSubmit)}> 
      <textarea {...register("newMessageText")} value={props.newMessageText} placeholder="Напишите сообщение"/>
      <button>Отправить</button>
    </form>
  </div>
  </>
};

//sendMessageClick

import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { sendMessageClick } from "../../../../redux/redusers/directReducer";

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
  
  const id = props.id;

  const messageItemEl = props.user.map((el) => {
    return <MessageList messages={el.messages} />;
  });
  
  const onSubmit = (value) => {
    //sendMessageClick
  };

  return <>
  <div>{messageItemEl}</div>
  <div>
    <form onSubmit={handleSubmit(onSubmit)}> 
      <textarea {...register("comment")} value={props.newMessageText} placeholder="Напишите сообщение"/>
      <button>Отправить</button>
    </form>
  </div>
  </>
};

//sendMessageClick

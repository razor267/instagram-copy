import React from "react";
import { useForm } from "react-hook-form";

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

  const messageItemEl = props.user.map((el) => {
    return <MessageList messages={el.messages} />;
  });
  
  const onSubmit = (data) => {
    console.log(data);
  };

  return <>
  <div>{messageItemEl}</div>
  <div>
    <form onSubmit={handleSubmit(onSubmit)}> 
      <textarea {...register("comment")} placeholder="Напишите сообщение"/>
      <button>Отправить</button>
    </form>
  </div>
  </>
};

//sendMessageClick

import React from "react";

const MessageList = (props) => {
  debugger;
  return props.messages.map((m) => {
    debugger;
    return <MessageItem message={m.message} />;
  });
};

const MessageItem = (props) => {
  return <div>{props.message}</div>;
};

export const UserDialog = (props) => {
  debugger;
  const messageItemEl = props.user.map((el) => {
    return <MessageList messages={el.messages} />;
  });

  return <div>{messageItemEl}</div>;
};

//sendMessageClick

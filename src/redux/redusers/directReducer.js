const ADD_MESSAGE = "ADD_MESSAGE"

const initialState = {
    users:[
        {id: 1,
        nickname: "qwe1",
        messages: [
            {id: 1, message: "sadsad"}, {id: 2, message: "2223"}
        ]
        },
        {id: 2,
            nickname: "qee",
            messages: [
                {id: 1, message: "ddsad"}, {id: 2, message: "2ddd3"} , {id: 2, message: "2ddd3"}
            ]},
        {id: 3,
            nickname: "wre21",
            messages: [
                {id: 1, message: "32q"}, {id: 2, message: "54w3"}
            ]}
    ]
}

export const directReduser = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MESSAGE:  
        if (state.newMessageText !== "") {
            let newMessage = { message: action.newMessageText };
            return {
              ...state,
    
              users: [
                ...state.users.map((f) => {
                  if (f.id === action.id) {
                    f.messages.push(newMessage);
                    return { ...f };
                  }
                  return f;
                }),
              ],
            };
          } else {
            return state;
          }
        default:
            return state;
    }
    
}

export const sendMessageClick = (id, newMessageText) => {
    return {
      type: "ADD-MESSAGE",
      id,
      newMessageText,
    };
  };
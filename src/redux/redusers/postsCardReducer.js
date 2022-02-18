const ADD_COMMENT = "ADD_COMMENT";

const initialState = {
  card: [
    {
      id: 1,
      nickName: "Nickolay",
      img: "https://cdn.pixabay.com/photo/2017/09/21/18/55/hildesheim-2772941_960_720.jpg",
      description: "это где то в Европе",
      comments: [
        {
          nickname: "Kirill",
          message: "Необычный дом",
        },
        {
          nickname: "agent",
          message: "как много окон",
        },
      ],
      date: "21.01.22",
    },
    {
      id: 2,
      nickName: "Kirill",
      img: "https://cdn.pixabay.com/photo/2017/09/21/18/55/hildesheim-2772941_960_720.jpg",
      description: "это что то",
      comments: [],
      date: "11.01.22",
    },
    {
      id: 3,
      nickName: "agent",
      img: "https://cdn.pixabay.com/photo/2017/09/21/18/55/hildesheim-2772941_960_720.jpg",
      description: "",
      comments: [],
      date: "1.01.22",
    },
  ],
};

export const postsCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      if (state.newMessageComment !== "") {
        const newComment = { message: action.newMessageComment };
        return {
          ...state,
          card: [
            ...state.card.map((el) => {
              debugger;
              if (el.id === action.id) {
                el.comments.push(newComment);
                return { ...el };
              }
              return el;
            }),
          ],
        };
      } else {
        return state;
      }
    default:
      return state;
  }
};

export const sendMessageComment = (id, newMessageComment) => {
  return {
    type: ADD_COMMENT,
    id,
    newMessageComment,
  };
};

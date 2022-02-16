const initialState = {
  card: [
    {
      id: 1,
      nickName: "Nickolay",
      img: "https://cdn.pixabay.com/photo/2017/09/21/18/55/hildesheim-2772941_960_720.jpg",
      description: "это где то в Европе",
      comments: [
        {
          id: 1,
          nickname: "Kirill",
          message: "Необычный дом",
        },
        {
          id: 2,
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
  }
  return state;
};
const initialState = {
  card: [
    {
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
      nickName: "Kirill",
      img: "https://cdn.pixabay.com/photo/2017/09/21/18/55/hildesheim-2772941_960_720.jpg",
      description: "это что то",
      comments: [],
      date: "11.01.22",
    },
    {
      nickName: "agent",
      img: "https://cdn.pixabay.com/photo/2017/09/21/18/55/hildesheim-2772941_960_720.jpg",
      description: "",
      comments: [],
      date: "1.01.22",
    },
  ],
};

const postsCardReducer = (state = initialState, action) => {
  switch (action.type) {
  }
  return state;
};
export default postsCardReducer;

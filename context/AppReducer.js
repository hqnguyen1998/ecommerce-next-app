export const AppReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_MORE_POSTS': {
      return {
        posts: {
          ...state.posts,
          limit: state.posts.limit + state.posts.increaseLimitBy,
        },
      };
    }
    default:
      return state;
  }
};

const initialState = {
  value: "",
  error: false,
  loading: false,
  deleted: false,
  confirmed: false,
};

/* const reducer = (state, action) => {
}; */

/* const reducer = (state, action) => {
  if (action.type === 'ERROR') {
    return {
      ...state,
      error: true,
      loading: false,
    };
  } else if (action.type === 'CHECK') {
    return {
      ...state,
      loading: true,
    };
  } else if (action.type === 'CONFIRM') {
    return {
      ...state,
      error: false,
      loading: false,
      confirmed: true,
    };
  } else if (action.type === "DELETE") {
    return {
      ...state,
      deleted: true,
    }
  } else if (action.type === "RESET") {
    return {
      ...state,
      confirmed: false,
      deleted: false,
      value: "",
    }
  } else {
    return {
      ...state,
    };
  }
}; */

const reducerSwitch = (state, action) => {
  switch (action.type) {
    case "ERROR":
      return {
        ...state,
        error: true,
        loading: false,
      };
    case "CHECK":
      return {
        ...state,
        loading: true,
      };
    case "CONFIRM":
      return {
        ...state,
        error: false,
        loading: false,
        confirmed: true,
      };
    case "DELETE":
      return {
        ...state,
        deleted: true,
      };
    case "RESET":
      return {
        ...state,
        confirmed: false,
        deleted: false,
        value: "",
      };
    default:
      return {
        ...state,
      };
  }
};

const reducerObject = (state) => ({
  'ERROR': {
    ...state,
    error: true,
    loading: false,
  },
  'CHECK': {
    ...state,
    loading: true,
  },
  'CONFIRM': {
    ...state,
    error: false,
    loading: false,
    confirmed: true,
  },
  'DELETE': {
    ...state,
    deleted: true,
  },
  'RESET': {
    ...state,
    confirmed: false,
    deleted: false,
    value: "",
  },
});

const reducer = (state, action) => {
  if (reducerObject(state)[action.type]) {
    return reducerObject(state)[action.type];
  } else {
    return state;
  }
};

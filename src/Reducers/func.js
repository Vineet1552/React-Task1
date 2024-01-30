// function.js
const initialstate  = {
  modalOpen1: true,
  modalOpen2: true,
};

export const Modal1 = (state = initialstate, action) => {
  switch(action.type) {
    case "OPEN1": return { modalOpen1: false, modalOpen2: true };
    case "OPEN2": return { modalOpen2: false, modalOpen1: true };
    default: return state;
  }
};

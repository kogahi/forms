const initState = {
  sex: '',
  birthYear: '',
  birthMonth: '',
  birthDay: '',
  insuStatus: '',
  hospiStatus: '',
  pastStatus: '',
  consultations: '',
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'UPD_STATUS':
      return Object.assign(state, action.value);
    default: {
      return state;
    }
  }
};

export default reducer;

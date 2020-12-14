const initState = {
  sex: "",
  birthYear: "",
  birthMonth: "",
  birthDay: "",
  insuStatus: "",
  hospiStatus: "",
  pastStatus: "",
  consultations: "",
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "UPD_FIRST_STATUS":
      return Object.assign({}, state, {
        sex: action.value.sex,
        birthYear: action.value.birthYear,
        birthMonth: action.value.birthMonth,
        birthDay: action.value.birthDay,
      });
    case "UPD_SECOND_STATUS":
      return Object.assign({}, state, {
        insuStatus: action.value.insuStatus,
        hospiStatus: action.value.hospiStatus,
        pastStatus: action.value.pastStatus,
      });
    case "UPD_THIRD_STATUS":
      return Object.assign({}, state, {
        consultations: action.value.consultations,
      });
    default: {
      return state;
    }
  }
};

export default reducer;

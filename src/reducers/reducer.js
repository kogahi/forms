const initState = {
  Ans: {
    sex: "",
    birthdayYear: "",
    birthdayMonth: "",
    birthdayDay: "",
    insuStatus: "",
    hospiStatus: "",
    pastStatus: "",
    consultations: "",
  },
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "UPD_SEX":
      return { Ans: { ...state.Ans, sex: action.value } };
    case "UPD_BIRTHDAY_YEAR":
      return { Ans: { ...state.Ans, birthdayYear: action.value } };
    case "UPD_BIRTHDAY_MONTH":
      return { Ans: { ...state.Ans, birthdayMonth: action.value } };
    case "UPD_BIRTHDAY_DAY":
      return { Ans: { ...state.Ans, birthdayDay: action.value } };
    case "UPD_INSUSTATUS":
      return { Ans: { ...state.Ans, insuStatus: action.value } };
    case "UPD_HOSPISTATUS":
      return { Ans: { ...state.Ans, hospiStatus: action.value } };
    case "UPD_PASTSTATUS":
      return { Ans: { ...state.Ans, pastStatus: action.value } };
    case "UPD_CONSULTATIONS":
      return { Ans: { ...state.Ans, consultations: action.value } };
    default: {
      return state;
    }
  }
};

export default reducer;

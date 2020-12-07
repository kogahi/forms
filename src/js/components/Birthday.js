import React from "react";
import actions from "../../actions/actions";
import { connect } from "react-redux";

class Birthday extends React.Component {
  yearChange() {}
  render() {
    const years = [{ value: "-", label: "-" }];
    for (let i = 1990; i < 2021; i++) {
      const value = "";
      const label = "";
      years.push({
        value: i,
        label: i,
      });
    }
    const months = [{ value: "-", label: "-" }];
    for (let i = 1; i < 13; i++) {
      const value = "";
      const label = "";
      months.push({
        value: i,
        label: i,
      });
    }
    const days = [{ value: "-", label: "-" }];
    for (let i = 1; i < 32; i++) {
      const value = "";
      const label = "";
      days.push({
        value: i,
        label: i,
      });
    }
    const selectYear = years.map((year) => (
      <option value={year.value}>{year.label}</option>
    ));
    const selectMonth = months.map((month) => (
      <option value={month.value}>{month.label}</option>
    ));
    const selectDay = days.map((day) => (
      <option value={day.value}>{day.label}</option>
    ));

    return (
      <div class="birthday">
        <div>
          <span>-生年月日-</span>
        </div>
        <div className="select">
          <form>
            <select
              id="birthday-year"
              name="year"
              onChange={() =>
                this.props.onChangeYear(
                  "UPD_BIRTHDAY_YEAR",
                  document.getElementById("birthday-year").value
                )
              }
            >
              {selectYear}
            </select>
            　年
            <select
              id="birthday-month"
              name="month"
              onChange={() =>
                this.props.onChangeMonth(
                  "UPD_BIRTHDAY_MONTH",
                  document.getElementById("birthday-month").value
                )
              }
            >
              {selectMonth}
            </select>
            　月
            <select
              id="birthday-day"
              name="day"
              onChange={() =>
                this.props.onChangeDay(
                  "UPD_BIRTHDAY_DAY",
                  document.getElementById("birthday-day").value
                )
              }
            >
              {selectDay}
            </select>
            　日
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    birthdayYear: state.birthdayYear,
    birthdayNonth: state.birthdayNonth,
    birthdayDay: state.birthdayDay,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeYear(target, value) {
      dispatch(actions.setValue(target, value));
    },
    onChangeMonth(target, value) {
      dispatch(actions.setValue(target, value));
    },
    onChangeDay(target, value) {
      dispatch(actions.setValue(target, value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Birthday);

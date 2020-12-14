import React from "react";
import actions from "../../actions/actions";
import { connect } from "react-redux";
import BirthSelect from "./definition.js";

class Birthday extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeYear = this.handleChangeYear.bind(this);
    this.handleChangeMonth = this.handleChangeMonth.bind(this);
    this.handleChangeDay = this.handleChangeDay.bind(this);
  }

  handleChangeYear(e) {
    this.props.yearChange(e.target.value);
  }
  handleChangeMonth(e) {
    this.props.monthChange(e.target.value);
  }
  handleChangeDay(e) {
    this.props.dayChange(e.target.value);
  }

  render() {
    const birthOptions = BirthSelect();
    const selectYear = birthOptions.years.map((year) => (
      <option value={year.value}>{year.label}</option>
    ));
    const selectMonth = birthOptions.months.map((month) => (
      <option value={month.value}>{month.label}</option>
    ));
    const selectDay = birthOptions.days.map((day) => (
      <option value={day.value}>{day.label}</option>
    ));

    return (
      <div class="birthday">
        <div>
          <span>-生年月日-</span>
        </div>
        <div className="select">
          <select id="birth-year" name="year" onChange={this.handleChangeYear}>
            {selectYear}
          </select>
          　年
          <select
            id="birth-month"
            name="month"
            onChange={this.handleChangeMonth}
          >
            {selectMonth}
          </select>
          　月
          <select id="birth-day" name="day" onChange={this.handleChangeDay}>
            {selectDay}
          </select>
          　日
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     birthYear: state.birthYear,
//     birthMonth: state.birthMonth,
//     birthDay: state.birthDay,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onChangeYear(target, value) {
//       dispatch(actions.setValue(target, value));
//     },
//     onChangeMonth(target, value) {
//       dispatch(actions.setValue(target, value));
//     },
//     onChangeDay(target, value) {
//       dispatch(actions.setValue(target, value));
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Birthday);
export default Birthday;

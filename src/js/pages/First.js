import React from "react";
import { Link } from "react-router-dom";
import Birthday from "../components/Birthday";
import actions from "../../actions/actions";
import { connect } from "react-redux";

class First extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sex: "",
      birthYear: "",
      birthMonth: "",
      birthDay: "",
    };
    this.handleChangeYear = this.handleChangeYear.bind(this);
    this.handleChangeMonth = this.handleChangeMonth.bind(this);
    this.handleChangeDay = this.handleChangeDay.bind(this);
  }

  handleChangeSex(e) {
    this.setState({
      sex: e.target.value,
    });
  }

  handleChangeYear(e) {
    this.setState({
      birthYear: e,
    });
  }

  handleChangeMonth(e) {
    this.setState({
      birthMonth: e,
    });
  }

  handleChangeDay(e) {
    this.setState({
      birthDay: e,
    });
  }

  render() {
    return (
      <div class="container">
        <div class="input-box">
          <i class="fas fa-address-card"></i>
          <span>お客様の情報を入力してください</span>
          <div class="sex">
            <div>
              <span>-性別-</span>
            </div>
            <div className="radio">
              <form>
                <input
                  type="radio"
                  id="male"
                  name="sex"
                  value="male"
                  onChange={this.handleChangeSex.bind(this)}
                />
                <label for="male">男</label>
                <input
                  type="radio"
                  id="female"
                  name="sex"
                  value="female"
                  onChange={this.handleChangeSex.bind(this)}
                />
                <label for="female">女</label>
              </form>
            </div>
          </div>
          <div class="birthday">
            <Birthday
              birthYear={this.state.birthYear}
              birthMonth={this.state.birthMonth}
              onChange={this.state.birthDay}
              yearChange={this.handleChangeYear}
              monthChange={this.handleChangeMonth}
              dayChange={this.handleChangeDay}
            />
          </div>
        </div>
        <Link to="/second">
          <button
            onClick={() =>
              this.props.handleChangeFirstValue("UPD_STATUS", this.state)
            }
          >
            次へ進む<i class="fas fa-angle-right"></i>
          </button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sex: state.sex,
    birthYear: state.birthYear,
    birthMonth: state.birthMonth,
    birthDay: state.birthDay,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeFirstValue(target, value) {
      dispatch(actions.setValue(target, value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(First);

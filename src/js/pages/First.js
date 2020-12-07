import React from "react";
import { Link } from "react-router-dom";
import Birthday from "../components/Birthday";
import actions from "../../actions/actions";
import { connect } from "react-redux";

class First extends React.Component {
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
                  onChange={() => this.props.toChangeMale("UPD_SEX", "male")}
                />
                <label for="male">男</label>
                <input
                  type="radio"
                  id="female"
                  name="sex"
                  value="female"
                  onChange={() =>
                    this.props.toChangeFemale("UPD_SEX", "female")
                  }
                />
                <label for="female">女</label>
              </form>
            </div>
          </div>
          <div class="birthday">
            <Birthday onChange={this.props.onChangeBirthday} />
          </div>
        </div>
        <Link to="/second">
          <button>
            次へ進む<i class="fas fa-angle-right"></i>
          </button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sex: state.Ans.sex,
    birthday: state.Ans.birthday,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toChangeMale(target, value) {
      dispatch(actions.setValue(target, value));
    },
    toChangeFemale(target, value) {
      dispatch(actions.setValue(target, value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(First);

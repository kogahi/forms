import React from "react";
import { Link } from "react-router-dom";
import actions from "../../actions/actions";
import { connect } from "react-redux";

class Second extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      insuStatus: "",
      hospiStatus: "",
      pastStatus: "",
    };
  }

  toChangeInsuStatus(e) {
    this.setState({ insuStatus: e.target.value });
  }

  toChangeHospiStatus(e) {
    this.setState({ hospiStatus: e.target.value });
  }

  toChangePastStatus(e) {
    this.setState({ pastStatus: e.target.value });
  }

  render() {
    return (
      <div className="container">
        <div className="input-box">
          <i className="fas fa-address-card"></i>
          <span>以下にお答えください</span>
          <div className="insu_status">
            <div>
              <span>現在、生命保険に加入されていますか？</span>
            </div>
            <div className="insu-radio">
              <form>
                <input
                  type="radio"
                  id="insu_yes"
                  name="insu_status"
                  value="yes"
                  onChange={this.toChangeInsuStatus.bind(this)}
                />
                <label for="yes">はい</label>
                <input
                  type="radio"
                  id="insu_no"
                  name="insu_status"
                  value="no"
                  onChange={this.toChangeInsuStatus.bind(this)}
                />
                <label for="no">いいえ</label>
              </form>
            </div>
          </div>
          <div
            className="now_status"
            style={{ display: this.state.insuStatus === "" ? "none" : "" }}
          >
            <div>
              <span>
                現在入院中ですか。または、最近3カ月以内に医師の診察・検索の結果、入院・手術を勧められたことはありますか？
              </span>
            </div>
            <div className="radio">
              <form>
                <input
                  type="radio"
                  id="hospi_yes"
                  name="hospi_status"
                  value="yes"
                  onChange={this.toChangeHospiStatus.bind(this)}
                />
                <label for="yes">はい</label>
                <input
                  type="radio"
                  id="hospi_no"
                  name="hospi_status"
                  value="no"
                  onChange={this.toChangeHospiStatus.bind(this)}
                />
                <label for="no">いいえ</label>
              </form>
            </div>
          </div>
          <div
            class="past_status"
            style={{ display: this.state.hospiStatus === "" ? "none" : "" }}
          >
            <div>
              <span>
                過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？
              </span>
            </div>
            <div className="radio">
              <form>
                <input
                  type="radio"
                  id="past_yes"
                  name="past_status"
                  value="yes"
                  onChange={this.toChangePastStatus.bind(this)}
                />
                <label for="yes">はい</label>
                <input
                  type="radio"
                  id="past_no"
                  name="past_status"
                  value="no"
                  onChange={this.toChangePastStatus.bind(this)}
                />
                <label for="no">いいえ</label>
              </form>
            </div>
          </div>
        </div>
        <Link to="/">
          <button>
            前へ戻る<i class="fas fa-angle-right"></i>
          </button>
        </Link>
        <Link to="/third">
          <button
            onClick={() =>
              this.props.handleChangeSecondValue("UPD_STATUS", this.state)
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
    insuStatus: state.insuStatus,
    hospiStatus: state.hospiStatus,
    pastStatus: state.pastStatus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeSecondValue(target, value) {
      dispatch(actions.setValue(target, value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Second);

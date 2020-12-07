import React from "react";
import { Link } from "react-router-dom";
import actions from "../../actions/actions";
import { connect } from "react-redux";

class Second extends React.Component {
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
                  value="insu_yes"
                  onChange={() =>
                    this.props.toChangeInsu("UPD_INSUSTATUS", "yes")
                  }
                />
                <label for="yes">はい</label>
                <input
                  type="radio"
                  id="insu_no"
                  name="insu_status"
                  value="insu_no"
                  onChange={() =>
                    this.props.toChangeInsu("UPD_INSUSTATUS", "no")
                  }
                />
                <label for="no">いいえ</label>
              </form>
            </div>
          </div>
          <div
            className="now_status"
            style={{ display: this.props.insuStatus === "" ? "none" : "" }}
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
                  value="hospi_yes"
                  onChange={() =>
                    this.props.toChangeHospi("UPD_HOSPISTATUS", "yes")
                  }
                />
                <label for="yes">はい</label>
                <input
                  type="radio"
                  id="hospi_no"
                  name="hospi_status"
                  value="hospi_no"
                  onChange={() =>
                    this.props.toChangeHospi("UPD_HOSPISTATUS", "no")
                  }
                />
                <label for="no">いいえ</label>
              </form>
            </div>
          </div>
          <div
            class="past_status"
            style={{ display: this.props.hospiStatus === "" ? "none" : "" }}
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
                  value="past_yes"
                  onChange={() =>
                    this.props.toChangePast("UPD_PASTSTATUS", "yes")
                  }
                />
                <label for="yes">はい</label>
                <input
                  type="radio"
                  id="past_no"
                  name="past_status"
                  value="past_no"
                  onChange={() =>
                    this.props.toChangePast("UPD_PASTSTATUS", "no")
                  }
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
    insuStatus: state.Ans.insuStatus,
    hospiStatus: state.Ans.hospiStatus,
    pastStatus: state.Ans.pastStatus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toChangeInsu(target, value) {
      dispatch(actions.setValue(target, value));
    },
    toChangeHospi(target, value) {
      dispatch(actions.setValue(target, value));
    },
    toChangePast(target, value) {
      dispatch(actions.setValue(target, value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Second);

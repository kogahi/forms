import React from "react";
import { Link } from "react-router-dom";
import actions from "../../actions/actions";
import { connect } from "react-redux";

class Last extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div class="container">
        <div class="input-box">
          <i class="fas fa-address-card"></i>
          <span>以下の内容をご確認ください</span>
          <div class="insu_status">
            <div>
              <span>-性別-</span>
            </div>
            <div className="sex">
              <span>{this.props.sex === "male" ? "男性" : "女性"}</span>　
            </div>
          </div>
          <div class="">
            <div>
              <span>-生年月日-</span>
            </div>
            <div className="birthday">
              <span>
                {this.props.birthYear}年{this.props.birthMonth}月
                {this.props.birthDay}日
              </span>
            </div>
          </div>
          <div class="insu_status">
            <div>
              <span>-現在、生命保険に加入されていますか？-</span>
            </div>
            <div className="radio">
              {this.props.insuStatus === "yes" ? "はい" : "いいえ"}　
            </div>
          </div>
          <div class="now_status">
            <div>
              <span>
                -現在入院中ですか。または、最近3カ月以内に医師の診察・検索の結果、入院・手術を勧められたことはありますか？-
              </span>
            </div>
            <div className="radio">
              {this.props.hospiStatus === "yes" ? "はい" : "いいえ"}　
            </div>
          </div>
          <div class="past_status">
            <div>
              <span>
                -過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？-
              </span>
            </div>
            <div className="radio">
              {this.props.pastStatus === "yes" ? "はい" : "いいえ"}　
            </div>
          </div>
          <div class="past_status">
            <div>
              <span>-ご相談内容-</span>
            </div>
            <div className="radio">{this.props.consultations}</div>　
          </div>
        </div>
        <Link to="/third">
          <button>
            前へ戻る<i class="fas fa-angle-right"></i>
          </button>
        </Link>
        <Link>
          <button>
            送信<i class="fas fa-angle-right"></i>
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
    insuStatus: state.insuStatus,
    hospiStatus: state.hospiStatus,
    pastStatus: state.pastStatus,
    consultations: state.consultations,
  };
};

export default connect(mapStateToProps)(Last);

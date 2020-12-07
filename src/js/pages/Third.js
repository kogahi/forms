import React from "react";
import { Link } from "react-router-dom";
import actions from "../../actions/actions";
import { connect } from "react-redux";

class Third extends React.Component {
  render() {
    return (
      <div class="container">
        <div class="input-box">
          <i class="fas fa-address-card"></i>
          <span>ご相談内容をご記入ください</span>
          <div class="consultations">
            <div>
              <span>-ご相談内容-</span>
            </div>
            <div className="sub_container">
              <textarea
                id="consultations"
                onChange={() =>
                  this.props.toChangeConsultations(
                    "UPD_CONSULTATIONS",
                    document.getElementById("consultations").value
                  )
                }
              />
            </div>
          </div>
        </div>
        <Link to="/second">
          <button>
            前へ戻る<i class="fas fa-angle-right"></i>
          </button>
        </Link>
        <Link to="/last">
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
    consultations: state.Ans.consultations,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toChangeConsultations(target, value) {
      console.log(value);

      dispatch(actions.setValue(target, value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Third);

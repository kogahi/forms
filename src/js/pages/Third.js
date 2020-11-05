import React from "react";
import { Link } from "react-router-dom"; //次ボタン用

export default class Third extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }
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
              <textarea/>
        　  </div>
      　  </div>
        </div> 
        <Link to="/second">
        <button  >前へ戻る<i class="fas fa-angle-right"></i></button>
        </Link>
        <Link to="/third">
        <button >次へ進む<i class="fas fa-angle-right"></i></button>
        </Link>
    </div>
    );
  }
}
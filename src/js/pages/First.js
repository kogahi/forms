import React from "react";
import { Link } from "react-router-dom";
import Birthday from "../components/Birthday"; 

export default class First extends React.Component {
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
          <span>お客様の情報を入力してください</span>
          <div class="sex">
            <div>
                <span>-性別-</span>
            </div>
            <div className="radio">
              <form>
                <input type="radio" id="male" name="sex" value="male" />
                <label for="male">男</label>
                <input type="radio" id="female" name="sex" value="female"/>
                <label for="female">女</label>
              </form>
        　  </div>
      　  </div>
          <div class="birthday">
            <Birthday></Birthday>
        　</div>
        </div>
        <Link to="/second"> 
         <button >次へ進む<i class="fas fa-angle-right"></i></button>
        </Link>
     </div>
    );
  }
}
import React from "react";
import { Link } from "react-router-dom"; 

export default class Second extends React.Component {
  constructor() {
    super();
    this.state = {
      insuStatus: '',
      hospiStatus: ''
    };
  }

  handleChangeInsu(e){
   this.setState({insuStatus: e.target.value});
  }

  handleChangeHospi(e){
    this.setState({hospiStatus: e.target.value});
  }

  render() {
    return (
      <div class="container">
        <div class="input-box">
          <i class="fas fa-address-card"></i>
          <span>以下にお答えください</span>
          <div class="insu_status">
            <div>
                <span>現在、生命保険に加入されていますか？</span>
            </div>
            <div className="radio">
              <form>
                <input type="radio" id="insu_yes" name="insu_status" value="yes"
                onChange={this.handleChangeInsu.bind(this)} checked={this.state.insuStatus === "yes"} />
                <label for="yes">はい</label>
                <input type="radio" id="insu_no" name="insu_status" value="no"
                 onChange={this.handleChangeInsu.bind(this)} checked={this.state.insuStatus === "no"}/>
                <label for="no">いいえ</label>
              </form>
        　  </div>
      　  </div>
          <div class="now_status" style={{ display: this.state.insuStatus === '' ? 'none' : ''}}>
            <div>
                <span>現在入院中ですか。または、最近3カ月以内に医師の診察・検索の結果、入院・手術を勧められたことはありますか？</span>
            </div>
            <div className="radio">
              <form>
                <input type="radio" id="hospi_yes" name="hospi_status" value="yes"
                 onChange={this.handleChangeHospi.bind(this)} checked={this.state.hospiStatus === "yes"} />
                <label for="yes">はい</label>
                <input type="radio" id="hospi_no" name="hospi_status" value="no"
                   onChange={this.handleChangeHospi.bind(this)} checked={this.state.hospiStatus === "no"} />
                <label for="no">いいえ</label>
              </form>
        　  </div>
      　  </div>
          <div class="past_status" style={{ display: this.state.hospiStatus === '' ? 'none' : ''}}>
            <div>
                <span>過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？</span>
            </div>
            <div className="radio">
              <form>
                <input type="radio" id="past_yes" name="past_status" value="yes" />
                <label for="yes">はい</label>
                <input type="radio" id="past_no" name="past_status" value="no"/>
                <label for="no">いいえ</label>
              </form>
        　  </div>
      　  </div>
        </div> 
        <Link to="/">
        <button  >前へ戻る<i class="fas fa-angle-right"></i></button>
        </Link>
        <Link to="/third">
        <button >次へ進む<i class="fas fa-angle-right"></i></button>
        </Link>
    </div>
    );
  }
}
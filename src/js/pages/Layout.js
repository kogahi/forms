import React from "react";
import { NavLink,Link, withRouter} from "react-router-dom";

class Layout extends React.Component{
    navigate(){
      this.props.history.push("/");
    }
  render() {
    return (
      <div>
        {this.props.children}   
      </div>
    );
  }
}

export default withRouter(Layout);
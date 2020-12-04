import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router,Route} from "react-router-dom";
import Layout from "./pages/Layout";
import First from "./pages/First";
import Second from "./pages/Second";
import Third from "./pages/Third";

const app = document.getElementById('app');

ReactDOM.render(
    <Router>
     <Layout>
        <Route exact path="/" component={First}></Route>
        <Route path="/second" component={Second}></Route>
        <Route path="/third" component={Third}></Route>
     </Layout>
    </Router>,
    app
);
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar2";
import NavBar from "./components/NavBar";
import  React, { Component } from "react";
import "./index.css";


const classNames = [
    "first-header","secound-header","third-header"
];

class BaseLayout extends Component {
    constructor(props){
        super(props);
        this.state={
            index:0,
        };
    }
    incrementIndex= () => {
        const newIndex= this.state.index+1;
        this.setState({index: newIndex});
    }
    componentDidMount=()=> {
        setInterval(this.incrementIndex, 3000); //3000 milisecounds is 3 secounds
    }
 render() {
    const index = this.state.index % classNames.length;
    const className = classNames[index];
    return(
      <div>
        <div className={className}>
          <Navbar />
          <Header />
        </div>
        <div className="content">
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
}
export default BaseLayout;
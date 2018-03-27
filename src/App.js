import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link,Redirect } from "react-router-dom";

import {todo, contact} from './action';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Home from './component/home';

class App extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            contact:{
                Name:'',
                Add:'',
                City:'',
                Phone:''
            }
        };
        this.props.action.contact.getData({
            "id":3,
            "name":"Chirak",
            "Address":"Surat"
        });
    }

    handleChange = (event) =>{
        let {name, value}=event.target;
        let {contact}=this.state;
        contact[name]=value;
        this.setState({
            contact
        })

        // event.preventDefault();
    }

    componentDidMount()
    {
        debugger;
        this.props.action.todo.addTodo("Hello Vishnu");
    }

    componentWillReceiveProps(nextProps)
    {
        debugger;
        console.log("old : ", this.props.contact);
        console.log("new : ", nextProps.contact);
        console.log("data : ", nextProps.contact.data);
    }


    Home = () => <Home />;


    About = () =>
        <div>
            <h2>About</h2>
        </div>;

    Topics = () =>
        <div className="App">
            Topics
            <p className="App-intro">
                <input name="Name" placeholder="Name" value={this.state.contact.Name} onChange={this.handleChange} />
                <input name="Add" placeholder="Address" value={this.state.contact.Add} onChange={this.handleChange} />
                <input name="City" placeholder="City" value={this.state.contact.City} onChange={this.handleChange} />
                <input name="Phone" placeholder="Phone" value={this.state.contact.Phone} onChange={this.handleChange} />
                <br />
                <button onClick={()=>{this.props.action.contact.addContact(this.state.contact)}}>Submit</button>
            </p>
        </div>;

  render() {
    const Public=({...props})=> {
          debugger;
          return (false)?<Route {...props} />:<Redirect to={'/'}/>
      };

    return (
        <React.Fragment>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
            </header>

            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/topics">Topics</Link>
                        </li>
                    </ul>

                    <hr />

                    <Public exact path="/login" component={this.About} />
                    <Route exact path="/" component={this.Home} />
                    <Route exact path="/about" component={this.About} />
                    <Route exact path="/topics" component={this.Topics} />
                </div>
            </Router>
        </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
    debugger;
    return {
        todo:state.todo,
        contact:state.contact
    }
};

const mapDispachToProps = (dispach) => {
    debugger;
    return {
        action:{
            todo:bindActionCreators(todo, dispach),
            contact:bindActionCreators(contact, dispach)
        }
    }
};

export default connect(mapStateToProps, mapDispachToProps)(App);

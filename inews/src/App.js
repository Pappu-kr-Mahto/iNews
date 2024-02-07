
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 6;
  // keyValue = process.env.REACT_API_KEY;
  keyValue = "71a08a4410b14242b2fc5b18d69f7c40";

  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            height={2}
            progress={this.state.progress}

          />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} category="general" country="in" keyValue={this.keyValue} />} />
            <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" pageSize={this.pageSize} category="business" country="in" keyValue={this.keyValue} />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} category="entertainment" country="in" keyValue={this.keyValue} />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" pageSize={this.pageSize} category="health" country="in" keyValue={this.keyValue} />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" pageSize={this.pageSize} category="science" country="in" keyValue={this.keyValue} />} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" pageSize={this.pageSize} category="sports" country="in" keyValue={this.keyValue} />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={this.pageSize} category="technology" country="in" keyValue={this.keyValue} />} />

          </Routes>


          {/* <Switch>

            <Route exact path="/"> { <News setProgress={this.setProgress}  pageSize={this.pageSize} category="general" country="in"/>}</Route>
            <Route exact path="/business"> { <News setProgress={this.setProgress}  pageSize={this.pageSize} category="business" country="in"/>}</Route>
            <Route exact path="/entertainment"> { <News setProgress={this.setProgress}  pageSize={this.pageSize} category="entertainment" country="in"/>}</Route> 
            <Route exact path="/health">{  <News setProgress={this.setProgress}  pageSize={this.pageSize} category="health" country="in"/>}</Route>
            <Route exact path="/science"> { <News setProgress={this.setProgress}  pageSize={this.pageSize} category="science" country="in"/>}</Route>
            <Route exact path="/sports"> { <News setProgress={this.setProgress}  pageSize={this.pageSize} category="sports" country="in"/>}</Route>
            <Route exact path="/technology"> { <News setProgress={this.setProgress}  pageSize={this.pageSize} category="technology" country="in"/>}</Route>
          </Switch> */}
        </Router>
      </>
    )
  }
}




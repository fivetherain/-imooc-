import React, { Component } from 'react';
// import CommentBox from './components/CommentBox';
// import CommentList from './components/CommentList';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import ThemedBar from "./components/ThemedBar";
import ThemeContext from './theme-context.jsx';
import logo from "./logo.svg"
const themes = {
  light:{
    classnames: 'btn btn-primary',
    bgColor: '#eeeeee',
    color: '#000'
  },
  dark: {
    classnames: 'btn btn-light',
    bgColor: '#222222',
    color: '#fff'
  },
}
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      // comment:['diyichi']
      theme:'light'
    }
    this.addComments=this.addComments.bind(this)
    // this.changeTheme = this.changeTheme.bind(this)
  }
  addComments(e){
    this.setState({
      comment:[...this.state.comment,e]
    })
  }
  // changeTheme (theme) {
  //   this.setState({
  //     theme,
  //   })
  // }
  changeTheme = (theme) =>{
    this.setState({
      theme
    })
  }
  render() {
    // const { comment }=this.state
    return (
      // <div>
      //   <CommentList comment={comment}/>
      //   <CommentBox comment={comment} addComment={this.addComments}/>
      // </div>
      <ThemeContext.Provider value={themes[this.state.theme]}>
        <div className='App'>
          <header className='App-header'>
            <img src={logo} className='App-logo' alt="logo"></img>
            <h1 className="App-title">Welcome to react</h1>
            <a href="#theme-switcher"
            className="btn btn-light"
            onClick={()=>{this.changeTheme('light')}}>
              浅色主题
            </a>
            <a href="#theme-switcher"
            className="btn btn-secondary"
            onClick={()=>{this.changeTheme('dark')}}>
              深色主题
            </a>
          </header>
          <ThemedBar />
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
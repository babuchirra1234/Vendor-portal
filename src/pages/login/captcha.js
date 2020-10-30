import React, { Component } from 'react';
//import './App.css';
import RCG from 'react-captcha-generator';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      captcha: ''
    }
    this.check = this.check.bind(this)
    this.result = this.result.bind(this)
    this.handleClick = this.handleClick.bind(this)
   // this.captchaRefresh = this.captchaRefresh(this)
  }

  render() {
    return (
      <div className="App">
         <RCG result={this.result} /><button type="submit" onClick={() => window.location.reload(false)}>Refresh</button>
        <form onSubmit={this.handleClick}>
          <input type='text' className={'xxx'} ref={ref => this.captchaEnter = ref} />
          <input type='submit' />
        </form>
       
      </div>
    );
  }
  // captchaRefresh(e){
  //   window.location.reload(false);
  // }
  handleClick(e) {
    e.preventDefault();
    this.check()
  }

  result(text) {
    console.log("text", text);
    this.setState({
      captcha: text
    })
  }
  
  check() {
if(this.state.captcha === this.captchaEnter.value){
  console.log("hello")
}else{
  console.log("hello1")
}

   // console.log(this.state.captcha, this.captchaEnter.value, this.state.captcha === this.captchaEnter.value)
  }

}

export default App;
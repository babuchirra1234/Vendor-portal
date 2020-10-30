import React from 'react';
import RCG from 'react-captcha-generator';
class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            captcha:'',
            submitted: false,
            reload: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.result = this.result.bind(this)
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    result(text) {
        console.log("text", text);
        // this.setState({
        //   captcha: text
        // })
      }
    //   refreshCaptch =() =>{
    //     //this.forceUpdate();
    //     this.setState(
    //         {reload: true},
    //         () => this.setState({reload: false})
    //       )
    //   }
    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password,captcha } = this.state;
        if (username && password && captcha) {
           console.log(username,password,captcha);
        }
    }

    render() {
        
        const { username, password,captcha, submitted } = this.state;
        return (
            <div className="login-main">
            <div className="login-sub">
                <h2 className="text-center">Login</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                        {submitted && !username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                        {submitted && !password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !captcha ? ' has-error' : '')}>
                    
                        <label htmlFor="password">Captcha</label>
                       <span class="captcharesult">
                        <RCG  result={this.result} /> 
                        {/* <button type="submit" onClick={this.refreshCaptch}>  Refresh  </button> */}
                        
                        
                         </span> <input type="password" className="form-control" name="captcha" value={captcha} onChange={this.handleChange} />
                        {submitted && !captcha &&
                            <div className="help-block">captcha is required</div>
                        }
                    </div>
                    <div className="form-group">
                    <button className="my-btn color-blue register-btn">Login</button>
                    
                    </div>
                </form>
            </div>
            </div>
        );
    }
}


export default  LoginPage ;
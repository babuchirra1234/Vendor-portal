import React from 'react';
import RCG from 'react-captcha-generator';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();
class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            captcha: '',
            rcgCaptcha: '',
            submitted: false,
            reload: false,
            errorText: false
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
        this.setState({
            rcgCaptcha: text
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        const { username, password, captcha } = this.state;
        console.log(username, password, captcha, this.state.rcgCaptcha)
        const rcgCaptchaResult = this.state.rcgCaptcha;
        if ((username == "") && (password == "") && captcha == "") {
            this.setState({ submitted: true });
        } else {
            if ((rcgCaptchaResult == captcha) && (username == "bapuchirra") && (password == "Chirra@123")) {
                console.log("Hiii")
                window.location = "/OtpPage";
            } else {
                console.log("error")
                this.setState({ errorText: true })
            }
        }
    }
    render() {
        const { username, password, captcha, submitted } = this.state;
        return (
            <div className="login-main">
                <div className="login-sub">
                    <h2 className="text-center">Login</h2>
                    <form name="form" onSubmit={this.handleSubmit}>
                        {this.state.errorText && <div className="help-block text-center">UserName and Password Wrong</div>}
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
                                <RCG result={this.result} />
                                {/* <button type="submit" onClick={this.refreshCaptch}>  Refresh  </button> */}


                            </span> <input type="text" className="form-control" name="captcha" value={captcha} onChange={this.handleChange} />
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


export default LoginPage;
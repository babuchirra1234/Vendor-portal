import React from 'react';
class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            captcha:'',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

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
                        <input type="password" className="form-control" name="captcha" value={captcha} onChange={this.handleChange} />
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
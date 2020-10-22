import React from 'react';
class OtpPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            otpNamber: '',
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
        const { otpNamber} = this.state;
        if (otpNamber) {
           console.log(otpNamber);
        }
    }

    render() {
        
        const { otpNamber,submitted } = this.state;
        return (
            <div className="login-main">
            <div className="login-sub">
                <h2 className="text-center">Otp Namber</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !otpNamber ? ' has-error' : '')}>
                        <label htmlFor="otpNamber">Otp Namber</label>
                        <input type="text" className="form-control" name="otpNamber" value={otpNamber} onChange={this.handleChange} />
                        {submitted && !otpNamber &&
                            <div className="help-block">otp Namber is required</div>
                        }
                    </div>
                    <div className="form-group">
                    <button className="my-btn color-blue register-btn">Conform</button>
                    <button className="my-btn color-red discard-btn reg4" type="reset" onClick={this.resetform}>Resend</button>
                       
                    </div>
                </form>
            </div>
            </div>
        );
    }
}


export default OtpPage ;
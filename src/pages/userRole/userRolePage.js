import React from 'react';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import Input from "../../Components/Input";

import SelectComponent from '../../Components/SelectComponent'
import TextAreaComponent from "../../Components/TextAreaComponent";
const options = [
    { label: 'Thing 1', value: 1},
    { label: 'Thing 2', value: 2},
    { label: 'Thing 3', value: 3},
    { label: 'Thing 4', value: 4},
    { label: 'Thing 5', value: 5},
    { label: 'Thing 6', value: 6},
  ];
  const options1 = [
    { label: 'Thing 1', value: 1},
    { label: 'Thing 2', value: 2},
    { label: 'Thing 3', value: 3},
    { label: 'Thing 4', value: 4},
    { label: 'Thing 5', value: 5},
    { label: 'Thing 6', value: 6},
  ];
  const options2 = [
    { label: 'Thing 1', value: 1},
    { label: 'Thing 2', value: 2},
    { label: 'Thing 3', value: 3},
    { label: 'Thing 4', value: 4},
    { label: 'Thing 5', value: 5},
    { label: 'Thing 6', value: 6},
  ];
class UserRole extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            adminRole: [],

            errorMsg: '',
        };

    }
    render() {
        const { adminRole, errorMsg } = this.state;
        return (
            <div>
                <div className="user-wrapper">
                    <div className="user-inner">
                        <div className="bar blue-gradient">
                            <h4>User Roles</h4>
                        </div>
                        <Input rowWidth="col-md-6"
                            type="text"
                            name="first_name"
                            onChange={this.changeHandler}
                            placeholder="First Name"
                            onBlur={this.blurHandlerFirst_name}
                            value={this.state.first_name}
                        ></Input>
                        <Input rowWidth="col-md-6"
                            type="text"
                            name="Last_Name"
                            onChange={this.changeHandler}
                            placeholder="Last Name"
                            onBlur={this.blurHandlerName}
                        ></Input >
                        <Input rowWidth="col-md-6"
                            type="text"
                            name="UserName"
                            onChange={this.changeHandler}
                            placeholder="User Name"
                            onBlur={this.blurHandlerfirst_name}
                            value={this.state.first_name}
                        ></Input>
                        <Input rowWidth="col-md-6"
                            type="text"
                            name="Password"
                            onChange={this.changeHandler}
                            placeholder="Password"
                            onBlur={this.blurHandlerPassword}
                        ></Input >
                        <Input rowWidth="col-md-6"
                            type="text"
                            name="Email_address"
                            onChange={this.changeHandler}
                            placeholder="Email Address"
                            onBlur={this.blurHandlerfirst_name}
                            value={this.state.EmailAddress}
                        ></Input>
                        <Input rowWidth="col-md-6"
                            type="text"
                            name="Company"
                            onChange={this.changeHandler}
                            placeholder="Company"
                            onBlur={this.blurHandleCompany}
                        ></Input >
                        <div class="clearfix"></div>
                        <div className="bar blue-gradient">
                            <h4>User Role</h4>
                        </div>
                        <div className="col-md-6">
                            <TextAreaComponent
                                value="Contact1"
                                placeholder="Contact1"
                                name="Contact"
                                onChange={this.onChange}
                            ></TextAreaComponent>
                        </div>
                        <div className="col-md-6">
                            <TextAreaComponent rowWidth="col-md-6"
                                value="Contact1"
                                placeholder="Contact1"
                                name="Contact"
                                onChange={this.onChange}
                            ></TextAreaComponent>
                        </div>
                        <div class="clearfix"></div>

                        <div className="col-md-6">Admin</div>
                        <div className="col-md-6">
                           <div className="ReactMultiSelectDiv"> <ReactMultiSelectCheckboxes className="ReactMultiSelect" options={options} /></div>
                            </div>
                            <div className="col-md-6">Vendor</div>
                        <div className="col-md-6">
                           <div className="ReactMultiSelectDiv"> <ReactMultiSelectCheckboxes className="ReactMultiSelect" options={options1} /></div>
                            </div>
                            <div className="col-md-6">Procurment</div>
                        <div className="col-md-6">
                           <div className="ReactMultiSelectDiv"> <ReactMultiSelectCheckboxes className="ReactMultiSelect" options={options2} /></div>
                            </div>
                        
                        <div className="col-md-12 reg3">
                            <button className="my-btn color-blue register-btn" type="button" onClick={this.register} >  User Register   </button>
                            <button className="my-btn color-red discard-btn reg4" type="reset" onClick={this.resetform}>clear</button>
                        </div>
                    </div>

                </div></div>

        );
    }
}




export default UserRole;
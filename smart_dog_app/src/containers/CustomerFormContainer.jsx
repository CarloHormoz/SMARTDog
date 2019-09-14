import React, {Component} from 'react';
import Input from '../components/Input';
import PropTypes from 'prop-types';

class CustomerFormContainer extends Component {

    render() {
        // Grab the user values passed in from 
        // the parent container (SignupForm)
        // That way value will update when the state
        // of the parent is updated, like with clear
        // and any future functions.
        const {values} = this.props;
        return (
            <div className='col-md-6'>
                <Input
                    type={'text'}
                    title={'First Name'}
                    name={'firstName'}
                    value={values.firstName}
                    placeholder={''}
                    // Pass the parent handleInputChange method
                    // to update parent state anytime fields
                    // are changed.
                    handlechange={this.props.handleInputChange}             
                />
                <Input
                    type={'text'}
                    title={'Last Name'}
                    name={'lastName'}
                    value={values.lastName}
                    placeholder={''}
                    handlechange={this.props.handleInputChange}
                />
                <Input
                    type={'email'}
                    title={'Email'}
                    name={'email'}
                    value={values.email}
                    placeholder={''}
                    handlechange={this.props.handleInputChange}
                />
            </div>
        )
    }

}

export default CustomerFormContainer;
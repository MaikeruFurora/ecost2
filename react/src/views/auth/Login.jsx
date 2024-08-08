import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import Button from '../component/Button';
import Input from '../component/Input';
import AuthenticateHooks from '../auth/hooks/AuthenticationHooks';
const form = 'LoginForm';
const Login = (props) => {
    const { handleSubmit } = props;
    const { submit } = AuthenticateHooks();

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Login to your account</h2>
                <form onSubmit={handleSubmit(submit)}>
                    <Field
                        name="username"
                        label="Username"
                        component={Input}
                        type="text"
                        className="input-bordered"
                        placeholder="Username"
                    />
                    <Field
                        name="password"
                        label="Password"
                        component={Input}
                        type="password"
                        className="input-bordered"
                        placeholder="Password"
                    />
                    <div className="form-control mt-6">
                        <Button
                            type="submit"
                            variant="primary"
                            size="md"
                        >
                            Login
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const ReduxFormComponent = reduxForm({
    form, // a unique identifier for this form
})(Login);

const mapStateToProps = (state) => ({
    token: state.AuthenticationReducer.token,
});

export default connect(mapStateToProps)(ReduxFormComponent);

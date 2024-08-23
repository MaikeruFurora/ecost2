import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import React from 'react';
import { Typography, Paper, Box } from '@mui/material';
import Button from '@component/Button';
import Input from '@component/Input';
import AuthenticateHooks from '../auth/hooks/AuthenticationHooks';
const formName = 'LoginForm';
const Login = (props) => {
const { handleSubmit } = props;
const { submit } = AuthenticateHooks();

  return (
    <Paper elevation={3} sx={{ width: '100%', maxWidth: 400, padding: 4 }}>
    <Typography component="h1" variant="h6" align="left">
      Login to your account
    </Typography>
    <Box mt={2}>
      <form onSubmit={handleSubmit(submit)}>
        <Field
          name="username"
          label="Username"
          component={Input}
          type="text"
          placeholder="Username"
          fullWidth
        />
        <Field
          name="password"
          label="Password"
          component={Input}
          type="password"
          placeholder="Password"
          fullWidth
        />
        <Button
          type="submit"
          sx={{ marginTop: '1rem', width: '100%' }}
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </form>
    </Box>
  </Paper>
  );
};

const ReduxFormComponent = reduxForm({
  form: formName, // a unique identifier for this form
})(Login);

const mapStateToProps = (state) => ({
  token: state.AuthenticationReducer.token,
});

export default connect(mapStateToProps)(ReduxFormComponent);

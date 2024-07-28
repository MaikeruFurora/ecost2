import Button from '../component/Button';
import Input from '../component/Input';
import useLogin from './hooks/useLogin';
const Login = () => {
    const {
        usernameRef,
        passwordRef,
        error,
        handleSubmit
    } = useLogin();

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Login to your account</h2>
                <form>
                    <Input ref={usernameRef} name="username"placeholder="Username" />
                    <Input ref={passwordRef} name="password" type="password" placeholder="Username" />
                    <div className="form-control mt-6">
                    <Button
                        onClick={handleSubmit}
                        type="submit"
                        variant="primary"
                        size="md"
                        > Login </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;

const Login = () => {
    return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Login</h2>
                <form>
                    <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Username</span>
                    </label>
                    <input type="text" placeholder="Username" className="input input-bordered" />
                    </div>
                    <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
}

export default Login;

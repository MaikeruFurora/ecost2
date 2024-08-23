const NotFound = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
            <h1 className="text-9xl font-bold text-gray-400">404</h1>
            <p className="text-2xl mt-4">Page Not Found</p>
            <p className="mt-4">Sorry, the page you are looking for does not exist.</p>
            <button className="btn btn-primary mt-6" onClick={() => window.history.back()}>
                Go Back
            </button>
            </div>
        </div>
    );
}

export default NotFound;

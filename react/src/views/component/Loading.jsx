import { useSelector } from "react-redux"

const Loading = () => {
    // const { loading } = useSelector(state => state.Product.loading)
    return (
        
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="flex flex-col items-center">
            <span className="loading loading-spinner loading-lg"></span>
                <p className="mt-4 text-white">Loading...</p>
            </div>
        </div>
    );
}

export default Loading
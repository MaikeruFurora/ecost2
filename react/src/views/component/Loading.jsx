import * as React from "react";
import { useSelector } from "react-redux"
const Loading = () => {
    const loading = useSelector((state) => state.LoadingReducer.loading);
    return (
       ( loading &&
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="flex flex-col items-center">
                    <span className="loading loading-spinner loading-lg"></span>
                    <p className="mt-4 text-white">Loading...</p>
                </div>
            </div>
        </div>
        )
    );
}

export default Loading
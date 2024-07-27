const PartialList = () => {
    return (
        <div className="card bg-base-100 shadow-md">
        <div className="card-body px-0 py-2">
            <div className="flex flex-col sm:flex-row justify-between mx-3">
                <div className="form-control w-full sm:w-1/6 mb-2 sm:mb-0">
                    <input type="text" placeholder="Type here" className="input input-bordered input-md w-full" />
                </div>
                <div className="join flex-wrap sm:flex-nowrap">
                    <button className="join-item btn">1</button>
                    <button className="join-item btn btn-active">2</button>
                    <button className="join-item btn">3</button>
                    <button className="join-item btn">4</button>
                </div>
            </div>
            <div className="overflow-x-auto mt-4">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>ITEM CODE</th>
                            <th>DESCRIPTION</th>
                            <th>BRAND</th>
                            <th>WAREHOUSE</th>
                            <th>TAXCODE</th>
                            <th>COMPANY TYPE</th>
                            <th>PICKUP PRICE</th>
                            <th>VOLUME PRICE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[...Array(10)].map((_, i) => (
                            <tr key={i}>
                                <th>{i+1}</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                                <td>
                                    <input type="text" value={1200*i+10} placeholder="Type here" className="input input-transparent w-full input-sm max-w-xs" />
                                </td>
                                <td>
                                    <input type="text" value={1200*i+10} placeholder="Type here" className="input input-transparent w-full input-sm max-w-xs" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    
    )
}

export default PartialList;



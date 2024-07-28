const PartialList = () => {
    return (
        <div className="card bg-base-100 shadow-md m-4">
        <div className="card-body p-4">
          <div className="flex flex-col sm:flex-row justify-between mb-4">
            <div className="form-control w-full sm:w-1/6 mb-2 sm:mb-0">
              <input type="text" placeholder="Type here" className="input input-bordered w-full" />
            </div>
            <div className="flex flex-wrap sm:flex-nowrap space-x-2">
              <button className="btn">1</button>
              <button className="btn btn-active">2</button>
              <button className="btn">3</button>
              <button className="btn">4</button>
            </div>
          </div>
          <div className="overflow-x-auto">
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
                    <td>{i + 1}</td>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                    <td>
                      <input
                        type="text"
                        value={1200 * i + 10}
                        placeholder="Type here"
                        className="input input-transparent w-full input-sm"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={1200 * i + 10}
                        placeholder="Type here"
                        className="input input-transparent w-full input-sm"
                      />
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



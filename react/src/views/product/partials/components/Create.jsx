import { useRef,lazy,useState } from 'react'
import Input from '../../../component/Input'
import Modal from '../../../component/Modal'
import ProductList from './ProductList'
import CreateProductHooks  from '../hooks/CreateProductHooks'

const Create = () => {
    const {warehouseList}=CreateProductHooks();
    
    return (
        <div className='p-4'>
         <div className="flex justify-end">
                <Modal buttonName="Search Product from SAP" size="max-w-12xl" title="Search Product" click={()=>{document.getElementById('my_modal').showModal()}}>
                    <ProductList/>
                </Modal>
            </div>
            <table className="table mt-5 shadow-md">
                <thead className='bg-gray-200'>
                    <tr>
                        <th>PRODUCT CODE</th>
                        <th>PRODUCT DESCRIPTION</th>
                        <th>BRAND</th>
                        <th>SKU</th>
                        <th>GROUP</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='text-center' colSpan={5}>PLEASE SELECT PRODUCT FROM SAP</td>
                    </tr>
                </tbody>
            </table>
            <div className="mt-4 grid grid-cols-2 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="lg:col-span-1 md:col-span-1 sm:col-span-1">
                    <div className="bg-white border rounded-lg overflow-hidden">
                        <div className="bg-gray-200 p-4 border-b">
                            <h6 className="text-sm font-semibold">Warehouses</h6>
                        </div>
                        <div className="p-4">
                        <div className="grid grid-cols-2 gap-4">
                                {warehouseList.map((warehouse) => (
                                <label key="{warehouse.id}"  className="flex items-center space-x-2 w-1/2">
                                    <input
                                    type="checkbox"
                                    name="warehouse_id"
                                    value={warehouse.id}
                                    className="checkbox checkbox-primary"
                                    />
                                    <span>{warehouse.name}</span>
                                </label>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-2 md:col-span-2 sm:col-span-1">
                    <div className="bg-white border rounded-lg overflow-hidden">
                        <div className="bg-gray-200 p-4 border-b">
                            <h2 className="text-sm font-semibold">Price Configuration</h2>
                        </div>
                        <div className="p-4">
                            <div className="grid grid-cols-3 gap-4">
                                <div className="lg:col-span-1 md:col-span-3 sm:col-span-1">
                                    <Input label="Pickup Price" name="pickup_price" className="input-bordered " type="number" placeholder="Pickup Price" />
                                </div>
                                <div className="lg:col-span-1 md:col-span-3 sm:col-span-1">
                                    <Input label="Volume Price" name="volume_price" className="input-bordered " type="number" placeholder="Volume Price" />
                                </div>
                                <div className="lg:col-span-1 md:col-span-3 sm:col-span-1">
                                    <Input label="Volume Price" name="retail_price" className="input-bordered " type="number" placeholder="Retail Price" />
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="lg:col-span-1 md:col-span-3 sm:col-span-1">
                                    <Input label="Pickup Price" name="pickup_price" className="input-bordered " type="text" placeholder="Pickup Price" />
                                </div>
                                <div className="lg:col-span-1 md:col-span-3 sm:col-span-1">
                                    <Input label="Volume Price" name="volume_price" className="input-bordered " type="text" placeholder="Volume Price" />
                                </div>
                                <div className="lg:col-span-1 md:col-span-3 sm:col-span-1">
                                    <Input label="Volume Price" name="retail_price" className="input-bordered " type="text" placeholder="Retail Price" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        
        </div>
    )
}

export default Create
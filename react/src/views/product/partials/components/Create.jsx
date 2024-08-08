import { useRef,lazy,useState } from 'react'
import Input from '../../../component/Input'
import Modal from '../../../component/Modal'
import ProductList from './ProductList'
import CreateProductHooks  from '../hooks/CreateProductHooks'
import Select from '../../../component/Select'
import Button from '../../../component/Button'
import CheckBox from '../../../component/CheckBox'
import CloseIcon from '@mui/icons-material/Close';
import { Field, formValueSelector, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
const form = 'CreateProductForm';
const Create = (props) => {
    const { handleSubmit } = props;
    const { ...ref }=CreateProductHooks(props);
   return (
        <div className='p-4'>
             <Modal buttonName="Search Product from SAP" size="max-w-12xl" title="Search Product" click={()=>{document.getElementById('my_modal').showModal()}}>
                <ProductList selectedProduct={ref.selectedProduct}/>
            </Modal>
            <form onSubmit={handleSubmit(ref.submit)}>
            <div className='flex justify-end'>
                <Button type="submit">Submit</Button>
            </div>
            <table className="table mt-5">
                <thead className='bg-gray-200'>
                    <tr>
                        <th>PRODUCT CODE</th>
                        <th>PRODUCT DESCRIPTION</th>
                        <th>BRAND</th>
                        <th>SKU</th>
                        <th>GROUP</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(ref.state.product).length !== 0 ? (
                        <tr>
                            <td>{ref.state.product.code}</td>
                            <td>{ref.state.product.name}</td>
                            <td>{ref.state.product.brand}</td>
                            <td>{ref.state.product.sku}</td>
                            <td>{ref.state.product.branch}</td>
                            <td><Button className=' btn-ghost' onClick={ref.removeProduct}><CloseIcon/></Button></td>
                        </tr>
                    ) : (
                        <tr>
                            <td className='text-center' colSpan={6}>PLEASE SELECT PRODUCT FROM SAP</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className="mt-4 grid grid-cols-2 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="lg:col-span-1 md:col-span-1 sm:col-span-1">
                    <div className="bg-white  rounded-lg overflow-hidden">
                        <div className="bg-gray-200 p-4 border-b">
                            <h6 className="text-sm">WAREHOUSES</h6>
                        </div>
                        <div className="p-4">
                        {ref.state.filteredWarehouses.length > 0 ? (
                            <div className="grid grid-cols-3 gap-4 px-5">
                                {ref.state.filteredWarehouses.map((warehouse) => (
                                     <Field 
                                        label={warehouse.name}
                                        component={CheckBox}
                                        key={warehouse.id}
                                        value={warehouse.id}
                                        name="warehouses"
                                        onChangeCheck={(e) => {ref.selectedWarehouses(warehouse.id)}}
                                    />
                                ))}
                            </div>
                        ) : (
                            <p className="text-center">Please Select Product</p>
                        )}
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-2 md:col-span-2 sm:col-span-1">
                    <div className="bg-white  rounded-lg overflow-hidden">
                        <div className="bg-gray-200 p-4 border-b">
                            <h2 className="text-sm">PRICE CONFIGURATION</h2>
                        </div>
                        <div className="p-4">
                            <div className="grid grid-cols-3 gap-4">
                                <div className="lg:col-span-1 md:col-span-3 sm:col-span-1">
                                    <Field 
                                        label="Pickup Price"
                                        component={Input}
                                        type="number"
                                        name="pickup_price"
                                        className="input-bordered "
                                        placeholder="Pickup Price"
                                    />
                                </div>
                                <div className="lg:col-span-1 md:col-span-3 sm:col-span-1">
                                <   Field 
                                        label="Volume Price"
                                        component={Input}
                                        type="number"
                                        name="volume_price"
                                        className="input-bordered "
                                        placeholder="Volume Price"
                                    />
                                </div>
                                <div className="lg:col-span-1 md:col-span-3 sm:col-span-1">
                                    <Field 
                                        label="Retail Price"
                                        component={Input}
                                        type="number"
                                        name="retail_price"
                                        className="input-bordered "
                                        placeholder="Retail Price"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="lg:col-span-1 md:col-span-3 sm:col-span-1">
                                    <Field 
                                        label="Tax Code" 
                                        component={Select}
                                        options={ref.taxCodeList} 
                                        name="tax_code"
                                    />
                                </div>
                                <div className="lg:col-span-1 md:col-span-3 sm:col-span-1">
                                    <Field 
                                        label="Company Supplier"
                                        options={ref.companyList}
                                        component={Select}
                                        name="company"
                                    />
                                </div>
                                <div className="lg:col-span-1 md:col-span-3 sm:col-span-1">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </form>
        </div>
    )
}

const ReduxFormComponent = reduxForm({
    form: form, // a unique identifier for this form
    onSubmit: ''
})(Create);

const selector = formValueSelector(form);
export default connect((state) => {
//   const productList = state.ReferenceReducer.productList;
  const warehouses = selector(state, "warehouses");
  return { warehouses };
}, {})(ReduxFormComponent);
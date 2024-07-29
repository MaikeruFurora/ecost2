import { useRef } from 'react'
import Input from '../../component/Input'
import Button from '../../component/Button'
import SearchIcon from '@mui/icons-material/Search';
import Modal from '../../component/Modal'
import SearchProductModal from './SearchProductModal';
const Create = () => {

    const codeRef   = useRef()
    const nameRef   = useRef()
    const skuRef    = useRef()
    const groupRef  = useRef()

    return (
    <div className="card bg-base-100 shadow-md m-4">
        <div className="card-body p-4">
           <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
              <div>
                <Modal buttonName="Search Product from SAP" size="max-w-12xl" title="Search Product" click={()=>{ document.getElementById('my_modal').showModal()}}>
                    <SearchProductModal/>
                </Modal>
                <Input ref={codeRef} readOnly="readonly" name="Item Code" className="input input-bordered w-full" placeholder="Item Code"/>
                <Input ref={nameRef} readOnly="readonly" name="Item Description" className="input input-bordered w-full" placeholder="Item Description"/>
                <Input ref={skuRef} readOnly="readonly" name="SKU" className="input input-bordered w-full" placeholder="SKU | Weight"/>
                <Input ref={skuRef} readOnly="readonly" name="brand" className="input input-bordered w-full" placeholder="Brand"/>
                <Input ref={groupRef} readOnly="readonly" name="group" className="input input-bordered w-full" placeholder="Group"/>
              </div>
              <div>
              </div>
           </div>
        </div>
    </div>
    )
}

export default Create
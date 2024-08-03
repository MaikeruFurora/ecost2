import { useRef,lazy} from 'react'
import Input from '../../../component/Input'
import Modal from '../../../component/Modal'
import ProductList from './ProductList'
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
                    <ProductList/>
                </Modal>
                
                
                
               
                
                <div class="bg-base-100 p-4 rounded-box">
                    <div class="block px-4 py-2 mb-2 text-white bg-primary rounded-lg hover:bg-primary-focus active:bg-primary-focus disabled:bg-gray-400" aria-current="true">
                        <Input ref={codeRef} readOnly="readonly" name="Item Code" className="input w-full" placeholder="Item Code"/>
                    </div>
                    <div class="block px-4 py-2 mb-2 text-gray-700 hover:bg-gray-200 rounded-lg">
                        <Input ref={nameRef} readOnly="readonly" name="Item Description" className="input w-full" placeholder="Item Description"/>
                    </div>
                    <div class="block px-4 py-2 mb-2 text-gray-700 hover:bg-gray-200 rounded-lg">
                        <Input ref={skuRef} readOnly="readonly" name="SKU" className="input w-full" placeholder="SKU | Weight"/>
                    </div>
                    <div class="block px-4 py-2 mb-2 text-gray-700 hover:bg-gray-200 rounded-lg">
                        <Input ref={skuRef} readOnly="readonly" name="brand" className="input w-full" placeholder="Brand"/>
                    </div>
                    <div class="block px-4 py-2 mb-2 text-gray-500 cursor-not-allowed" tabindex="-1" aria-disabled="true">
                        <Input ref={groupRef} readOnly="readonly" name="group" className="input w-full" placeholder="Group"/>
                    </div>
                </div>

              </div>
              <div>
              </div>
           </div>
        </div>
    </div>
    )
}

export default Create
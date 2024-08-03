import ListProduct from "./partials/components/List";
import Createproduct from "./partials/components/Create";
import { useRef,useState } from 'react';
const Product = () => {
  const [value, setValue] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  
    return (
      <div role="tablist" className="tabs tabs-lifted ">
        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Product" onChange={handleChange} defaultChecked={true} />
          <div role="tabpanel" className="tab-content bg-base-400 border-base-300 rounded-box p-3">
            <ListProduct/>
          </div>
      
        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Create"  onChange={handleChange}/>
          <div role="tabpanel" className="tab-content bg-base-400 border-base-300 rounded-box p-3">
            <Createproduct/>
          </div>
      </div>
    )
}

export default Product;



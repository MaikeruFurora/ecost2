import PartialList from "./partials/list";

const Product = () => {
    return (
      <div role="tablist" className="tabs tabs-lifted ">
        <input type="radio" name="my_tabs_2" role="tab" className="tab" checked="checked" aria-label="Product List" />
          <div role="tabpanel" className="tab-content bg-base-400 border-base-300 rounded-box p-3">
              <PartialList/>
          </div>
      
        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Create Product"  />
          <div role="tabpanel" className="tab-content bg-base-400 border-base-300 rounded-box p-3">
            Tab content 2
          </div>
      </div>
    )
}

export default Product;



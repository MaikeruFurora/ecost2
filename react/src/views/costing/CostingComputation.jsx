import { 
  getDataNoParam
} from '../../views/services/ApiServices';
const Costing = () => {
  const res = getDataNoParam('warehouses/getAllWwarehouses');
  console.log(res);
  
    return (
       <div>
         <button className="btn" >open modal</button>
    
       </div>
        )
}
export default Costing



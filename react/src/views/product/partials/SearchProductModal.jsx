import Input from "../../component/Input"
import Table from "../../component/Table"
import { useCallback, useEffect, useState } from "react";
import { getData } from "../../services/ApiServices";
import Loading from "../../component/Loading";
import Debounce from "../../utils/useDebounce";
const SearchProductModal = () => {

    const [products, setProducts] = useState([]);
    const [pagination, setPagination] = useState({});
    const [query, setQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Function to fetch products
    const fetchProducts = useCallback(
        Debounce(async (page = 1, query = '') => {
            async (page = 1, query = '') => {
                setLoading(true);
                setError(null);
                const payload = {  page, query
                }
                try {
                    const response = await getData('/products/searchProductFromSAP',payload);
                    setProducts(response.data);
                    setPagination({
                        currentPage: response.current_page,
                        total: response.total,
                        perPage: response.per_page,
                        lastPage: response.last_page,
                        firstPageUrl: response.first_page_url,
                        nextPageUrl: response.next_page_url,
                        prevPageUrl: response.prev_page_url
                    });
                } catch (error) {
                    setError('Failed to fetch products. Please try again.');
                    console.error('Error fetching products:', error);
                } finally {
                    setLoading(false);
                }
            }
        },500),
        []
    );

    // Initial fetch and on query or page change
    useEffect(() => {
        if (query) {
            fetchProducts(query);
        } else {
            setProducts([]); // Clear results if query is empty
        }
    }, [query, fetchProducts]);
    // Handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Handle search input change
    const handleSearchChange = (event) => {
        setQuery(event.target.value);
        setCurrentPage(1); // Reset to first page on new search
    };
    
    const columns = [
        {id: 'itemcode', description: 'ITEM CODE',align:'left'},
        {id: 'itemname', description: 'ITEM DECRIPTION',align:'left'},
        {id: 'sku', description: 'SKU',align:'left'},
        {id: 'brand', description: 'BRAND',align:'left'},
        {id: 'branch', description: 'GROUP',align:'left'},
    ]
   
    return (
    <>  
    {loading && <Loading />}
        <div className="flex flex-col sm:flex-row justify-between mb-4">
            <div className="form-control w-full sm:w-1/3 mb-2 sm:mb-0">
                <input
                    className="input input-bordered w-full"
                    type="text" 
                    value={query} 
                    onChange={handleSearchChange} 
                    placeholder="Search products..." />
            </div>
            <div className="flex flex-wrap sm:flex-nowrap space-x-2">
            <div>
                {pagination.prevPageUrl && <button className="btn btn-primary mx-1" onClick={() => handlePageChange(currentPage - 1)}>Previous</button>}
                {pagination.nextPageUrl && <button className="btn btn-primary mx-1" onClick={() => handlePageChange(currentPage + 1)}>Next</button>}
            </div>
            </div>
        </div>
        <Table 
        columns={columns} 
        dataList={products} 
        actionshow={false}
        // subAction2Show={true}
        // action={(row) => {
        //     return (
        //         <button onClick={() => console.log(row)}>Test1</button>
        //     )}
        // }
       />
    </>
    )
}

export default SearchProductModal
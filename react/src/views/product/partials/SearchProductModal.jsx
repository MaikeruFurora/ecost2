import React, { useEffect, useState, useCallback } from 'react';
import Input from '../../component/Input';
import Table from '../../component/Table';
import Loading from '../../component/Loading';
import { getData } from '../../services/ApiServices';
import AddIcon from '@mui/icons-material/Add';
import _ from 'lodash';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
const SearchProductModal = () => {
    const [products, setProducts] = useState([]);
    const [pagination, setPagination] = useState({});
    const [query, setQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Memoized debounced fetch function
    const fetchProducts = useCallback(
        _.debounce(async (page = 1, query = '') => {
            setLoading(true);
            setError(null);
            try {
                const response = await getData('/products/searchProductFromSAP', { page, query });
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
        }, 1000), // Debounce delay
        [] // Dependencies array
    );

    useEffect(() => {
        fetchProducts(currentPage, query);
    }, [currentPage, query, fetchProducts]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleSearchChange = (event) => {
        setQuery(event.target.value);
        setCurrentPage(1); // Reset to first page on new search
    };

    const columns = [
        { id: 'itemcode', description: 'ITEM CODE', align: 'left' },
        { id: 'itemname', description: 'ITEM DESCRIPTION', align: 'left' },
        { id: 'sku', description: 'SKU', align: 'left' },
        { id: 'brand', description: 'BRAND', align: 'left' },
        { id: 'branch', description: 'BRANCH', align: 'left' },
    ];

    return (
        <>
            {loading && <Loading />}
            {error && <p className="text-red-500">{error}</p>}
            <div className="flex flex-col sm:flex-row justify-between mb-4">
                <div className="form-control w-full sm:w-1/3 mb-2 sm:mb-0">
                    <input
                        className="input input-bordered w-full"
                        type="text"
                        value={query}
                        onChange={handleSearchChange}
                        placeholder="Search products..."
                    />
                </div>
                <div className=" flex flex-wrap sm:flex-nowrap space-x-2">
                        {pagination.prevPageUrl && (
                            <button
                                className="btn btn-primary btn-link mx-1"
                                onClick={() => handlePageChange(currentPage - 1)}
                            > <NavigateBeforeIcon/> Previous </button>
                        )}
                        {pagination.nextPageUrl && (
                            <button
                                className="btn btn-primary btn-link mx-1"
                                onClick={() => handlePageChange(currentPage + 1)}
                            > Next <NavigateNextIcon/> </button>
                        )}
                    </div>
                 </div>
            <Table
                columns={columns}
                dataList={products}
                actionshow={true}
                action={(row) => {
                    return (
                        <button className='btn btn-default btn-sm m-0' style={{fontSize:'10px'}} onClick={() => console.log(row)}><AddIcon/></button>
                    )}
                }
            />
        </>
    );
};

export default SearchProductModal;

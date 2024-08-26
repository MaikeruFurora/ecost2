import {
    getProductList
} from '../actions/ProductAction'
import React,{useState} from "react";
import { useSearchParams } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
const ProductHooks = (props) =>{
    const [searchParams, setSearchParams] = useSearchParams();
    const [currentPage, setCurrentPage] = useState(parseInt(searchParams.get("page")) || 1);
    const search          = searchParams.get("query") || "";
    const dispatch        = useDispatch();
    const dataList        = useSelector((state) => state.ProductReducer.dataList);
    const dataListCount   = useSelector((state) => state.ProductReducer.dataListCount);
    const refresh         = useSelector((state) => state.ProductReducer.refresh);
    const prevPageUrl     = useSelector((state) => state.ProductReducer.prevPageUrl);
    const nextPageUrl     = useSelector((state) => state.ProductReducer.nextPageUrl);
    const [open, setOpen] = useState(false);
    const [product, setProduct] = useState({});
    const getListParam = () => ({
        page:  currentPage,
        query: search,
    });

    const getProductLists = async () => {
        try {
            let filter = getListParam();
            await dispatch(getProductList(filter));
        } catch (error) {
            console.error("Failed to fetch products", error);
        }
    };

    React.useEffect(() => {
        getProductLists();
    }, [currentPage, search, refresh]);

    const onPageChange = (page) => {
        setCurrentPage(page);
        setSearchParams({ query: search, page: page });
    };

    const onSearchChange = (event) => {
        const search = event.target.value;
        setSearchParams({ query: search, page: "1" });
        setCurrentPage(1);
    };

    const columns = [
        { id: 'code', description: 'ITEM CODE', align: 'left' },
        { id: 'name', description: 'ITEM DESCRIPTION', align: 'left' },
        { id: 'sku', description: 'SKU', align: 'left' },
        { id: 'brand', description: 'BRAND', align: 'left' },
        { id: 'group', description: 'GROUP', align: 'left' },
    ];


    const handleOpen = (data) => {
        setOpen(true);
        setProduct(data);
        // setSearchParams({});
    };

    const handleClose = () => {
        setOpen(false);
        setProduct({});
        // setSearchParams({ query: search, page: currentPage });
    };

    return {
        open,
        dataList,
        columns,
        search,
        refresh,
        prevPageUrl,
        nextPageUrl,
        currentPage,
        dataListCount,
        product,
        handleOpen,
        handleClose,
        onPageChange,
        onSearchChange,
    }
}

export default ProductHooks
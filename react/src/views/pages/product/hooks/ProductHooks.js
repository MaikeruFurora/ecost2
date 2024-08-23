import {
    getProductList
} from '../actions/ProductAction'
import React,{useState} from "react";
import { useSearchParams } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
const ProductHooks = (props) =>{
    const [searchParams, setSearchParams] = useSearchParams();
    const [currentPage, setCurrentPage] = useState(parseInt(searchParams.get("p")) || 1);
    const search          = searchParams.get("q") || "";
    const dispatch        = useDispatch();
    const dataList        = useSelector((state) => state.ProductReducer.dataList);
    const dataListCount   = useSelector((state) => state.ProductReducer.dataListCount);
    const refresh         = useSelector((state) => state.ProductReducer.refresh);
    const prevPageUrl     = useSelector((state) => state.ProductReducer.prevPageUrl);
    const nextPageUrl     = useSelector((state) => state.ProductReducer.nextPageUrl);
    const [open, setOpen] = useState(false);
    const [product, setProduct] = useState({});
    const getListParam = () => ({
        p: currentPage,
        q: search,
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
        setSearchParams({ q: search, p: page });
    };

    const onSearchChange = (event) => {
        const search = event.target.value;
        setSearchParams({ q: search, p: "1" });
        setCurrentPage(1);
    };

    const columns = [
        { id: 'code', description: 'ITEM CODE', align: 'left' },
        { id: 'name', description: 'ITEM DESCRIPTION', align: 'left' },
        { id: 'sku', description: 'SKU', align: 'left' },
        { id: 'brand', description: 'BRAND', align: 'left' },
        { id: 'form_name', description: 'FORM', align: 'left' },
        { id: 'tax_code_name', description: 'TAX CODE', align: 'left' },
        { id: 'company_name', description: 'COMPANY', align: 'left' },
        { id: 'warehouse_name', description: 'WAREHOUSE', align: 'left' },
        { id: 'pickup_price', description: 'PICKUP', align: 'left' },
        { id: 'volume_price', description: 'VOLUME', align: 'left' },
    ];


    const handleOpen = (data) => {
        setOpen(true);
        setProduct(data);
    };

    const handleClose = () => {
        setOpen(false);
        setProduct({});
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
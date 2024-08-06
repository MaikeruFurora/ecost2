import {
    getProductFromSAP
} from '../actions/SearchProductFromSAPAction'
import React,{useState} from "react";
import { useSearchParams } from 'react-router-dom'
import Constants from '../../../../redux/reducers/Constants';
import { useSelector,useDispatch } from 'react-redux';
const searchProductFromSAPHooks = (props) => {
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const [currentPage, setCurrentPage] = useState(parseInt(searchParams.get("p")) || 1);
    const search = searchParams.get("q") || "";

    const dataList = useSelector((state) => state.ProductReducer.dataList);
    const refresh = useSelector((state) => state.ProductReducer.refresh);
    const prevPageUrl = useSelector((state) => state.ProductReducer.prevPageUrl);
    const nextPageUrl = useSelector((state) => state.ProductReducer.nextPageUrl);

    const getListParam = () => ({
        p: currentPage,
        q: search,
    });

    const getProductFromSAPList = async () => {
        try {
            const filter = getListParam();
            await dispatch(getProductFromSAP(filter));
        } catch (error) {
            console.error("Failed to fetch products", error);
        }
    };

    React.useEffect(() => {
        getProductFromSAPList();
    }, [currentPage, search]);

    const onPageChange = (page) => {
        setCurrentPage(page);
        setSearchParams({ ...searchParams, p: page });
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
        { id: 'branch', description: 'BRANCH', align: 'left' },
    ];

    return {
        dataList,
        columns,
        search,
        refresh,
        prevPageUrl,
        nextPageUrl,
        currentPage,
        onPageChange,
        onSearchChange,
    };
};

export default searchProductFromSAPHooks
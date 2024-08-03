import {
    getProductFromSAP
} from '../actions/SearchProductFromSAPAction'
import React from "react";
import { useSearchParams } from 'react-router-dom'
import { useCallback, useEffect, useState } from 'react';
import Constants from '../../../../redux/reducers/Constants';
import { useSelector,useDispatch } from 'react-redux';
const searchProductFromSAPHooks = (props) => {
    const dispatch = useDispatch();
    const [searchParams, setSearchParams]   = useSearchParams();
    const page          = searchParams.get("p") != undefined ? searchParams.get("p") : 1;
    const search        = searchParams.get("q") != null ? String(searchParams.get("q")) : "";
    const data          = useSelector((state)    => state.ProductReducer.data)
    const [state, setState]         = useState({
        selectedData:{},
        
        
    })
    
    let getListParam = () => {
        const data = {
          p: page == null ? 1 : page,
          q: search,
        };
        return data;
      };

    const getProductFromSAPList = async () => {
        try {
            let filter = getListParam()
           await dispatch(getProductFromSAP(filter));
        } catch (error) {
            console.log(error);
        }
    };

    React.useEffect(() => {
        getProductFromSAPList();
    }, [page, search]);
    const onPageChange = (page) => {
        setCurrentPage(page);
    };

    const onSearchChange = (event) => {
        const search = event.target.value;
        setSearchParams({
            q: search,
            p: "1",
        });
    };

    const onGetSelectedData = (data) => {
        let selectedProduct = {
            code: data.itemcode,
            name: data.itemname,
            sku: data.sku,
            brand: data.brand,
            branch: data.branch,
            group: data.group,
        }

        dispatch({
            type: Constants.ACTION_PRODUCT,
            payload: {
                selectedData: selectedProduct
            }
        })

    };


    const columns = [
        { id: 'itemcode', description: 'ITEM CODE', align: 'left' },
        { id: 'itemname', description: 'ITEM DESCRIPTION', align: 'left' },
        { id: 'sku', description: 'SKU', align: 'left' },
        { id: 'brand', description: 'BRAND', align: 'left' },
        { id: 'branch', description: 'BRANCH', align: 'left' },
    ];


    return {
        data,
        columns,
        page,
        search,
        onPageChange,
        onSearchChange,
        onGetSelectedData,
    }
}

export default searchProductFromSAPHooks
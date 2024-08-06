<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    public function searchProductFromSAP(Request $request){
        
        $query = $request->get('q'); // Default to empty string if 'query' is not provided
        $page = $request->get('p'); // Default to empty string if 'query' is not provided

        // Perform search on the 'vw_products' view
        $results = DB::table('vw_products')
            ->where('itemname', 'LIKE', "%{$query}%")
            ->where('itemname', 'LIKE', "%{$query}%")
            ->paginate(10, ['*'], 'page', $page);
        
        // Return the paginated results in JSON format
       $data = array_map(function ($item,$key) {
            return [
                'id' => ++$key,
                'code' => $item->itemcode,
                'name' => $item->itemname,
                'sku' => $item->sku,
                'brand' => $item->brand,
                'branch' => $item->branch,
                'groups' => $item->groups,
            ];
        }, $results->items(), array_keys($results->items()));
        // $data = array_map(function ($item, $key) {
        //     $item->id = $key + 1;
           
        // }, $results->items(), array_keys($results->items()));
       

        return response()->json([
            'current_page'   => $results->currentPage(),
            'dataList'       => $data,
            'first_page_url' => $results->url(1),
            'from'           => $results->firstItem(),
            'last_page'      => $results->lastPage(),
            'last_page_url'  => $results->url($results->lastPage()),
            'next_page_url'  => $results->nextPageUrl(),
            'per_page'       => $results->perPage(),
            'prev_page_url'  => $results->previousPageUrl(),
            'to'             => $results->lastItem(),
            'total'          => $results->total(),
            'links'          => [
                'first' => $results->url(1),
                'last'  => $results->url($results->lastPage()),
                'prev'  => $results->previousPageUrl(),
                'next'  => $results->nextPageUrl(),
            ],
        ]);
        
    }
}

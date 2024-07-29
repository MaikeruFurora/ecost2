<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    public function searchProductFromSAP(Request $request){
        
        $query = $request->get('query'); // Default to empty string if 'query' is not provided
        $page = $request->get('page'); // Default to empty string if 'query' is not provided

        // Perform search on the 'vw_products' view
        $results = DB::table('vw_products')
            ->where('itemname', 'LIKE', "%{$query}%") // Adjust 'itemname' to the column you want to search
            ->paginate(10, ['*'], 'page', $page);
        
        // Return the paginated results in JSON format
       $data = array_map(function ($item,$key) {
            return [
                'id' => ++$key,
                'itemcode' => $item->itemcode,
                'itemname' => $item->itemname,
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
            'data'           => $data,
            'first_page_url' => $results->url(1),
            'from'           => $results->firstItem(),
            'last_page'      => $results->lastPage(),
            'last_page_url'  => $results->url($results->lastPage()),
            'next_page_url'  => $results->nextPageUrl(),
            'per_page'       => $results->perPage(),
            'prev_page_url'  => $results->previousPageUrl(),
            'to'             => $results->lastItem(),
            'total'          => $results->total(),
        ]);
        
    }
}

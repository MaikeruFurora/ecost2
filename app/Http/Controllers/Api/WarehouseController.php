<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Warehouse;
use Illuminate\Support\Facades\Auth;

class WarehouseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query   = $request->get('q');
        $page    = $request->get('p');

        $results = Warehouse::where('name', 'like', '%'.$query.'%')->paginate(10);

         return response()->json([
            'current_page'   => $results->currentPage(),
            'dataList'       => $results->items(),
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

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function getAllWwarehouses(){
        
        return response()->json([
            'dataListCount'=> Warehouse::all()->count(),
            'dataList'     => Warehouse::orderBy('group','asc')->orderBy('name','asc')->get(['id','name','group']),
            // 'dataList'     => [
            //     'manila'   => Warehouse::manilaGroup()->get(['id','name']),
            //     'province' => Warehouse::provinceGroup()->get(['id','name']),
            // ],
        ]);
    }
}

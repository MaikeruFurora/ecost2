<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\DestinationHeaderRequest;
use App\Models\DestinationHeader;
use App\Models\DestinationSub;
use App\Models\Warehouse;
use Illuminate\Http\Request;
use App\Traits\FormatsPaginatedResponse;

class DestinationHeaderController extends Controller
{

    use FormatsPaginatedResponse;

    protected $destinationHeader;
    protected $destinationSub;
    public function __construct() {
        $this->destinationHeader  = new DestinationHeader();
        $this->destinationSub     = new DestinationSub();
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query   = $request->get('q');
        $page    = $request->get('p');

        $results = $this->destinationHeader
                    ->select('destination_headers.*' , 'warehouses.name as warehouse_name', 'trucks.name as truck_name','users.name as created_by_name')
                    ->join('warehouses', 'destination_headers.warehouse_id', '=', 'warehouses.id')
                    ->join('trucks', 'destination_headers.truck_id', '=', 'trucks.id')
                    ->join('users', 'destination_headers.created_by', '=', 'users.id')
                    ->where('destination_headers.name', 'LIKE', "%{$query}%")
                    ->orwhere('trucks.name', 'LIKE', "%{$query}%")
                    ->paginate(10, ['*'], 'page', $page);

         return response()->json($this->formatPaginatedResponse($results));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(DestinationHeaderRequest $request)
    {
        $validatedData = $request->validated();

        $header = $this->destinationHeader->create($validatedData);

        return response()->json([
            'status'  => $header ? 'success' : 'error',
            'message' => $header ? 'Successfully updated' : 'Something went wrong',
        ]);
    
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\DestinationHeader  $destinationHeader
     * @return \Illuminate\Http\Response
     */
    public function show(DestinationHeader $destinationHeader)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\DestinationHeader  $destinationHeader
     * @return \Illuminate\Http\Response
     */
    public function update(DestinationHeaderRequest $request,$id)
    {

        $validatedData = $request->validated();

        $this->destinationHeader->find($id)->update($validatedData);

        return response()->json([
            'status'  => 'success',
            'message' => 'Successfully updated',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\DestinationHeader  $destinationHeader
     * @return \Illuminate\Http\Response
     */
    public function destroy(DestinationHeader $destinationHeader)
    {
        //
    }

    public function getAllDestinationHeaders(Request $request){
        
        return response()->json([
            'dataListCount'=> DestinationHeader::all()->count(),
            'dataList'     => DestinationHeader::orderBy('name','asc')->get(['id','name']),
        ]);

    }

    public function truckingMatrix(Request $request)
    {

        $this->validate($request, [
            'truck_id' => 'required',
        ]);

        $data =   $this->destinationHeader
        ->select('destination_headers.name' , 'warehouses.name as warehouse_name', 'trucks.name as truck_name','destination_subs.name as sub_name','destination_subs.rate')
        ->join('warehouses', 'destination_headers.warehouse_id', '=', 'warehouses.id')
        ->join('trucks', 'destination_headers.truck_id', '=', 'trucks.id')
        ->join('users', 'destination_headers.created_by', '=', 'users.id')
        ->join('destination_subs', 'destination_headers.id', '=', 'destination_subs.destination_header_id')
        ->where('destination_headers.truck_id', $request->truck_id)
        ->groupBy('warehouses.name','trucks.name','destination_headers.name','destination_subs.name','destination_subs.rate')
        ->get();

        $groupedData = [];

        foreach ($data as $item) {
            $warehouseName = $item['warehouse_name'];
        
            // If the warehouse name doesn't exist in the grouped data, initialize it
            if (!isset($groupedData[$warehouseName])) {
                $groupedData[$warehouseName] = [
                    'warehouse_name' => $warehouseName,
                    'data' => []
                ];
            }
        
            // Add the current item to the 'data' array of the warehouse
            $groupedData[$warehouseName]['data'][] = [
                'name' => $item['sub_name'],
                'rate' => $item['rate']
            ];
        }
        
        // If you need an indexed array of grouped data (optional)
        $groupedData = array_values($groupedData);
        
        // Example of output:
        return response()->json([
            'dataList' => $groupedData
        ]);
        
    }

}

<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\DestinationRequest;
use App\Models\Destination;
use App\Models\DestinationSub;
use App\Models\Warehouse;
use Illuminate\Http\Request;
use App\Traits\FormatsPaginatedResponse;

class DestinationController extends Controller
{

    use FormatsPaginatedResponse;

    protected $destination;
    protected $destinationSub;
    public function __construct() {
        $this->destination  = new Destination();
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

        $results = $this->destination
                    ->select('destinations.*' , 'warehouses.name as warehouse_name', 'trucks.name as truck_name','users.name as created_by_name')
                    ->join('warehouses', 'destinations.warehouse_id', '=', 'warehouses.id')
                    ->join('trucks', 'destinations.truck_id', '=', 'trucks.id')
                    ->join('users', 'destinations.created_by', '=', 'users.id')
                    ->where('destinations.name', 'LIKE', "%{$query}%")
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
    public function store(DestinationRequest $request)
    {
        $validatedData = $request->validated();

        $header = $this->destination->create($validatedData);

        return response()->json([
            'status'  => $header ? 'success' : 'error',
            'message' => $header ? 'Successfully updated' : 'Something went wrong',
        ]);
    
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Destination  $destination
     * @return \Illuminate\Http\Response
     */
    public function show(Destination $destination)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Destination  $destination
     * @return \Illuminate\Http\Response
     */
    public function update(DestinationRequest $request,$id)
    {

        $validatedData = $request->validated();

        $this->destination->find($id)->update($validatedData);

        return response()->json([
            'status'  => 'success',
            'message' => 'Successfully updated',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Destination  $destination
     * @return \Illuminate\Http\Response
     */
    public function destroy(Destination $destination)
    {
        //
    }

    public function getAllDestinations(Request $request){
        
        return response()->json([
            'dataListCount'=> Destination::all()->count(),
            'dataList'     => Destination::orderBy('name','asc')->get(['id','name']),
        ]);

    }

    public function truckingMatrix(Request $request)
    {

        $this->validate($request, [
            'truck_id' => 'required',
        ]);
        
        $data = $this->destination
            ->select(
                'destinations.name as destination_name', 
                'warehouses.name as warehouse_name', 
                'trucks.name as truck_name',
                'destination_rates.name as sub_name', 
                'destination_rates.rate'
            )
            ->join('warehouses', 'destinations.warehouse_id', '=', 'warehouses.id')
            ->join('trucks', 'destinations.truck_id', '=', 'trucks.id')
            ->join('users', 'destinations.created_by', '=', 'users.id')
            ->join('destination_rates', 'destinations.id', '=', 'destination_rates.destination_id')
            ->where('destinations.truck_id', $request->truck_id)
            ->get();
        
        $groupedData = [];
        
        foreach ($data as $item) {
            $warehouseName = $item['warehouse_name'];
            $headerName = $item['destination_name'];
        
            // Initialize warehouse level if it doesn't exist
            if (!isset($groupedData[$warehouseName])) {
                $groupedData[$warehouseName] = [
                    'warehouse_name' => $warehouseName,
                    'data' => []
                ];
            }
        
            // Initialize header level within the warehouse if it doesn't exist
            if (!isset($groupedData[$warehouseName]['data'][$headerName])) {
                $groupedData[$warehouseName]['data'][$headerName] = [
                    'header_name' => $headerName,
                    'destination' => []
                ];
            }
        
            // Add the current item to the 'destination' array of the header
            $groupedData[$warehouseName]['data'][$headerName]['destination'][] = [
                'name' => $item['sub_name'],
                'rate' => $item['rate']
            ];
        }
        
        // Convert the associative array to an indexed array (optional)
        foreach ($groupedData as $warehouseName => $warehouseData) {
            $groupedData[$warehouseName]['data'] = array_values($warehouseData['data']);
        }
        
        $groupedData = array_values($groupedData);
        
        // Example of output:
        return response()->json([
            'dataList' => $groupedData
        ]);
           
    }

}

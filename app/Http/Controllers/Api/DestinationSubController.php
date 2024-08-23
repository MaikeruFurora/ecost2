<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\DestinationDetailRequest;
use App\Models\DestinationHeader;
use App\Models\DestinationSub;
use Illuminate\Http\Request;
use App\Traits\FormatsPaginatedResponse;

class DestinationSubController extends Controller
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

        $results = $this->destinationSub
                    ->select('destination_subs.*','users.name as created_by_name','destination_headers.name as header_name','warehouses.name as warehouse_name','trucks.name as truck_name')
                    ->join('users','destination_subs.created_by', '=', 'users.id')
                    ->join('destination_headers','destination_subs.destination_header_id', '=', 'destination_headers.id')
                    ->join('warehouses','destination_headers.warehouse_id', '=', 'warehouses.id')
                    ->join('trucks','destination_headers.truck_id', '=', 'trucks.id')
                    ->where('warehouses.name', 'LIKE', "%{$query}%")
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
    public function store(DestinationDetailRequest $request)
    {
        $validatedData = $request->validated();

        $details = $this->destinationSub->create($validatedData);

        return response()->json([
            'status'  => $details ? 'success' : 'error',
            'message' => $details ? 'Successfully updated' : 'Something went wrong',
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\DestinationSub  $destinationSub
     * @return \Illuminate\Http\Response
     */
    public function show(DestinationSub $destinationSub)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\DestinationSub  $destinationSub
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, DestinationSub $destinationSub)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\DestinationSub  $destinationSub
     * @return \Illuminate\Http\Response
     */
    public function destroy(DestinationSub $destinationSub)
    {
        //
    }

    public function getAllDestinationHeaders(Request $request){
        
        return response([
            'dataList'     => DestinationHeader::where('warehouse_id', $request->warehouse_id)->where('truck_id', $request->truck_id)->get(),
            'dataListCount'=> DestinationHeader::all()->count(),
        ]);
    }
}

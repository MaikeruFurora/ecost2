<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\TruckRequest;
use App\Models\Truck;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Traits\FormatsPaginatedResponse;

class TruckController extends Controller
{
    use FormatsPaginatedResponse;

    protected $truck;
    protected $timeStamped;
    public function __construct() {
        $this->truck     = new Truck();
        $this->timeStamped = Carbon::now();
        $this->middleware('auth:sanctum');
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

        // $results =  Product::with(['warehouses','tax_codes','companies'])
        $results =  Truck::select('trucks.*','users.name as created_by_name')
                    ->join('users','trucks.created_by', '=', 'users.id')
                    ->where('trucks.name', 'LIKE', "%{$query}%")
                    ->paginate(10, ['*'], 'page', $page);
                
        return response()->json(($this->formatPaginatedResponse($results)));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(TruckRequest $request)
    {
        $validatedData = $request->validated();

        $truck = Truck::create($validatedData);

        $response = [
            'status' => $truck ? 'success' : 'error',
            'message' => $truck ? 'Successfully saved' : 'Something went wrong',
        ];

        return response()->json($response);
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Truck  $truck
     * @return \Illuminate\Http\Response
     */
    public function show(Truck $truck)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Truck  $truck
     * @return \Illuminate\Http\Response
     */
    public function update(TruckRequest $request, $id)
    {
        $validatedData = $request->validated();

        $this->truck->find($id)->update($validatedData);

        return response()->json([
            'status'  => 'success',
            'message' => 'Successfully updated',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Truck  $truck
     * @return \Illuminate\Http\Response
     */
    public function destroy(Truck $truck)
    {
        //
    }

    public function getAllTrucks(){
        
        return response()->json([
            'dataListCount'=> Truck::all()->count(),
            'dataList'     => Truck::orderBy('capacity','asc')->get(['id','name']),
        ]);
    }
}

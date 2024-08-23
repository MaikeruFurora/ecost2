<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\WarehouseRequest;
use Illuminate\Http\Request;
use App\Models\Warehouse;
use Illuminate\Support\Facades\Auth;
use App\Traits\FormatsPaginatedResponse;
class WarehouseController extends Controller
{

    use FormatsPaginatedResponse;


    protected $warehouse;
    public function __construct() {
        $this->warehouse  = new Warehouse();
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

        $results = Warehouse::select('warehouses.*','users.name as created_by_name')
                    ->join('users','warehouses.created_by', '=', 'users.id')
                    ->where('warehouses.name', 'like', '%'.$query.'%')
                    ->paginate(10, ['*'], 'page', $page);

        return response()->json($this->formatPaginatedResponse($results));

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(WarehouseRequest $request)
    {
        $validatedData = $request->validated();

        $truck = Warehouse::create($validatedData);

        $response = [
            'status' => $truck ? 'success' : 'error',
            'message' => $truck ? 'Successfully saved' : 'Something went wrong',
        ];

        return response()->json($response);
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
    public function update(WarehouseRequest $request, $id)
    {
        $validatedData = $request->validated();

        $this->warehouse->find($id)->update($validatedData);

        return response()->json([
            'status'  => 'success',
            'message' => 'Successfully updated',
        ]);
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
        ]);
    }
}

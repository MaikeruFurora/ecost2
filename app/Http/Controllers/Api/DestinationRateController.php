<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\DestinationRateRequest;
use App\Models\Destination;
use App\Models\DestinationRate;
use Illuminate\Http\Request;
use App\Traits\FormatsPaginatedResponse;

class DestinationRateController extends Controller
{

    use FormatsPaginatedResponse;

    protected $destination;
    protected $destinationRate;
    public function __construct() {
        $this->destination  = new Destination();
        $this->destinationRate     = new DestinationRate();
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query   = $request->get('query');
        $page    = $request->get('page');
        $id    = $request->get('i');

        $results = $this->destinationRate
                    ->select('destination_rates.*','users.name as created_by_name')
                    ->join('users','destination_rates.created_by', '=', 'users.id')
                    ->join('destinations','destination_rates.destination_id', '=', 'destinations.id')
                    ->where([
                        ['destination_rates.destination_id', $id],
                        ['destination_rates.name', 'LIKE', "%{$query}%"]

                    ])
                    ->paginate(10, ['*'], 'page', $page);

         return response()->json($this->formatPaginatedResponse($results));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(DestinationRateRequest $request)
    {
        $validatedData = $request->validated();

        $details = $this->destinationRate->create($validatedData);

        return response()->json([
            'status'  => $details ? 'success' : 'error',
            'message' => $details ? 'Successfully updated' : 'Something went wrong',
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Rate  $rate
     * @return \Illuminate\Http\Response
     */
    public function show(DestinationRate $rate)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Rate  $rate
     * @return \Illuminate\Http\Response
     */
    public function update(DestinationRateRequest $request, $id)
    {
        $validatedData = $request->validated();

        $this->destinationRate->find($id)->update($validatedData);

        return response()->json([
            'status'  => 'success',
            'message' => 'Successfully updated',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Rate  $rate
     * @return \Illuminate\Http\Response
     */
    public function destroy(DestinationRate $rate)
    {
        //
    }
}

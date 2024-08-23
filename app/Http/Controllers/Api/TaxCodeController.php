<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\TaxCodeRequest;
use App\Models\Form;
use App\Models\TaxCode;
use Illuminate\Http\Request;
use App\Traits\FormatsPaginatedResponse;

class TaxCodeController extends Controller
{

    use FormatsPaginatedResponse;
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query   = $request->get('q');
        $page    = $request->get('p');

        $results = TaxCode::select('tax_codes.*','users.name as created_by_name')
                    ->join('users','tax_codes.created_by', '=', 'users.id')
                    ->where('tax_codes.name', 'like', '%'.$query.'%')
                    ->paginate(10, ['*'], 'page', $page);

        return response()->json($this->formatPaginatedResponse($results));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(TaxCodeRequest $request)
    {
        $request['name'] = mb_strtoupper($request['name'], 'UTF-8');
        
        $form = TaxCode::create($request->all());

        return response()->json([
            'status'  => $form ? 'success' : 'error',
            'message' => $form ? 'Successfully updated' : 'Something went wrong',
        ]);
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

    public function getAllTaxCodes(Request $request){

        $this->validate($request, [
            'id' => 'required',
        ]);

        $formId = $request->id;
        $data   = Form::whereId($formId)->first(['name']);

        
        switch ($data->name) {
            case 'STATEMENT':
                    return response()->json([
                        'dataListCount'=> TaxCode::formStatement()->get()->count(),
                        'dataList'     => TaxCode::formStatement()->orderBy('name','asc')->get(['id','name']),
                    ]);
                break;
            case 'INVOICE':
                    return response()->json([
                        'dataListCount'=> TaxCode::all()->count(),
                        'dataList'     => TaxCode::orderBy('name','asc')->get(['id','name']),
                    ]);
                break;
            default:
                    return response()->json([
                        'status' => 'error',
                        ' message' => 'No Taxcode Found',
                    ],404);
                break;
        }

       
    }
}

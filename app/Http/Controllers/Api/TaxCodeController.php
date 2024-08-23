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
    
    protected $taxCode;
    protected $form;
    public function __construct(){
        $this->taxCode = new TaxCode();
        $this->form = new Form();
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

        $results = $this->taxCode->select('tax_codes.*','users.name as created_by_name')
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
        
        $form = $this->taxCode->create($request->all());

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
    public function update(TaxCodeRequest $request, $id)
    {
        $validatedData = $request->validated();

        $this->taxCode->find($id)->update($validatedData);

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

    public function getAllTaxCodes(Request $request){

        $this->validate($request, [
            'id' => 'required',
        ]);

        $formId = $request->id;
        $data   = $this->form->whereId($formId)->first(['name']);

        
        switch ($data->name) {
            case 'STATEMENT':
                    return response()->json([
                        'dataListCount'=> $this->taxCode->formStatement()->get()->count(),
                        'dataList'     => $this->taxCode->formStatement()->orderBy('name','asc')->get(['id','name']),
                    ]);
                break;
            case 'INVOICE':
                    return response()->json([
                        'dataListCount'=> $this->taxCode->all()->count(),
                        'dataList'     => $this->taxCode->orderBy('name','asc')->get(['id','name']),
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

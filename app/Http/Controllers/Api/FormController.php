<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\FormDocRequest;
use App\Models\Form;
use Illuminate\Http\Request;
use App\Traits\FormatsPaginatedResponse;

class FormController extends Controller
{
    use FormatsPaginatedResponse;

    protected $form;
    public function __construct() {
        $this->form     = new Form();
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

        $results = Form::select('forms.*','users.name as created_by_name')
                    ->join('users','forms.created_by', '=', 'users.id')
                    ->where('forms.name', 'like', '%'.$query.'%')
                    ->paginate(10, ['*'], 'page', $page);

        return response()->json($this->formatPaginatedResponse($results));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(FormDocRequest $request)
    {
        
        $form = $this->form::create($request->all());

        return response()->json([
            'status'  => $form ? 'success' : 'error',
            'message' => $form ? 'Successfully updated' : 'Something went wrong',
        ]);
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Form  $form
     * @return \Illuminate\Http\Response
     */
    public function show(Form $form)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Form  $form
     * @return \Illuminate\Http\Response
     */
    public function update(FormDocRequest $request, $id)
    {
        $validatedData = $request->validated();

        $this->form->find($id)->update($validatedData);

        return response()->json([
            'status'  => 'success',
            'message' => 'Successfully updated',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Form  $form
     * @return \Illuminate\Http\Response
     */
    public function destroy(Form $form)
    {
        //
    }

    public function getAllForms(Request $request){

        return response()->json([
            'dataListCount'=> Form::all()->count(),
            'dataList'     => Form::orderBy('name','asc')->get(['id','name']),
        ]);
    }
}

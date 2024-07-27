<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Models\TaxCode;
use App\Models\Warehouse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ItemController extends Controller
{
    protected $warehouse;
    protected $taxcode;
    protected $company;
    public function __construct() {
        $this->warehouse = new Warehouse();
        $this->taxcode   = new TaxCode();
        $this->company   = new Company();
    }
    public function index(){
        return view('pages.item.index');
    }

    public function create(Request $request){
        $items      = $this->product_list_from_view($request,true);
        $warehouses = $this->warehouse->orderBy('group', 'asc')->orderBy('name', 'asc') ->get(['id', 'name','group']);
        $taxcodes   = $this->taxcode->orderBy('name', 'asc')->get(['id', 'name']);
        $companies  = $this->company->orderBy('name', 'asc')->get(['id', 'name']);
        return view('pages.item.create', compact('warehouses','taxcodes','companies','items'));
    }

    public function store(Request $request){

    }
    
    public function product_list_from_view(Request $request,$returnItemsOnly=false){

        $query = DB::table('vw_products');

        if ($request->has('search')) {
            $query->where(function ($query) use ($request) {
                $search = $request->input('search');
                $query->where('itemname', 'like', '%' . $search . '%')
                      ->orWhere('itemcode', 'like', '%' . $search . '%');
            });
        }

        // Get the list with pagination
        $items = $query->paginate(5); // Adjust the limit as needed

        // Always return JSON for AJAX requests
        if ($request->ajax()) {
            return response()->json($items);
        }

        if ($returnItemsOnly) {
            return $items;
        }


    }
}

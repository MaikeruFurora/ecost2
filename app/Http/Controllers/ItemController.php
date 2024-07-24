<?php

namespace App\Http\Controllers;

use App\Models\Warehouse;
use Illuminate\Http\Request;

class ItemController extends Controller
{
    public function index(){
        return view('pages.item.index');
    }

    public function create(){
        $warehouses = Warehouse::orderBy('group', 'asc')
        ->orderBy('name', 'asc')
        ->get(['id', 'name']);
        return view('pages.item.create', compact('warehouses'));
    }

    public function store(Request $request){
        
    }
}

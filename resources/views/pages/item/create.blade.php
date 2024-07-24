
@extends('layout.app')
@section('content')
<div class="card">
    <div class="card-header">
       Item Entry
    </div>
    <div class="card-body">
        <form action="{{ route('auth.item.store') }}" method="POST" autocomplete="off">@csrf   
           <div class="row">
                <div class="col-6">
                    <button type="button" class="btn btn-primary mb-2">Search Item</button>
                    <div class="mb-3">
                        <label for="code" class="form-label mb-0">Code</label>
                        <input type="text" class="form-control " id="code">
                    </div>
                    <div class="mb-3">
                        <label for="code" class="form-label mb-0">Description</label>
                       <textarea name="description" class="form-control " id="" cols="3" rows="2"></textarea>
                    </div>
                    <div class="mb-3">
                        <label for="code" class="form-label mb-0">SKU</label>
                        <input type="number" class="form-control " id="code">
                    </div>
                    <div class="mb-3">
                        <label for="code" class="form-label mb-0">Brand</label>
                        <input type="text" class="form-control " id="code">
                    </div>
                   
                   
                </div>
                <div class="col-6">
                    <div class="row mb-3">
                        <div class="col-lg-3 col-md-6 col-sm-12">
                            <div class="form-check m-1">
                                <input class="form-check-input" type="checkbox" value="all" id="warehouse">
                                <label class="form-check-label" for="warehouse">All</label>
                            </div>
                        </div>
                        @foreach ($warehouses as $warehouse)
                            <div class="col-lg-3 col-md-6 col-sm-12">
                                <div class="form-check m-1">
                                    <input class="form-check-input" type="checkbox" value="{{ $warehouse->id }}" id="warehouse-{{ $warehouse->id }}">
                                    <label class="form-check-label" for="warehouse-{{ $warehouse->id }}"> {{ $warehouse->name }} </label>
                                </div>
                            </div>
                        @endforeach
                    </div>
                    <div class="row g-3 mb-3">
                        <div class="col">
                          <label for="firstName" class="form-label mb-0">Pickup Price</label>
                          <input type="text" class="form-control " placeholder="First name" aria-label="First name">
                        </div>
                        <div class="col">
                          <label for="lastName" class="form-label mb-0">Volume Price</label>
                          <input type="text" class="form-control " placeholder="Last name" aria-label="Last name">
                        </div>
                    </div>
                    <div class="row g-3 mb-3">
                        <div class="col">
                          <label for="firstName" class="form-label mb-0">Company Transaction</label>
                          <select name="warehouse" id="" class="form-control "></select>
                        </div>
                        <div class="col">
                          <label for="lastName" class="form-label mb-0">Tax Code</label>
                          <select name="warehouse" id="" class="form-control "></select>
                        </div>
                    </div>
                </div>
           </div>
            
           <div class="float-end">
                <button type="submit" class="btn btn-sm btn-primary">Submit</button>
           </div>
        </form>
    </div>
</div>
@endSection


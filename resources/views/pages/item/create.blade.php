
@extends('layout.app')
@section('content')
<div class="grid gap-4 sm:grid-cols-12 md:grid-cols-2 lg:grid-cols-2">
    <div class="card border">
        <div class="card-body">
            <div class="flex justify-start">
                <button type="button" class="btn btn-outline btn-sm" onclick="my_modal_2.showModal()">Search Item</button>
            </div>
            <div class="form-control sm:w-full">
                <label class="label">
                    <span class="label-text">Code</span>
                </label>
                <input type="text" placeholder="Type here" class="input input-bordered w-full"  readonly/>
            </div>
            <div class="form-control w-full">
                <label class="label">
                    <span class="label-text">Description</span>
                </label>
                <textarea class="textarea textarea-bordered w-full" placeholder="Description" readonly></textarea>
            </div>
            <div class="flex justify-between gap-4">
                <div class="form-control lg:w-1/2 md:w-2/3 sm:w-full">
                    <label class="label">
                        <span class="label-text">SKU</span>
                    </label>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" readonly/>
                </div>
                <div class="form-control lg:w-1/2 md:w-2/3 sm:w-full">
                    <label class="label">
                        <span class="label-text">Brand</span>
                    </label>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" readonly/>
                </div>
            
            </div>
        </div>
    </div>
    <div class="card border">
        <div class="card-body">
            <div class="flex justify-between gap-4">
                <div class="form-control lg:w-1/2 md:w-2/3 sm:w-full">
                    <label class="label">
                        <span class="label-text">Tax Code</span>
                    </label>
                    <select class="select select-bordered w-full">
                        <option disabled selected></option>
                        @foreach ($taxcodes as $taxcode)
                            <option value="{{$taxcode->id}}">{{$taxcode->name}}</option>
                        @endforeach
                    </select>
                    <label class="label">
                        <span class="label-text">Company Transaction</span>
                    </label>
                    <select class="select select-bordered w-full">
                        <option disabled selected></option>
                        @foreach ($companies as $company)
                            <option value="{{$company->id}}">{{$company->name}}</option>
                        @endforeach
                      </select>
                      <div class="form-control">
                        <label class="label">
                            <span class="label-text">Pickup Price</span>
                        </label>
                        <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                     </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Volume Price</span>
                        </label>
                        <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    </div>
                    <button class="btn btn-default my-3">
                        Submit
                    </button>
                </div>
                <div class="lg:w-1/2 md:w-2/3 sm:w-full">
                    <h6 class="my-3">Warehouses</h6>
                    <div class="grid grid-cols-2 gap-3">
                        @foreach ($warehouses as $warehouse)
                        <div class="flex justify-between gap-4">
                            <label class="label cursor-pointer">
                                <input type="checkbox" value="{{$warehouse->id}}" class="checkbox" />
                                <p class="ml-3 label-text">{{ $warehouse->name }} ({{ $warehouse->group }})</p>
                            </label>
                        </div>
                        @endforeach
                    </div>
                   
                </div>
            </div>
           
        </div>
    </div>
</div>

{{-- modal --}}
<!-- Open the modal using ID.showModal() method -->
<dialog id="my_modal_2" class="modal">
    <div class="modal-box w-11/12 max-w-5xl">
      <h3 class="text-lg font-bold">Search Product</h3>
        <div x-data="itemList()" x-init="fetchItems()">
            <div class="form-control w-full max-w-xs">
                <input type="text" placeholder="Type here" class="input input-bordered" x-model="searchQuery" @input="fetchItems"/>
            </div>
            <div class="overflow-x-auto">
              
                <table class="table border my-3">
                  <!-- head -->
                  <thead>
                    <tr>
                      <th>ITEM CODE</th>
                      <th>DESCRIPTION</th>
                      <th>SKU</th>
                      <th>BRAND</th>
                      <th>BRANCH</th>
                    </tr>
                  </thead>
                  <template x-for="item in items" :key="item.itemcode">
                    <tr>
                        <td x-text="item.itemcode"></td>
                        <td x-text="item.itemname"></td>
                        <td x-text="item.sku"></td>
                        <td x-text="item.brand"></td>
                        <td x-text="item.branch"></td>
                    </tr>
                @foreach ($items['data'] as $item)
                <tr>
                    <td>{{ $item }}</td>
                <tr>
                @endforeach
                </template>
                </table>
            </div>
        </div>
        <button class="btn btn-default" :disabled="currentPage <= 1" @click="changePage(currentPage - 1)">Previous</button>
        <button class="btn btn-default" :disabled="currentPage >= lastPage" @click="changePage(currentPage + 1)">Next</button>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
@endSection
@section('scripts')
<script>
 function itemList() {
    return {
        items: [],
        searchQuery: '',
        currentPage: 1,
        lastPage: 1,

        fetchItems() {
            fetch(`/item/create?page=${this.currentPage}&search=${this.searchQuery}`, {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    this.items = data.data;
                    this.currentPage = data.current_page;
                    this.lastPage = data.last_page;
                })
                .catch(error => {
                    console.error('Error fetching items:', error);
                });
        },

        changePage(page) {
            this.currentPage = page;
            this.fetchItems();
        }
    }
}
</script>
@endSection


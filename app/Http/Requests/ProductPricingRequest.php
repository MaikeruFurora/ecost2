<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductPricingRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'group'    => 'sometimes',
            'product_id'    => 'required',
            'company_id'  => 'required',
            'tax_code_id'   => 'required',
            'form_id'          => 'required',
            'tax_code_id'   => 'required',
        ];
    }
}

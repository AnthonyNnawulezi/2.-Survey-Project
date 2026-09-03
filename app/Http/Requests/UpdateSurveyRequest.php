<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateSurveyRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'user_id' => 'exists:user,id',
            'image' => 'required|string',
            'title' => 'required|string',
            'slug' => 'required|string',
            'status' => 'required|enum:surveys,slug',
            'description' => 'required|string',
            'expire_at' => 'required|date:after,today',
        ];
    }
}

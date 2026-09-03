<?php

namespace App\Http\Requests;

use App\Models\Survey;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;

class UpdateSurveyRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(Request $request, Survey $survey): bool
    {
        $user = $request->user()->id;
        if ($user !== $survey->id) {
            return false;
        }
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

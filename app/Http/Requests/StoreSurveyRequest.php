<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;

class StoreSurveyRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    protected function prepareForvalidation(): void
    {
        $this->merge([
            'user_id' => $this->user()->id,
            'slug' => Str::slug($this->input('title'))
        ]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'user_id' => 'exists:users,id',
            'image' => 'required|image|mimes:jpg,jpeg,png,gif|max:5120',
            'title' => 'required|string',
            'slug' => 'required|string|unique:surveys,slug',
            'status' => 'required|in:active,inactive',
            'description' => 'required|string',
            'expire_at' => 'required|date_format:Y-m-d|after:today',
            'questions' => [],
        ];
    }
}

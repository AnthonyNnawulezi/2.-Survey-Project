<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreSurveyRequest;
use App\Http\Requests\UpdateSurveyRequest;
use App\Models\Survey;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\File;

use function Pest\Laravel\delete;

class SurveyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $user = $request->user()->id;
        $surveys = Survey::query()->where('survey_id', $user)->orderBy('created_at')->paginate(10);
        return new Collection($surveys);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSurveyRequest $request)
    {
        $data = $request->validated();

        if (isset($data['image'])) {
            $extension = $request->file('image')->extension();
            $type = ['png', 'jpeg', 'jpg', 'gif'];

            if (!in_array($extension, $type)) {
                throw new Exception("Invalid image type");
            }

            $relativePath = $data['image'];
            $data['image'] = $relativePath;

            $image = new File;
            $absolutePath = $image->files(public_path('storage/images'));
            $filename = rand(0, 1) . '.' . $extension;

            if (File::exists($absolutePath)) {
                delete(public_path('storage/images'));
            }
            $data['image'] = file_put_contents($filename, $absolutePath);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Survey $survey)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSurveyRequest $request, Survey $survey)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Survey $survey)
    {
        //
    }
}

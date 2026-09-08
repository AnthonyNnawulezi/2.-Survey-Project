<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class Survey extends Model
{
    use HasSlug;

    protected $fillable = [
        'title',
        'user_id',
        'image',
        'slug',
        'status',
        'description',
        'expire_at',
        'created_at',
        'updated_at',
    ];

    public function getSlugOptions(): SlugOptions
    {
        return SlugOptions::create()->generateSlugsFrom('title')->saveSlugsTo('slug');
    }
}

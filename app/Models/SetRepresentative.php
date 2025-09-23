<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SetRepresentative extends Model
{
    protected $fillable = [ 'set', 'name', 'position', 'email', 'image', 'order', 'is_active' ];

    protected $casts = [ 'is_active' => 'boolean', 'order' => 'integer' ];

    public function scopeOfSet($query, $set)
    {
        return $query->where('set', $set);
    }

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    public function scopeOrdered($query)
    {
        return $query->orderBy('order');
    }
}

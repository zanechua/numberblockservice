<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Number extends Model
{

    protected $table = 'numbers';

    public function status()
    {
        return $this->belongsTo('App\Models\Status', 'status_id');
    }

    public function customer()
    {
        return $this->belongsTo('App\Models\User', 'customer_id');
    }

    public function history()
    {
        return $this->belongsToMany('App\Models\NumberHistory')->withTimestamps();
    }
}

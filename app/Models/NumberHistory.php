<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class NumberHistory extends Model
{

    protected $table = 'number_history';

    public function number()
    {
        return $this->belongsTo('App\Models\Number', 'number_id');
    }

    public function customer()
    {
        return $this->belongsTo('App\Models\User', 'customer_id');
    }

    public function action()
    {
        return $this->belongsTo('App\Models\NumberAction', 'action_id');
    }

}
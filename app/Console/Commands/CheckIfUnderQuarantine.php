<?php

namespace App\Console\Commands;

use Uuid;
use Carbon\Carbon;
use App\Models\Number;

use Illuminate\Console\Command;
use Illuminate\Foundation\Inspiring;

class CheckIfUnderQuarantine extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'Check if Number is under quarantine';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Checks if number is still under quarantine, if it is not then assign the status back to available';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $numbers = Number::all();

        //Retrieve numbers and check if the numbers are still under quarantined and check if 6 months has passed.
        //If number has passed the 6month quarantine period
        //Assign number back to available status = available pool.
    }
}
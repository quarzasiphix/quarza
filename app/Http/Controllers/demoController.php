<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class demoController extends Controller
{
    public function demo() {
        return view('demo');
    }
}

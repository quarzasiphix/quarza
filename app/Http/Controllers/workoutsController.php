<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\workout;

class workoutsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Workout::orderBy('id', 'asc')->get();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $newitem = new workout;
        $newitem->time = $request->workout['time'];
        $newitem->workout = $request->workout['workout'];
        $newitem->todo = $request->workout['todo'];
        $newitem->save();
        return $newitem;
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(int $time)
    {
        $workout = Workout::where('time', $time)->firstOrFail();
        $workout->delete();
        return response()->json(['message' => 'Workout deleted successfully']);
    }
}

<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Executive;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class ExecutiveController extends Controller
{
    public function adminIndex()
    {
        $executives = Executive::ordered()->get();
        return Inertia::render('admin/executives', [
            'executives' => $executives,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'position' => 'required|string|max:255',
            'email' => 'required|email|unique:executives,email',
            'bio' => 'nullable|string',
            // accept either a file upload or a string URL
            'image' => 'nullable',
            'order' => 'nullable|integer',
            'is_active' => 'nullable|boolean',
        ]);

        $validated['order'] = $validated['order'] ?? (Executive::max('order') + 1);
        $validated['is_active'] = $validated['is_active'] ?? true;

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('executives', 'public');
            $validated['image'] = $path;
        }

        Executive::create($validated);

        return back()->with('success', 'Executive created successfully');
    }

    public function update(Request $request, Executive $executive)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'position' => 'required|string|max:255',
            'email' => 'required|email|unique:executives,email,' . $executive->id,
            'bio' => 'nullable|string',
            'order' => 'nullable|integer',
            'is_active' => 'nullable|boolean'
        ]);
        
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('executives', 'public');
            $validated['image'] = Storage::url($path);
        }
        
        // 🔑 remove 'image' from $validated if no file uploaded
        $executive->update($validated);
        
        return back()->with('success', 'Executive updated successfully');
        
    }

    public function destroy(Executive $executive)
    {
        $executive->delete();
        return back()->with('success', 'Executive removed');
    }

    public function toggle(Request $request, Executive $executive)
    {
        $executive->is_active = !$executive->is_active;
        $executive->save();
        return back()->with('success', 'Executive status updated');
    }

    public function publicIndex()
    {
        $executives = Executive::active()->ordered()->get();
        return Inertia::render('excos/national-executives', [
            'executives' => $executives,
        ]);
    }
}



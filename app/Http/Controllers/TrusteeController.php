<?php

namespace App\Http\Controllers;

use App\Models\Trustee;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class TrusteeController extends Controller
{
    public function adminIndex()
    {
        $trustees = Trustee::ordered()->get();
        return Inertia::render('admin/trustees', [ 'trustees' => $trustees ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'position' => 'required|string|max:255',
            'email' => 'nullable|email',
            'image' => 'nullable|image|max:2048',
            'order' => 'nullable|integer',
            'is_active' => 'nullable|boolean',
        ]);
        $validated['order'] = $validated['order'] ?? (Trustee::max('order') + 1);
        $validated['is_active'] = $validated['is_active'] ?? true;
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('trustees', 'public');
            $validated['image'] = $path;
        }
        Trustee::create($validated);
        return back()->with('success', 'Trustee created');
    }

    public function update(Request $request, Trustee $trustee)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'position' => 'required|string|max:255',
            'email' => 'nullable|email',
            'order' => 'nullable|integer',
            'is_active' => 'nullable|boolean',
        ]);
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('trustees', 'public');
            $validated['image'] = Storage::url($path);
        }
        $trustee->update($validated);
        return back()->with('success', 'Trustee updated');
    }

    public function destroy(Trustee $trustee)
    {
        $trustee->delete();
        return back()->with('success', 'Trustee removed');
    }

    public function toggle(Trustee $trustee)
    {
        $trustee->is_active = !$trustee->is_active;
        $trustee->save();
        return back()->with('success', 'Trustee status updated');
    }

    public function publicIndex()
    {
        $trustees = Trustee::active()->ordered()->get();
        return Inertia::render('excos/board-of-trustees', [ 'trustees' => $trustees ]);
    }
}



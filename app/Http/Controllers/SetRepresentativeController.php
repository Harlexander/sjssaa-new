<?php

namespace App\Http\Controllers;

use App\Models\SetRepresentative;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class SetRepresentativeController extends Controller
{
    public function adminIndex()
    {
        $sets = SetRepresentative::select('set')->distinct()->pluck('set');
        $reps = SetRepresentative::ordered()->get();
        return Inertia::render('admin/set-representatives', [ 'sets' => $sets, 'reps' => $reps ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'set' => 'required|string|max:10',
            'name' => 'required|string|max:255',
            'position' => 'required|string|max:255',
            'email' => 'nullable|email',
            'image' => 'nullable',
            'order' => 'nullable|integer',
            'is_active' => 'nullable|boolean',
        ]);
        $validated['order'] = $validated['order'] ?? (SetRepresentative::ofSet($validated['set'])->max('order') + 1);
        $validated['is_active'] = $validated['is_active'] ?? true;
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('set-reps', 'public');
            $validated['image'] = Storage::url($path);
        }
        SetRepresentative::create($validated);
        return back()->with('success', 'Set rep created');
    }

    public function update(Request $request, SetRepresentative $setRepresentative)
    {
        $validated = $request->validate([
            'set' => 'required|string|max:10',
            'name' => 'required|string|max:255',
            'position' => 'required|string|max:255',
            'email' => 'nullable|email',
            'image' => 'nullable',
            'order' => 'nullable|integer',
            'is_active' => 'nullable|boolean',
        ]);
        if ($request->hasFile('image')) {
            if ($setRepresentative->image) {
                Storage::disk('public')->delete(str_replace(Storage::url(''), '', $setRepresentative->image));
            }
            $path = $request->file('image')->store('set-reps', 'public');
            $validated['image'] = Storage::url($path);
        }
        $setRepresentative->update($validated);
        return back()->with('success', 'Set rep updated');
    }

    public function destroy(SetRepresentative $setRepresentative)
    {
        $setRepresentative->delete();
        return back()->with('success', 'Set rep removed');
    }

    public function publicIndex()
    {
        $sets = SetRepresentative::select('set')->distinct()->orderBy('set')->pluck('set');
        return Inertia::render('excos/set-representative/index', [ 'sets' => $sets ]);
    }

    public function publicShow($set)
    {
        $reps = SetRepresentative::active()->ofSet($set)->ordered()->get();
        return Inertia::render('excos/set-representative/set', [ 'set' => $set, 'reps' => $reps ]);
    }
}



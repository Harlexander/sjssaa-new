<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class Members extends Controller
{
    public function getMembers(){
        try {
            $members = User::latest()->paginate(10);

            return Inertia::render("dashboard/members", [
                "data" => $members
            ]);
        } catch (\Throwable $th) {
            //throw $th;
            return response($th->getMessage(), 401);
        }
    }
    public function adminMembers(){
        try {
            $members = User::latest()->get();

            return Inertia::render("admin/members", [
                "data" => $members
            ]);
        } catch (\Throwable $th) {
            //throw $th;
            return response($th->getMessage(), 401);
        }
    }

    public function userStatus(Request $request){
        $request->validate([
            'id' => 'required',
            'status' => 'required'
        ]);


        $user = User::find($request->id);

        
        if($user){
            $user->status = $request->status;
            $user->save();
        }

        return back();
    }

    public function removeUser(Request $request){
        $request->validate([
            'id' => 'required'
        ]);
        $user = User::find($request->id);
        $user->delete();
        
        return back();
    }

    public function createMember(Request $request){
        $request->validate([
            'firstName' => 'required|string|max:255',
            'lastName' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'mobile' => 'required|string|max:20|unique:users',
            'set' => 'required|string|max:255',
            'country' => 'nullable|string|max:255',
            'profession' => 'nullable|string|max:255',
            'city' => 'nullable|string|max:255',
            'state' => 'nullable|string|max:255',
            'password' => 'required|string|min:8',
        ]);

        try {
            $user = User::create([
                'firstName' => $request->firstName,
                'lastName' => $request->lastName,
                'email' => $request->email,
                'mobile' => $request->mobile,
                'set' => $request->set,
                'country' => $request->country,
                'profession' => $request->profession,
                'city' => $request->city,
                'state' => $request->state,
                'password' => Hash::make($request->password),
            ]);

            return back()->with('success', 'Member created successfully!');
        } catch (\Exception $e) {
            return back()->with('error', 'Failed to create member: ' . $e->getMessage());
        }
    }

    public function importMembers(Request $request){
        $request->validate([
            'file' => 'required|file|mimes:csv,txt|max:2048'
        ]);

        try {
            $file = $request->file('file');
            $csvData = array_map('str_getcsv', file($file->getPathname()));
            $header = array_shift($csvData);
            
            $imported = 0;
            $errors = [];

            foreach ($csvData as $row) {
                if (count($row) < 6) continue; // Skip incomplete rows
                
                $data = array_combine($header, $row);
                
                // Validate required fields
                if (empty($data['email']) || empty($data['firstName']) || empty($data['lastName'])) {
                    $errors[] = "Row " . ($imported + 1) . ": Missing required fields";
                    continue;
                }

                // Check if user already exists
                if (User::where('email', $data['email'])->exists()) {
                    $errors[] = "Row " . ($imported + 1) . ": Email already exists";
                    continue;
                }

                try {
                    User::create([
                        'firstName' => $data['firstName'] ?? '',
                        'lastName' => $data['lastName'] ?? '',
                        'email' => $data['email'] ?? '',
                        'mobile' => $data['mobile'] ?? $data['phone'] ?? '',
                        'set' => $data['set'] ?? '',
                        'country' => $data['country'] ?? '',
                        'profession' => $data['profession'] ?? '',
                        'city' => $data['city'] ?? '',
                        'state' => $data['state'] ?? '',
                        'password' => Hash::make($data['password'] ?? 'password123'),
                    ]);
                    $imported++;
                } catch (\Exception $e) {
                    $errors[] = "Row " . ($imported + 1) . ": " . $e->getMessage();
                }
            }

            $message = "Successfully imported {$imported} members";
            if (!empty($errors)) {
                $message .= ". Errors: " . implode(', ', array_slice($errors, 0, 5));
                if (count($errors) > 5) {
                    $message .= " and " . (count($errors) - 5) . " more...";
                }
            }

            return back()->with('success', $message);
        } catch (\Exception $e) {
            return back()->with('error', 'Import failed: ' . $e->getMessage());
        }
    }
}

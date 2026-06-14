<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function signup(SignupRequest $request)
    {
        $user = User::create($request->validated());
        $token = $user->createToken('auth_token')->plainTextToken;
        return response()->json([
            'success' => true,
            'user' => $user,
            'token' => $token,
        ]);
    }

    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();
        $remember = $request->remember;

        if (!Auth::attempt($credentials, $remember)) {
            return response()->json("Invalid credentials, try again");
        }

        $token = $credentials->createToken('auth_token')->plainTextToken;
        return response()->json([
            'success' => true,
            'user' => $credentials,
            'token' => $token,
        ]);
    }
}

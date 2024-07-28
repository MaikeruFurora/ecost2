<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\LoginRequest;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(LoginRequest $request){

        $credentials = $request->validated();

        if (!Auth::attempt($credentials)) {
            return response()->json([
                'message' => 'Provided email or username and password are incorrect.',
                'status'  => 'error',
            ],422);
        }

        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;
        return response([
            'user'    => $user,
            'token'   => $token,
            'status'  => 'success',
            'message' => 'Successfully logged in.',
        ]);
    }

    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();
        return response()->json([
            'message' => 'Logout successful.',
            'status'  => 'success',
        ], 204);
    }
}

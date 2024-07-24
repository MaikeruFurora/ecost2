<?php

namespace App\Services;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class AuthService{
    
    public function login($request){
        
        $fieldType = filter_var($request->username, FILTER_VALIDATE_EMAIL) ? 'email' : 'username';

        $request->merge([

            $fieldType => $request->input('username')

        ]);
        
        $remember = $request->input('remember_token');

        $credentials = $request->only($fieldType, 'password');

        return $this->userRoute(

            $credentials,

            $remember,

            ['_token','_method'],

            ['msg'=>'Please try again','action'=>'warning']
        );

    }

    public function userRoute($credentials,$remember,$data,$errorM){


        if (Auth::guard('web')->attempt($credentials,$remember)) {

            return redirect()->route('auth.costing');

        }else{
            
            return back()->with($errorM);

        }

    }

    public function signOut(){

        if (Auth::guard('web')->check()) {

            Auth::guard('web')->logout();

            return redirect()->route('auth.login');

        }

    }

}
<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;


Route::get('/posts', [PostController::class, 'index']);

// نمونه‌ای از یک روت ساده API
Route::get('/ping', function () {
    return response()->json(['message' => 'pong']);
});

Route::get('/hello', function () {
    return response()->json(['message' => 'Hello from Laravel API!']);
});
Route::get('/message2', function () {
    return response()->json(['message1' => 'خوش آمدید']);
});
<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', fn () => Inertia::render('Welcome'));
Route::get('/login', fn () => Inertia::render('Auth/Login'));
Route::get('/register', fn () => Inertia::render('Auth/Register'));
Route::get('/upgrade', fn () => Inertia::render('Subscription/Upgrade'));

Route::get('/patient/dashboard', fn () => Inertia::render('Patient/Dashboard'));
Route::get('/patient/symptoms', fn () => Inertia::render('Patient/LogSymptoms'));
Route::get('/patient/records', fn () => Inertia::render('Patient/Records'));

Route::get('/doctor/dashboard', fn () => Inertia::render('Doctor/Dashboard'));
Route::get('/doctor/patients/1', fn () => Inertia::render('Doctor/PatientDetail'));
Route::get('/doctor/analytics', fn () => Inertia::render('Doctor/Analytics'));

Route::get('/admin/users', fn () => Inertia::render('Admin/Dashboard'));
Route::get('/symptom-checker', fn () => Inertia::render('SymptomChecker/Index'));
Route::get('/billing', fn () => Inertia::render('Billing/Index'));
Route::get('/analytics', fn () => Inertia::render('Analytics/Index'));

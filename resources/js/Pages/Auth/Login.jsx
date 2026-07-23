import AppLogo from '../../Components/AppLogo';

export default function Login() {
    return (
        <div className="min-h-screen bg-gray-50">
            <main className="grid min-h-screen lg:grid-cols-2">
                <section className="flex items-center justify-center px-4 py-12 sm:px-6 lg:px-12">
                    <div className="w-full max-w-md">
                        <AppLogo />
                        <div className="mt-10">
                            <h1 className="text-3xl font-bold tracking-tight text-gray-950">Welcome back</h1>
                            <p className="mt-2 text-sm text-gray-500">Sign in to continue to your healthcare workspace.</p>
                        </div>
                        <form className="mt-8 space-y-5">
                            <div><label htmlFor="email" className="mb-2 block text-sm font-semibold text-gray-700">Email address</label><input id="email" type="email" className="form-input" placeholder="you@example.com" /></div>
                            <div><div className="mb-2 flex items-center justify-between"><label htmlFor="password" className="text-sm font-semibold text-gray-700">Password</label><a href="/forgot-password" className="text-sm font-semibold text-blue-600 hover:text-blue-700">Forgot password?</a></div><input id="password" type="password" className="form-input" placeholder="Enter your password" /></div>
                            <label className="flex items-center gap-3 text-sm text-gray-600"><input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" /> Remember me</label>
                            <button type="submit" className="btn-primary w-full">Login</button>
                        </form>
                        <p className="mt-6 text-center text-sm text-gray-500">New to MediMind? <a href="/register" className="font-semibold text-blue-600">Create an account</a></p>
                    </div>
                </section>
                <aside className="hidden bg-blue-600 p-12 text-white lg:flex lg:flex-col lg:justify-between">
                    <p className="text-sm font-semibold text-blue-100">AI-powered care coordination</p>
                    <div><p className="max-w-xl text-4xl font-bold leading-tight">Healthcare insights that help every patient feel understood.</p><p className="mt-5 max-w-lg text-lg leading-8 text-blue-100">Securely connect symptom history, clinical review, and analytics in one modern platform.</p></div>
                    <p className="text-sm text-blue-100">Trusted workflows. Clear decisions. Better experiences.</p>
                </aside>
            </main>
        </div>
    );
}

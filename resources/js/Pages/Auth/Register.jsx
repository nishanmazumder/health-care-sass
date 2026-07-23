import AppLogo from '../../Components/AppLogo';

export default function Register() {
    return (
        <div className="min-h-screen bg-gray-50">
            <main className="flex min-h-screen items-center justify-center px-4 py-12 sm:px-6">
                <section className="card w-full max-w-xl p-6 sm:p-8">
                    <AppLogo />
                    <div className="mt-8"><h1 className="text-3xl font-bold text-gray-950">Create your account</h1><p className="mt-2 text-sm text-gray-500">Choose your role and set up a secure healthcare workspace.</p></div>
                    <form className="mt-8 grid gap-5 sm:grid-cols-2">
                        <div className="sm:col-span-2"><label htmlFor="name" className="mb-2 block text-sm font-semibold text-gray-700">Full name</label><input id="name" className="form-input" placeholder="Jordan Davis" /></div>
                        <div className="sm:col-span-2"><label htmlFor="register-email" className="mb-2 block text-sm font-semibold text-gray-700">Email address</label><input id="register-email" type="email" className="form-input" placeholder="you@example.com" /></div>
                        <div><label htmlFor="register-password" className="mb-2 block text-sm font-semibold text-gray-700">Password</label><input id="register-password" type="password" className="form-input" placeholder="Minimum 8 characters" /></div>
                        <div><label htmlFor="password-confirmation" className="mb-2 block text-sm font-semibold text-gray-700">Confirm password</label><input id="password-confirmation" type="password" className="form-input" placeholder="Repeat password" /></div>
                        <fieldset className="sm:col-span-2"><legend className="mb-3 text-sm font-semibold text-gray-700">I am joining as</legend><div className="grid gap-3 sm:grid-cols-2"><label className="flex cursor-pointer items-center gap-3 rounded-xl border border-blue-500 bg-blue-50 p-4"><input type="radio" name="role" defaultChecked className="text-blue-600 focus:ring-blue-500" /><span><span className="block text-sm font-bold text-gray-900">Patient</span><span className="block text-xs text-gray-500">Track symptoms and health records</span></span></label><label className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 p-4 hover:bg-gray-50"><input type="radio" name="role" className="text-blue-600 focus:ring-blue-500" /><span><span className="block text-sm font-bold text-gray-900">Doctor</span><span className="block text-xs text-gray-500">Review patients and clinical insights</span></span></label></div></fieldset>
                        <label className="flex items-start gap-3 text-sm leading-6 text-gray-600 sm:col-span-2"><input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600" /><span>I agree to the Terms of Service and Privacy Policy.</span></label>
                        <button type="submit" className="btn-primary sm:col-span-2">Create account</button>
                    </form>
                    <p className="mt-6 text-center text-sm text-gray-500">Already have an account? <a href="/login" className="font-semibold text-blue-600">Login</a></p>
                </section>
            </main>
        </div>
    );
}

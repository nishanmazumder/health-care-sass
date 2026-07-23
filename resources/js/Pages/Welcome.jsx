import Icon from '../Components/Icons';
import PricingCard from '../Components/PricingCard';
import PublicLayout from '../Layouts/PublicLayout';

const features = [
    { title: 'AI Symptom Checker', text: 'Turn patient-reported symptoms into structured, explainable suggestions in seconds.', icon: 'sparkle' },
    { title: 'Doctor Dashboard', text: 'Review patient activity, add clinical notes, and prioritize follow-up from one workspace.', icon: 'stethoscope' },
    { title: 'Patient Analytics', text: 'Track symptom trends, care engagement, and operational outcomes with clear reporting.', icon: 'chart' },
];

const plans = [
    { name: 'Free', price: '$0', description: 'For patients getting started.', features: ['5 AI checks per month', 'Personal symptom history', 'Basic care insights'] },
    { name: 'Premium', price: '$29', description: 'For proactive personal care.', features: ['Unlimited AI checks', 'Advanced analytics', 'Priority doctor review'], featured: true },
    { name: 'Enterprise', price: 'Custom', description: 'For clinics and health systems.', features: ['Multi-clinic workspaces', 'Custom integrations', 'Dedicated support'] },
];

export default function Welcome() {
    return (
        <PublicLayout>
            <section className="relative overflow-hidden bg-white">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(37,99,235,0.12),_transparent_38%)]" />
                <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
                    <div>
                        <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-sm font-semibold text-blue-700">
                            <Icon name="sparkle" className="h-4 w-4" /> Smarter digital care workflows
                        </span>
                        <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">AI-Powered Healthcare SaaS</h1>
                        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">Connect patients, doctors, and care teams with intelligent symptom analysis, secure records, and actionable healthcare analytics.</p>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <a href="/register" className="btn-primary px-6 py-3">Sign Up <Icon name="arrowRight" className="ml-2 h-4 w-4" /></a>
                            <a href="/login" className="btn-secondary px-6 py-3">Login</a>
                        </div>
                        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-gray-500">
                            <span className="flex items-center gap-2"><Icon name="check" className="h-4 w-4 text-emerald-500" /> Secure by design</span>
                            <span className="flex items-center gap-2"><Icon name="check" className="h-4 w-4 text-emerald-500" /> No credit card required</span>
                        </div>
                    </div>

                    <div className="card relative p-4 sm:p-6">
                        <div className="rounded-2xl bg-gray-950 p-5 text-white">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-400">Patient health overview</p>
                                    <p className="mt-1 text-xl font-bold">Good morning, Jordan</p>
                                </div>
                                <span className="rounded-lg bg-white/10 px-3 py-1.5 text-xs font-semibold">Live demo</span>
                            </div>
                            <div className="mt-6 grid grid-cols-2 gap-3">
                                <div className="rounded-xl bg-white/10 p-4"><p className="text-xs text-gray-400">AI checks</p><p className="mt-2 text-2xl font-bold">24</p></div>
                                <div className="rounded-xl bg-white/10 p-4"><p className="text-xs text-gray-400">Care score</p><p className="mt-2 text-2xl font-bold">92%</p></div>
                            </div>
                            <div className="mt-4 rounded-xl bg-white p-4 text-gray-900">
                                <div className="flex gap-3">
                                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-blue-50 text-blue-600"><Icon name="sparkle" /></span>
                                    <div><p className="font-semibold">AI care suggestion</p><p className="mt-1 text-sm leading-6 text-gray-500">Your reported symptoms are low-risk. Continue monitoring hydration and temperature.</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="features" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-sm font-bold uppercase tracking-wider text-blue-600">Platform capabilities</p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950">One connected healthcare experience</h2>
                </div>
                <div className="mt-12 grid gap-6 md:grid-cols-3">
                    {features.map((feature) => (
                        <article key={feature.title} className="card p-6">
                            <span className="grid h-12 w-12 place-items-center rounded-xl bg-blue-50 text-blue-600"><Icon name={feature.icon} /></span>
                            <h3 className="mt-5 text-lg font-bold text-gray-950">{feature.title}</h3>
                            <p className="mt-2 text-sm leading-6 text-gray-600">{feature.text}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section id="pricing" className="border-y border-gray-200 bg-white py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="text-sm font-bold uppercase tracking-wider text-blue-600">Simple pricing</p>
                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950">Plans that grow with your care needs</h2>
                    </div>
                    <div className="mt-12 grid gap-6 lg:grid-cols-3">
                        {plans.map((plan) => <PricingCard key={plan.name} {...plan} />)}
                    </div>
                </div>
            </section>

            <footer className="bg-gray-950 text-gray-300">
                <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
                    <div><p className="font-bold text-white">MediMind AI</p><p className="mt-1 text-sm text-gray-400">Healthcare intelligence for everyone.</p></div>
                    <nav className="flex flex-wrap gap-6 text-sm" aria-label="Footer navigation">
                        <a href="/about" className="hover:text-white">About</a>
                        <a href="/contact" className="hover:text-white">Contact</a>
                        <a href="/privacy" className="hover:text-white">Privacy</a>
                    </nav>
                </div>
            </footer>
        </PublicLayout>
    );
}

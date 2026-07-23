import Icon from '../../Components/Icons';
import PricingCard from '../../Components/PricingCard';
import PublicLayout from '../../Layouts/PublicLayout';

const plans = [
    { name: 'Free', price: '$0', description: 'Essential personal health tracking.', features: ['5 AI analyses monthly', 'Basic records', 'Community support'], action: 'Current plan' },
    { name: 'Premium', price: '$29', description: 'Advanced insights and care support.', features: ['Unlimited analyses', 'Advanced trends', 'Priority review'], featured: true, action: 'Upgrade with Stripe' },
    { name: 'Enterprise', price: 'Custom', description: 'Custom clinical operations workspace.', features: ['Team management', 'Custom analytics', 'Dedicated success manager'], action: 'Contact sales' },
];

export default function Upgrade() {
    return (
        <PublicLayout>
            <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center"><span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-sm font-semibold text-blue-700"><Icon name="billing" className="h-4 w-4" /> Secure billing</span><h1 className="mt-5 text-4xl font-bold tracking-tight text-gray-950">Upgrade your healthcare experience</h1><p className="mt-4 text-lg text-gray-600">Choose a plan, then connect the selected action to your Stripe checkout session.</p></div>
                <div className="mt-12 grid gap-6 lg:grid-cols-3">{plans.map((plan) => <PricingCard key={plan.name} {...plan} />)}</div>
                <section className="card mx-auto mt-10 max-w-3xl p-6"><div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-sm font-semibold text-gray-500">Stripe checkout placeholder</p><h2 className="mt-1 text-xl font-bold text-gray-950">Premium monthly · $29.00</h2><p className="mt-2 text-sm text-gray-500">Card form, billing address, and payment confirmation render here.</p></div><button className="btn-primary shrink-0">Continue to checkout</button></div></section>
            </main>
        </PublicLayout>
    );
}

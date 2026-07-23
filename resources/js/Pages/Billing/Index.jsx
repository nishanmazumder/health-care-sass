import PricingCard from '../../Components/PricingCard';
import DashboardLayout from '../../Layouts/DashboardLayout';

const nav = [
    { label: 'Dashboard', href: '/patient/dashboard', icon: 'dashboard' },
    { label: 'Log Symptoms', href: '/patient/symptoms', icon: 'activity' },
    { label: 'My Records', href: '/patient/records', icon: 'records' },
    { label: 'Subscription', href: '/billing', icon: 'billing' },
];

const plans = [
    { name: 'Free', price: '$0', description: 'Basic personal care tracking.', features: ['5 checks per month', 'Health history', 'Basic support'], action: 'Downgrade' },
    { name: 'Premium', price: '$29', description: 'Advanced AI insights and analytics.', features: ['Unlimited checks', 'Advanced analytics', 'Priority support'], featured: true, action: 'Current plan' },
    { name: 'Enterprise', price: 'Custom', description: 'Built for healthcare organizations.', features: ['Team workspaces', 'Custom integrations', 'Dedicated support'], action: 'Contact sales' },
];

export default function Billing() {
    return (
        <div className="min-h-screen bg-gray-50">
            <DashboardLayout items={nav} current="Subscription" footerLabel="Billing secured by Stripe">
                <header><p className="text-sm font-semibold text-blue-600">Account billing</p><h1 className="mt-1 text-3xl font-bold text-gray-950">Subscription & Billing</h1><p className="mt-2 text-sm text-gray-500">Manage your current plan and payment preferences.</p></header>
                <section className="card mt-6 p-6"><div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between"><div><p className="text-sm font-semibold text-gray-500">Current plan</p><div className="mt-2 flex items-center gap-3"><h2 className="text-2xl font-bold text-gray-950">Premium</h2><span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700">Active</span></div><p className="mt-2 text-sm text-gray-500">Renews on August 23, 2026 · $29/month</p></div><div className="flex flex-col gap-3 sm:flex-row"><button className="btn-secondary">Manage payment</button><button className="btn-secondary">Cancel plan</button></div></div></section>
                <section className="mt-8"><h2 className="text-xl font-bold text-gray-950">Available plans</h2><div className="mt-4 grid gap-6 xl:grid-cols-3">{plans.map((plan) => <PricingCard key={plan.name} {...plan} />)}</div></section>
                <section className="card mt-8 p-6"><p className="text-sm font-semibold text-gray-500">Stripe checkout placeholder</p><div className="mt-3 grid min-h-40 place-items-center rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 text-center"><div><p className="font-bold text-gray-700">Stripe Elements / Checkout</p><p className="mt-1 text-sm text-gray-500">Payment form and billing confirmation render here.</p></div></div></section>
            </DashboardLayout>
        </div>
    );
}

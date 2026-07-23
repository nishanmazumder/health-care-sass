import ChartPlaceholder from '../../Components/ChartPlaceholder';
import StatCard from '../../Components/StatCard';
import DashboardLayout from '../../Layouts/DashboardLayout';

const nav = [
    { label: 'Dashboard', href: '/patient/dashboard', icon: 'dashboard' },
    { label: 'Log Symptoms', href: '/patient/symptoms', icon: 'activity' },
    { label: 'My Records', href: '/patient/records', icon: 'records' },
    { label: 'Subscription', href: '/billing', icon: 'billing' },
];

const recent = [
    { date: 'Jul 21, 2026', symptoms: 'Headache, fatigue', suggestion: 'Hydration and rest', status: 'Reviewed' },
    { date: 'Jul 15, 2026', symptoms: 'Mild cough', suggestion: 'Monitor for 48 hours', status: 'Pending' },
    { date: 'Jul 03, 2026', symptoms: 'Seasonal allergies', suggestion: 'Likely allergen-related', status: 'Reviewed' },
];

export default function PatientDashboard() {
    return (
        <div className="min-h-screen bg-gray-50">
            <DashboardLayout items={nav} current="Dashboard" footerLabel="Your records are protected">
                <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-sm font-semibold text-blue-600">Patient workspace</p><h1 className="mt-1 text-3xl font-bold tracking-tight text-gray-950">Welcome back, Jordan</h1><p className="mt-2 text-sm text-gray-500">Here is a quick summary of your recent health activity.</p></div><a href="/patient/symptoms" className="btn-primary">Log new symptoms</a></header>
                <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><StatCard label="Symptom logs" value="24" helper="+3 this month" icon="activity" /><StatCard label="AI suggestions" value="18" helper="75% reviewed" icon="sparkle" /><StatCard label="Doctor notes" value="9" helper="2 new updates" icon="stethoscope" /><StatCard label="Care score" value="92%" helper="Improved 4%" icon="chart" /></section>
                <section className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]"><div className="card p-5"><div className="flex items-center justify-between"><div><h2 className="text-lg font-bold text-gray-950">Recent records</h2><p className="mt-1 text-sm text-gray-500">Latest AI checks and care updates.</p></div><a href="/patient/records" className="text-sm font-semibold text-blue-600">View all</a></div><div className="mt-5 overflow-x-auto"><table className="min-w-full text-left text-sm"><thead className="border-b border-gray-200 text-xs uppercase text-gray-500"><tr><th className="px-3 py-3">Date</th><th className="px-3 py-3">Symptoms</th><th className="px-3 py-3">Status</th></tr></thead><tbody className="divide-y divide-gray-100">{recent.map((row) => <tr key={row.date} className="hover:bg-gray-50"><td className="whitespace-nowrap px-3 py-4 text-gray-500">{row.date}</td><td className="px-3 py-4"><p className="font-semibold text-gray-900">{row.symptoms}</p><p className="mt-1 text-xs text-gray-500">{row.suggestion}</p></td><td className="px-3 py-4"><span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${row.status === 'Reviewed' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>{row.status}</span></td></tr>)}</tbody></table></div></div><ChartPlaceholder title="Health activity trend" description="Symptom logs and care engagement over time" /></section>
            </DashboardLayout>
        </div>
    );
}

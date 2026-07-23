import ChartPlaceholder from '../../Components/ChartPlaceholder';
import DashboardLayout from '../../Layouts/DashboardLayout';

const nav = [
    { label: 'Overview', href: '/analytics', icon: 'dashboard' },
    { label: 'Patient Records', href: '/doctor/patients', icon: 'users' },
    { label: 'Analytics', href: '/analytics', icon: 'chart' },
];

export default function Analytics() {
    return (
        <div className="min-h-screen bg-gray-50">
            <DashboardLayout items={nav} current="Analytics" footerLabel="Analytics workspace">
                <header className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between"><div><p className="text-sm font-semibold text-blue-600">Reporting center</p><h1 className="mt-1 text-3xl font-bold text-gray-950">Analytics</h1><p className="mt-2 text-sm text-gray-500">Explore patient visits, conditions, and doctor activity.</p></div><div className="grid gap-3 sm:grid-cols-2"><div><label className="mb-1.5 block text-xs font-bold uppercase text-gray-500">Date range</label><select className="form-input sm:w-48"><option>Last 30 days</option><option>Last quarter</option><option>Year to date</option></select></div><div><label className="mb-1.5 block text-xs font-bold uppercase text-gray-500">Patient group</label><select className="form-input sm:w-48"><option>All patients</option><option>Premium patients</option><option>High-risk patients</option></select></div></div></header>
                <section className="mt-6 grid gap-6 xl:grid-cols-2"><ChartPlaceholder title="Patient visits" description="Visits and symptom submissions by day" /><ChartPlaceholder title="Conditions distribution" description="Share of common condition categories" /><ChartPlaceholder title="Doctor activity" description="Reviews, notes, and response time" /><ChartPlaceholder title="Engagement trend" description="Active users and repeat usage" /></section>
            </DashboardLayout>
        </div>
    );
}

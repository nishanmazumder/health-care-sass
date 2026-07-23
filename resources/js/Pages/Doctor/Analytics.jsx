import ChartPlaceholder from '../../Components/ChartPlaceholder';
import DashboardLayout from '../../Layouts/DashboardLayout';

const nav = [
    { label: 'Dashboard', href: '/doctor/dashboard', icon: 'dashboard' },
    { label: 'Patient Records', href: '/doctor/patients', icon: 'users', badge: '12' },
    { label: 'Analytics', href: '/doctor/analytics', icon: 'chart' },
];

export default function DoctorAnalytics() {
    return (
        <div className="min-h-screen bg-gray-50">
            <DashboardLayout items={nav} current="Analytics" footerLabel="Clinical workspace secured">
                <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-sm font-semibold text-blue-600">Clinical analytics</p><h1 className="mt-1 text-3xl font-bold text-gray-950">Doctor Analytics</h1><p className="mt-2 text-sm text-gray-500">Understand workload, conditions, and response performance.</p></div><select className="form-input sm:w-44"><option>Last 30 days</option><option>Last 90 days</option><option>This year</option></select></header>
                <section className="mt-6 grid gap-6 xl:grid-cols-2"><ChartPlaceholder title="Patient visits" description="Daily submissions and completed reviews" /><ChartPlaceholder title="Condition distribution" description="Most common symptom categories" /><ChartPlaceholder title="Response time" description="Average review and follow-up time" /><ChartPlaceholder title="Care outcomes" description="Resolved, monitoring, and escalated cases" /></section>
            </DashboardLayout>
        </div>
    );
}

import ChartPlaceholder from '../../Components/ChartPlaceholder';
import StatCard from '../../Components/StatCard';
import DashboardLayout from '../../Layouts/DashboardLayout';

const nav = [
    { label: 'Users', href: '/admin/users', icon: 'users' },
    { label: 'Subscriptions', href: '/admin/subscriptions', icon: 'billing' },
    { label: 'System Analytics', href: '/admin/analytics', icon: 'chart' },
];

const users = [
    { name: 'Ava Williams', email: 'ava@example.com', role: 'Patient', plan: 'Premium', status: 'Active' },
    { name: 'Dr. Ethan Lee', email: 'ethan@example.com', role: 'Doctor', plan: 'Enterprise', status: 'Active' },
    { name: 'Mia Johnson', email: 'mia@example.com', role: 'Patient', plan: 'Free', status: 'Active' },
    { name: 'Olivia Martin', email: 'olivia@example.com', role: 'Patient', plan: 'Premium', status: 'Past due' },
];

export default function AdminDashboard() {
    return (
        <div className="min-h-screen bg-gray-50">
            <DashboardLayout items={nav} current="Users" footerLabel="Administrator access enabled">
                <header><p className="text-sm font-semibold text-blue-600">Platform administration</p><h1 className="mt-1 text-3xl font-bold text-gray-950">Admin Panel</h1><p className="mt-2 text-sm text-gray-500">Manage users, subscriptions, and system performance.</p></header>
                <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><StatCard label="Total users" value="12,480" helper="+8.2% this month" icon="users" /><StatCard label="Active subscriptions" value="4,218" helper="+312 this month" icon="billing" /><StatCard label="Monthly revenue" value="$184K" helper="+11.4% growth" icon="chart" /><StatCard label="AI analyses" value="98.2K" helper="99.9% uptime" icon="sparkle" /></section>
                <section className="table-shell mt-6"><div className="flex flex-col gap-3 border-b border-gray-200 p-5 sm:flex-row sm:items-center sm:justify-between"><div><h2 className="text-lg font-bold text-gray-950">User management</h2><p className="mt-1 text-sm text-gray-500">Review roles, plans, and account status.</p></div><button className="btn-primary">Add user</button></div><div className="overflow-x-auto"><table className="min-w-[780px] w-full text-left text-sm"><thead className="bg-gray-50 text-xs uppercase text-gray-500"><tr><th className="px-5 py-3">User</th><th className="px-5 py-3">Role</th><th className="px-5 py-3">Subscription</th><th className="px-5 py-3">Status</th><th className="px-5 py-3 text-right">Actions</th></tr></thead><tbody className="divide-y divide-gray-100">{users.map((user) => <tr key={user.email} className="hover:bg-gray-50"><td className="px-5 py-4"><p className="font-semibold text-gray-900">{user.name}</p><p className="text-xs text-gray-500">{user.email}</p></td><td className="px-5 py-4 text-gray-600">{user.role}</td><td className="px-5 py-4"><span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">{user.plan}</span></td><td className="px-5 py-4"><span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${user.status === 'Active' ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>{user.status}</span></td><td className="px-5 py-4 text-right"><button className="font-semibold text-blue-600">Manage</button></td></tr>)}</tbody></table></div></section>
                <section className="mt-6 grid gap-6 xl:grid-cols-2"><ChartPlaceholder title="Subscription overview" description="Active users, upgrades, churn, and revenue" /><ChartPlaceholder title="System analytics" description="AI requests, response times, and uptime" /></section>
            </DashboardLayout>
        </div>
    );
}

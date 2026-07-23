import { useMemo, useState } from 'react';
import Icon from '../../Components/Icons';
import StatCard from '../../Components/StatCard';
import DashboardLayout from '../../Layouts/DashboardLayout';

const nav = [
    { label: 'Dashboard', href: '/doctor/dashboard', icon: 'dashboard' },
    { label: 'Patient Records', href: '/doctor/patients', icon: 'users', badge: '12' },
    { label: 'Analytics', href: '/doctor/analytics', icon: 'chart' },
];

const patients = [
    { name: 'Ava Williams', age: 34, symptoms: 'Recurring migraine', risk: 'Medium', lastActivity: '10 min ago' },
    { name: 'Noah Brown', age: 52, symptoms: 'Chest discomfort', risk: 'High', lastActivity: '35 min ago' },
    { name: 'Mia Johnson', age: 27, symptoms: 'Seasonal allergies', risk: 'Low', lastActivity: '2 hours ago' },
    { name: 'Liam Wilson', age: 41, symptoms: 'Lower back pain', risk: 'Low', lastActivity: 'Yesterday' },
];

export default function DoctorDashboard() {
    const [query, setQuery] = useState('');
    const filtered = useMemo(() => patients.filter((patient) => patient.name.toLowerCase().includes(query.toLowerCase()) || patient.symptoms.toLowerCase().includes(query.toLowerCase())), [query]);

    return (
        <div className="min-h-screen bg-gray-50">
            <DashboardLayout items={nav} current="Dashboard" footerLabel="Clinical workspace secured">
                <header><p className="text-sm font-semibold text-blue-600">Doctor workspace</p><h1 className="mt-1 text-3xl font-bold text-gray-950">Care team overview</h1><p className="mt-2 text-sm text-gray-500">Prioritize patients and review AI-supported intake data.</p></header>
                <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><StatCard label="Active patients" value="148" helper="+12 this month" icon="users" /><StatCard label="Pending reviews" value="12" helper="3 high priority" icon="records" /><StatCard label="Completed today" value="18" helper="82% on time" icon="check" /><StatCard label="Average response" value="24m" helper="6m faster" icon="activity" /></section>
                <section className="card mt-6 p-5"><div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"><div><h2 className="text-lg font-bold text-gray-950">Patient list</h2><p className="mt-1 text-sm text-gray-500">Search and filter recent patient submissions.</p></div><div className="flex flex-col gap-3 sm:flex-row"><label className="relative"><Icon name="search" className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" /><input value={query} onChange={(event) => setQuery(event.target.value)} className="form-input pl-9 sm:w-72" placeholder="Search patients" /></label><select className="form-input sm:w-40"><option>All risk levels</option><option>High</option><option>Medium</option><option>Low</option></select></div></div><div className="mt-5 overflow-x-auto"><table className="min-w-[760px] w-full text-left text-sm"><thead className="border-b border-gray-200 text-xs uppercase text-gray-500"><tr><th className="px-4 py-3">Patient</th><th className="px-4 py-3">Latest symptoms</th><th className="px-4 py-3">Risk</th><th className="px-4 py-3">Activity</th><th className="px-4 py-3 text-right">Action</th></tr></thead><tbody className="divide-y divide-gray-100">{filtered.map((patient) => <tr key={patient.name} className="hover:bg-gray-50"><td className="px-4 py-4"><p className="font-semibold text-gray-900">{patient.name}</p><p className="text-xs text-gray-500">Age {patient.age}</p></td><td className="px-4 py-4 text-gray-600">{patient.symptoms}</td><td className="px-4 py-4"><span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${patient.risk === 'High' ? 'bg-red-50 text-red-700' : patient.risk === 'Medium' ? 'bg-amber-50 text-amber-700' : 'bg-emerald-50 text-emerald-700'}`}>{patient.risk}</span></td><td className="px-4 py-4 text-gray-500">{patient.lastActivity}</td><td className="px-4 py-4 text-right"><a href="/doctor/patients/1" className="font-semibold text-blue-600">View patient</a></td></tr>)}</tbody></table></div></section>
            </DashboardLayout>
        </div>
    );
}

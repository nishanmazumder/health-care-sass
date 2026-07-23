import DashboardLayout from '../../Layouts/DashboardLayout';

const nav = [
    { label: 'Dashboard', href: '/patient/dashboard', icon: 'dashboard' },
    { label: 'Log Symptoms', href: '/patient/symptoms', icon: 'activity' },
    { label: 'My Records', href: '/patient/records', icon: 'records' },
    { label: 'Subscription', href: '/billing', icon: 'billing' },
];

const records = [
    { date: 'Jul 21, 2026', symptoms: 'Headache, fatigue, mild nausea', suggestion: 'Low-risk tension headache pattern; hydrate and rest.', notes: 'Follow up if symptoms persist beyond 72 hours.' },
    { date: 'Jul 15, 2026', symptoms: 'Dry cough and sore throat', suggestion: 'Possible mild upper respiratory irritation.', notes: 'Monitor temperature and breathing.' },
    { date: 'Jul 03, 2026', symptoms: 'Sneezing and itchy eyes', suggestion: 'High likelihood of seasonal allergies.', notes: 'Avoid known triggers; continue prescribed medication.' },
    { date: 'Jun 24, 2026', symptoms: 'Lower back stiffness', suggestion: 'Likely posture or activity-related strain.', notes: 'Gentle mobility exercises recommended.' },
];

export default function PatientRecords() {
    return (
        <div className="min-h-screen bg-gray-50">
            <DashboardLayout items={nav} current="My Records" footerLabel="Your records are protected">
                <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-sm font-semibold text-blue-600">Personal health history</p><h1 className="mt-1 text-3xl font-bold text-gray-950">My Records</h1><p className="mt-2 text-sm text-gray-500">Review symptom logs, AI suggestions, and doctor notes.</p></div><button className="btn-secondary">Export records</button></header>
                <section className="table-shell mt-6 overflow-x-auto"><table className="min-w-[900px] w-full text-left text-sm"><thead className="border-b border-gray-200 bg-gray-50 text-xs uppercase tracking-wide text-gray-500"><tr><th className="px-5 py-4">Date</th><th className="px-5 py-4">Symptoms</th><th className="px-5 py-4">AI suggestion</th><th className="px-5 py-4">Doctor notes</th></tr></thead><tbody className="divide-y divide-gray-100">{records.map((record) => <tr key={record.date} className="align-top hover:bg-blue-50/40"><td className="whitespace-nowrap px-5 py-5 font-medium text-gray-500">{record.date}</td><td className="px-5 py-5 font-semibold text-gray-900">{record.symptoms}</td><td className="px-5 py-5 leading-6 text-gray-600">{record.suggestion}</td><td className="px-5 py-5 leading-6 text-gray-600">{record.notes}</td></tr>)}</tbody></table></section>
            </DashboardLayout>
        </div>
    );
}

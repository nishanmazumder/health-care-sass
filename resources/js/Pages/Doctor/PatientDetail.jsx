import Icon from '../../Components/Icons';
import DashboardLayout from '../../Layouts/DashboardLayout';

const nav = [
    { label: 'Dashboard', href: '/doctor/dashboard', icon: 'dashboard' },
    { label: 'Patient Records', href: '/doctor/patients', icon: 'users', badge: '12' },
    { label: 'Analytics', href: '/doctor/analytics', icon: 'chart' },
];

export default function PatientDetail() {
    return (
        <div className="min-h-screen bg-gray-50">
            <DashboardLayout items={nav} current="Patient Records" footerLabel="Clinical workspace secured">
                <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><div><a href="/doctor/patients" className="text-sm font-semibold text-blue-600">← Back to patients</a><h1 className="mt-2 text-3xl font-bold text-gray-950">Noah Brown</h1><p className="mt-1 text-sm text-gray-500">52 years · Patient ID PT-2048 · Premium</p></div><span className="self-start rounded-full bg-red-50 px-3 py-1.5 text-sm font-bold text-red-700">High priority</span></header>
                <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_380px]"><div className="space-y-6"><section className="card p-6"><div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-blue-600"><Icon name="activity" /></span><div><h2 className="font-bold text-gray-950">Current symptoms</h2><p className="text-sm text-gray-500">Submitted Jul 23, 2026 at 10:25 AM</p></div></div><p className="mt-5 leading-7 text-gray-700">Intermittent chest discomfort with mild shortness of breath during physical activity. Symptoms began yesterday evening and have occurred three times.</p></section><section className="card p-6"><div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-blue-600"><Icon name="sparkle" /></span><div><h2 className="font-bold text-gray-950">AI suggestion</h2><p className="text-sm text-gray-500">Clinical decision-support placeholder</p></div></div><div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4"><p className="font-semibold text-amber-900">Prompt clinical evaluation recommended</p><p className="mt-2 text-sm leading-6 text-amber-800">Symptoms may warrant timely assessment. Review cardiac history, vital signs, and escalation criteria.</p></div></section><section className="card p-6"><h2 className="font-bold text-gray-950">Previous history</h2><div className="mt-4 space-y-4"><div className="rounded-xl border border-gray-200 p-4"><p className="text-sm font-semibold text-gray-900">Jun 09, 2026 · Elevated fatigue</p><p className="mt-1 text-sm text-gray-500">Advised follow-up blood work and sleep monitoring.</p></div><div className="rounded-xl border border-gray-200 p-4"><p className="text-sm font-semibold text-gray-900">Apr 18, 2026 · Dizziness</p><p className="mt-1 text-sm text-gray-500">Resolved after medication adjustment.</p></div></div></section></div><aside><form className="card sticky top-24 p-6"><h2 className="text-lg font-bold text-gray-950">Doctor notes</h2><p className="mt-1 text-sm text-gray-500">Add clinical observations and follow-up instructions.</p><textarea rows="12" className="form-input mt-5 resize-none" placeholder="Enter notes for this patient..." /><label className="mt-4 flex items-center gap-3 text-sm text-gray-600"><input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600" /> Notify patient after saving</label><button type="submit" className="btn-primary mt-5 w-full">Save doctor notes</button></form></aside></div>
            </DashboardLayout>
        </div>
    );
}

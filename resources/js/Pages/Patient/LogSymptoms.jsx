import Icon from '../../Components/Icons';
import DashboardLayout from '../../Layouts/DashboardLayout';

const nav = [
    { label: 'Dashboard', href: '/patient/dashboard', icon: 'dashboard' },
    { label: 'Log Symptoms', href: '/patient/symptoms', icon: 'activity' },
    { label: 'My Records', href: '/patient/records', icon: 'records' },
    { label: 'Subscription', href: '/billing', icon: 'billing' },
];

export default function LogSymptoms() {
    return (
        <div className="min-h-screen bg-gray-50">
            <DashboardLayout items={nav} current="Log Symptoms" footerLabel="Your records are protected">
                <header><p className="text-sm font-semibold text-blue-600">AI symptom intake</p><h1 className="mt-1 text-3xl font-bold text-gray-950">Log Symptoms</h1><p className="mt-2 text-sm text-gray-500">Describe what you are experiencing in your own words.</p></header>
                <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_340px]">
                    <form className="card p-6"><label htmlFor="symptoms" className="text-sm font-bold text-gray-800">What symptoms are you experiencing?</label><p className="mt-1 text-sm text-gray-500">Include duration, severity, triggers, and anything that makes the symptoms better or worse.</p><textarea id="symptoms" rows="10" className="form-input mt-4 resize-none" placeholder="Example: I have had a mild headache and fatigue for two days..." /><div className="mt-4 grid gap-4 sm:grid-cols-2"><div><label className="mb-2 block text-sm font-semibold text-gray-700">Severity</label><select className="form-input"><option>Mild</option><option>Moderate</option><option>Severe</option></select></div><div><label className="mb-2 block text-sm font-semibold text-gray-700">Duration</label><input className="form-input" placeholder="e.g. 2 days" /></div></div><div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end"><button type="reset" className="btn-secondary">Clear form</button><button type="submit" className="btn-primary"><Icon name="sparkle" className="mr-2 h-4 w-4" /> Submit symptoms</button></div></form>
                    <aside className="space-y-4"><section className="rounded-2xl bg-blue-600 p-5 text-white"><Icon name="shield" className="h-6 w-6" /><h2 className="mt-4 font-bold">Important notice</h2><p className="mt-2 text-sm leading-6 text-blue-100">This tool supports care decisions but does not replace emergency services or professional diagnosis.</p></section><section className="card p-5"><h2 className="font-bold text-gray-950">Helpful details</h2><ul className="mt-3 space-y-3 text-sm text-gray-600"><li>• When symptoms started</li><li>• Pain or discomfort level</li><li>• Current medication</li><li>• Existing health conditions</li></ul></section></aside>
                </div>
            </DashboardLayout>
        </div>
    );
}

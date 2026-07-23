import Icon from './Icons';

export default function StatCard({ label, value, helper, icon = 'activity' }) {
    return (
        <article className="card p-5">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <p className="text-sm font-medium text-gray-500">{label}</p>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-950">{value}</p>
                    {helper && <p className="mt-2 text-xs font-medium text-emerald-600">{helper}</p>}
                </div>
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon name={icon} />
                </span>
            </div>
        </article>
    );
}

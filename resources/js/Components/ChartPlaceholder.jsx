export default function ChartPlaceholder({ title, description = 'Chart.js visualization placeholder' }) {
    return (
        <section className="card p-5">
            <div className="mb-4">
                <h2 className="text-base font-bold text-gray-950">{title}</h2>
                <p className="mt-1 text-sm text-gray-500">{description}</p>
            </div>
            <div className="flex h-64 items-center justify-center rounded-xl bg-gray-100 text-sm font-semibold text-gray-400">
                Chart Placeholder
            </div>
        </section>
    );
}

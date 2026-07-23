import Icon from './Icons';

export default function PricingCard({ name, price, description, features, featured = false, action = 'Choose plan' }) {
    return (
        <article className={`relative flex h-full flex-col rounded-2xl border bg-white p-6 shadow-sm ${featured ? 'border-blue-600 ring-4 ring-blue-50' : 'border-gray-200'}`}>
            {featured && <span className="absolute right-5 top-5 rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700">Most popular</span>}
            <h3 className="text-lg font-bold text-gray-950">{name}</h3>
            <p className="mt-2 text-sm leading-6 text-gray-500">{description}</p>
            <div className="mt-6 flex items-end gap-1">
                <span className="text-4xl font-bold tracking-tight text-gray-950">{price}</span>
                {price !== 'Custom' && <span className="pb-1 text-sm text-gray-500">/month</span>}
            </div>
            <ul className="mt-6 flex-1 space-y-3">
                {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-gray-600">
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-blue-50 text-blue-600">
                            <Icon name="check" className="h-3.5 w-3.5" />
                        </span>
                        {feature}
                    </li>
                ))}
            </ul>
            <button type="button" className={`mt-8 w-full ${featured ? 'btn-primary' : 'btn-secondary'}`}>{action}</button>
        </article>
    );
}

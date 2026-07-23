import Icon from '../../Components/Icons';
import PublicLayout from '../../Layouts/PublicLayout';

const results = [
    { condition: 'Tension headache', confidence: 82, detail: 'Commonly associated with pressure-like discomfort, fatigue, and stress.' },
    { condition: 'Dehydration', confidence: 61, detail: 'May contribute to headache, low energy, and mild dizziness.' },
    { condition: 'Viral illness', confidence: 34, detail: 'Consider if additional symptoms such as fever or sore throat appear.' },
];

export default function SymptomChecker() {
    return (
        <PublicLayout>
            <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
                <header className="mx-auto max-w-2xl text-center"><span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-sm font-semibold text-blue-700"><Icon name="sparkle" className="h-4 w-4" /> AI-assisted intake</span><h1 className="mt-5 text-4xl font-bold tracking-tight text-gray-950">AI Symptom Checker</h1><p className="mt-4 text-lg text-gray-600">Describe your symptoms and receive a structured list of possible conditions for informational purposes.</p></header>
                <section className="card mt-10 p-6"><form><label htmlFor="checker-symptoms" className="text-sm font-bold text-gray-800">Your symptoms</label><textarea id="checker-symptoms" rows="7" className="form-input mt-3 resize-none" placeholder="Describe symptoms, duration, severity, and relevant context..." /><div className="mt-5 flex justify-end"><button type="submit" className="btn-primary"><Icon name="sparkle" className="mr-2 h-4 w-4" /> Analyze with AI</button></div></form></section>
                <section className="mt-8"><div className="flex items-end justify-between"><div><p className="text-sm font-semibold text-blue-600">Sample output</p><h2 className="mt-1 text-2xl font-bold text-gray-950">Possible conditions</h2></div><span className="text-xs font-semibold text-gray-400">Not a diagnosis</span></div><div className="mt-4 space-y-4">{results.map((result) => <article key={result.condition} className="card p-5"><div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><div><h3 className="font-bold text-gray-950">{result.condition}</h3><p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">{result.detail}</p></div><div className="min-w-40"><div className="flex items-center justify-between text-xs font-semibold"><span className="text-gray-500">Confidence</span><span className="text-blue-700">{result.confidence}%</span></div><div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-100"><div className="h-full rounded-full bg-blue-600" style={{ width: `${result.confidence}%` }} /></div></div></div></article>)}</div></section>
                <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-900"><strong>Safety note:</strong> Seek urgent medical care for severe symptoms, breathing difficulty, chest pain, confusion, or any emergency warning signs.</div>
            </main>
        </PublicLayout>
    );
}

export default function AppLogo({ compact = false }) {
    return (
        <a href="/" className="inline-flex items-center gap-3" aria-label="MediMind home">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-600 text-lg font-bold text-white shadow-sm">M+</span>
            {!compact && (
                <span>
                    <span className="block text-base font-bold leading-tight text-gray-950">MediMind AI</span>
                    <span className="block text-xs font-medium text-gray-500">Healthcare intelligence</span>
                </span>
            )}
        </a>
    );
}

import AppLogo from './AppLogo';
import Icon from './Icons';

export default function Sidebar({ items, current, open, onClose, footerLabel = 'HIPAA-ready workspace' }) {
    return (
        <>
            <div
                className={`fixed inset-0 z-40 bg-gray-950/40 transition lg:hidden ${open ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
                onClick={onClose}
                aria-hidden="true"
            />
            <aside className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-gray-200 bg-white transition-transform duration-300 lg:top-16 lg:z-30 lg:w-64 lg:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex h-16 items-center justify-between border-b border-gray-200 px-5 lg:hidden">
                    <AppLogo />
                    <button type="button" onClick={onClose} className="rounded-lg p-2 text-gray-500 hover:bg-gray-100" aria-label="Close navigation">
                        <Icon name="close" />
                    </button>
                </div>

                <nav className="flex-1 space-y-1 overflow-y-auto p-4" aria-label="Dashboard navigation">
                    {items.map((item) => {
                        const active = current === item.label;
                        return (
                            <a
                                key={item.label}
                                href={item.href}
                                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition ${active ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`}
                            >
                                <Icon name={item.icon} className="h-5 w-5" />
                                <span>{item.label}</span>
                                {item.badge && <span className="ml-auto rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-700">{item.badge}</span>}
                            </a>
                        );
                    })}
                </nav>

                <div className="m-4 rounded-2xl bg-blue-600 p-4 text-white">
                    <Icon name="shield" className="mb-3 h-6 w-6" />
                    <p className="text-sm font-semibold">{footerLabel}</p>
                    <p className="mt-1 text-xs leading-5 text-blue-100">Encrypted records, role-based access, and secure workflows.</p>
                </div>
            </aside>
        </>
    );
}

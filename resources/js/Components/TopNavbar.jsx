import AppLogo from './AppLogo';
import Icon from './Icons';

export default function TopNavbar({ onMenuClick, authenticated = true }) {
    return (
        <header className="fixed inset-x-0 top-0 z-40 h-16 border-b border-gray-200 bg-white/95 backdrop-blur">
            <div className="flex h-full items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-3">
                    {authenticated && (
                        <button
                            type="button"
                            onClick={onMenuClick}
                            className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 lg:hidden"
                            aria-label="Open navigation"
                        >
                            <Icon name="menu" />
                        </button>
                    )}
                    <AppLogo />
                </div>

                {!authenticated ? (
                    <nav className="flex items-center gap-2" aria-label="Account navigation">
                        <a href="/login" className="btn-secondary hidden sm:inline-flex">Login</a>
                        <a href="/register" className="btn-primary">Sign Up</a>
                    </nav>
                ) : (
                    <div className="flex items-center gap-2 sm:gap-3">
                        <button type="button" className="relative rounded-lg p-2 text-gray-500 hover:bg-gray-100" aria-label="Notifications">
                            <Icon name="bell" />
                            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-blue-600 ring-2 ring-white" />
                        </button>
                        <button type="button" className="flex items-center gap-2 rounded-xl border border-gray-200 p-1.5 pr-2.5 hover:bg-gray-50">
                            <span className="grid h-8 w-8 place-items-center rounded-lg bg-blue-100 text-sm font-bold text-blue-700">JD</span>
                            <span className="hidden text-left sm:block">
                                <span className="block text-sm font-semibold leading-tight text-gray-900">Jordan Davis</span>
                                <span className="block text-xs text-gray-500">Premium plan</span>
                            </span>
                            <Icon name="chevronDown" className="h-4 w-4 text-gray-400" />
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
}

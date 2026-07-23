import { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import TopNavbar from '../Components/TopNavbar';

export default function DashboardLayout({ children, items, current, footerLabel }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50">
            <TopNavbar onMenuClick={() => setSidebarOpen(true)} />
            <Sidebar
                items={items}
                current={current}
                open={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
                footerLabel={footerLabel}
            />
            <main className="pt-16 lg:pl-64">
                <div className="mx-auto max-w-screen-2xl p-4 sm:p-6 lg:p-8">{children}</div>
            </main>
        </div>
    );
}

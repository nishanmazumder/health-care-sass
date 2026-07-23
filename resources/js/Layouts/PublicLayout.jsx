import TopNavbar from '../Components/TopNavbar';

export default function PublicLayout({ children }) {
    return (
        <div className="min-h-screen bg-gray-50">
            <TopNavbar authenticated={false} />
            <main className="pt-16">{children}</main>
        </div>
    );
}

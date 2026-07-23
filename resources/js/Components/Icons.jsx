const paths = {
    menu: <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />,
    close: <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />,
    dashboard: <path strokeLinecap="round" strokeLinejoin="round" d="M3 13h8V3H3v10Zm0 8h8v-6H3v6Zm10 0h8V11h-8v10Zm0-18v6h8V3h-8Z" />,
    activity: <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h4l2.5-7 5 14 2.5-7H21" />,
    records: <path strokeLinecap="round" strokeLinejoin="round" d="M6 3h9l3 3v15H6V3Zm9 0v4h4M9 11h6M9 15h6" />,
    billing: <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M5 5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm2 9h4" />,
    users: <path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm13 10v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />,
    chart: <path strokeLinecap="round" strokeLinejoin="round" d="M4 19V9m6 10V5m6 14v-7m4 7H2" />,
    search: <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" />,
    chevronDown: <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />,
    check: <path strokeLinecap="round" strokeLinejoin="round" d="m5 12 4 4L19 6" />,
    sparkle: <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l1.4 4.1L17.5 8.5l-4.1 1.4L12 14l-1.4-4.1L6.5 8.5l4.1-1.4L12 3Zm6 10 .8 2.2L21 16l-2.2.8L18 19l-.8-2.2L15 16l2.2-.8L18 13Z" />,
    bell: <path strokeLinecap="round" strokeLinejoin="round" d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 7h18s-3 0-3-7M10 19h4" />,
    arrowRight: <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />,
    shield: <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Zm-3-10 2 2 4-4" />,
    stethoscope: <path strokeLinecap="round" strokeLinejoin="round" d="M6 3v5a4 4 0 0 0 8 0V3M4 3h4m4 0h4m-2 13a4 4 0 0 0 8 0v-1a2 2 0 1 0-4 0v1a2 2 0 0 1-4 0v-4" />,
};

export default function Icon({ name, className = 'h-5 w-5' }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            {paths[name] ?? paths.activity}
        </svg>
    );
}

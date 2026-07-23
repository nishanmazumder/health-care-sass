import AppLogo from '../../Components/AppLogo';

const sections = [
  {
    title: 'Public and authentication',
    pages: [
      ['Landing page', '/'],
      ['Login', '/login'],
      ['Register', '/register'],
      ['Subscription upgrade', '/subscription/upgrade'],
      ['AI symptom checker', '/symptom-checker'],
    ],
  },
  {
    title: 'Patient workspace',
    pages: [
      ['Patient dashboard', '/patient/dashboard'],
      ['Log symptoms', '/patient/symptoms'],
      ['My records', '/patient/records'],
      ['Subscription and billing', '/billing'],
    ],
  },
  {
    title: 'Doctor workspace',
    pages: [
      ['Doctor dashboard', '/doctor/dashboard'],
      ['Patient records', '/doctor/patients'],
      ['Patient detail', '/doctor/patients/1'],
      ['Doctor analytics', '/doctor/analytics'],
    ],
  },
  {
    title: 'Administration and reporting',
    pages: [
      ['User management', '/admin/users'],
      ['Subscription overview', '/admin/subscriptions'],
      ['System analytics', '/admin/analytics'],
      ['General analytics', '/analytics'],
    ],
  },
];

export default function DemoIndex() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <AppLogo />
          <a href="/" className="btn-secondary">Open landing page</a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-wider text-blue-600">Vite preview directory</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-950">AI Healthcare SaaS screens</h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Use this directory to review each static React and Tailwind layout. Forms, charts, Stripe, AI responses, and authentication are visual placeholders only.
          </p>
        </section>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {sections.map((section) => (
            <section key={section.title} className="card p-6">
              <h2 className="text-lg font-bold text-gray-950">{section.title}</h2>
              <div className="mt-4 space-y-2">
                {section.pages.map(([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    className="flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3 text-sm font-semibold text-gray-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                  >
                    <span>{label}</span>
                    <span aria-hidden="true">→</span>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}

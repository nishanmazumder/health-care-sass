# MediMind AI Healthcare SaaS

A complete static frontend preview for an AI healthcare SaaS product. The project runs independently with Vite, React, React Router, and Tailwind CSS. It also keeps the Laravel-style `resources/js` and `resources/css` structure so the same components can later be connected to Laravel and Inertia.

## Included screens

- Landing page
- Login and registration
- Subscription upgrade
- Patient dashboard, symptom form, and records
- Doctor dashboard, patient list, patient details, and analytics
- Admin users, subscriptions, and system analytics
- AI symptom checker
- Subscription and billing
- General analytics
- `/demo` screen directory for reviewing every layout

## Requirements

- Node.js 20 or newer recommended
- npm 10 or newer recommended

The `.nvmrc` file is included, so users of NVM can run:

```bash
nvm use
```

## Install and run

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:5173
```

Open the page directory:

```text
http://localhost:5173/demo
```

## Production build

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`. The preview server is available at:

```text
http://localhost:4173
```

## Linting

```bash
npm run lint
```

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create an optimized production build |
| `npm run preview` | Preview the production build |
| `npm run lint` | Check JavaScript and JSX files with ESLint |

## Main project structure

```text
.
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.js
├── public/
│   └── favicon.svg
└── resources/
    ├── css/
    │   └── app.css
    └── js/
        ├── app.jsx
        ├── App.jsx
        ├── Components/
        ├── Layouts/
        └── Pages/
```

## Preview routes

```text
/                              Landing page
/demo                          Screen directory
/login                         Login
/register                      Register
/subscription/upgrade          Subscription upgrade
/patient/dashboard             Patient dashboard
/patient/symptoms              Log symptoms
/patient/records               Patient records
/doctor/dashboard              Doctor dashboard
/doctor/patients               Doctor patient list
/doctor/patients/1             Patient detail
/doctor/analytics              Doctor analytics
/admin/users                   Admin user management
/admin/subscriptions           Subscription overview
/admin/analytics               System analytics
/symptom-checker               AI symptom checker
/billing                       Billing and plans
/analytics                     General analytics
```

## Static demo behavior

This package intentionally contains no backend logic. Forms, authentication, Stripe checkout, AI analysis, database records, and charts are placeholders. Links and responsive navigation are available for reviewing the layouts.

## Laravel and Inertia migration

The UI source already uses Laravel-friendly paths:

```text
resources/js/Pages
resources/js/Components
resources/js/Layouts
resources/css/app.css
```

When integrating into Laravel:

1. Install Laravel's Vite plugin and Inertia React dependencies.
2. Replace the standalone `BrowserRouter` entry with `createInertiaApp`.
3. Replace plain anchor elements with Inertia `Link` components where appropriate.
4. Connect page props, forms, validation, Stripe, charts, and API responses to backend routes.
5. Use `routes-example.php` as an initial route reference, then add controllers and middleware.

## Design system

- Primary color: `#2563eb`
- Background: gray 50
- Cards: white, gray border, soft shadow
- Buttons: reusable `.btn-primary` and `.btn-secondary`
- Inputs: reusable `.form-input`
- Dashboard navigation: fixed top bar and responsive sidebar

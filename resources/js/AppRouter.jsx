import { Navigate, Route, Routes } from 'react-router-dom';
import AdminDashboard from './Pages/Admin/Dashboard';
import Analytics from './Pages/Analytics/Index';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import Billing from './Pages/Billing/Index';
import DemoIndex from './Pages/Demo/Index';
import DoctorAnalytics from './Pages/Doctor/Analytics';
import DoctorDashboard from './Pages/Doctor/Dashboard';
import DoctorPatientDetail from './Pages/Doctor/PatientDetail';
import PatientDashboard from './Pages/Patient/Dashboard';
import LogSymptoms from './Pages/Patient/LogSymptoms';
import PatientRecords from './Pages/Patient/Records';
import SubscriptionUpgrade from './Pages/Subscription/Upgrade';
import SymptomChecker from './Pages/SymptomChecker/Index';
import Welcome from './Pages/Welcome';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/demo" element={<DemoIndex />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<Login />} />
      <Route path="/subscription/upgrade" element={<SubscriptionUpgrade />} />

      <Route path="/patient/dashboard" element={<PatientDashboard />} />
      <Route path="/patient/symptoms" element={<LogSymptoms />} />
      <Route path="/patient/records" element={<PatientRecords />} />

      <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
      <Route path="/doctor/patients" element={<DoctorDashboard />} />
      <Route path="/doctor/patients/:patientId" element={<DoctorPatientDetail />} />
      <Route path="/doctor/analytics" element={<DoctorAnalytics />} />

      <Route path="/admin" element={<Navigate to="/admin/users" replace />} />
      <Route path="/admin/users" element={<AdminDashboard />} />
      <Route path="/admin/subscriptions" element={<AdminDashboard />} />
      <Route path="/admin/analytics" element={<AdminDashboard />} />

      <Route path="/symptom-checker" element={<SymptomChecker />} />
      <Route path="/billing" element={<Billing />} />
      <Route path="/analytics" element={<Analytics />} />

      <Route path="/about" element={<Welcome />} />
      <Route path="/contact" element={<Welcome />} />
      <Route path="/privacy" element={<Welcome />} />
      <Route path="*" element={<Navigate to="/demo" replace />} />
    </Routes>
  );
}

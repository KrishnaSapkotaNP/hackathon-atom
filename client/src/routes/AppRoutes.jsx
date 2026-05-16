import Login from '../pages/auth/Login';
import EmployeeDashboard from '../pages/employee/EmployeeDashboard';
import ManagerDashboard from '../pages/manager/ManagerDashboard';
import AdminDashboard from '../pages/admin/AdminDashboard';

export default function AppRoutes({ view = 'employee', isAuthenticated = true }) {
  if (!isAuthenticated) {
    return <Login />;
  }

  switch (view) {
    case 'manager':
      return <ManagerDashboard />;
    case 'admin':
      return <AdminDashboard />;
    default:
      return <EmployeeDashboard />;
  }
}

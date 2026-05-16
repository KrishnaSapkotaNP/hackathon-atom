import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function DashboardLayout({ children }) {
  return (
    <div className='dashboard-layout'>
      <Sidebar />
      <div className='dashboard-main'>
        <Navbar />
        <main className='dashboard-content'>{children}</main>
      </div>
    </div>
  );
}

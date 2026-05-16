import DashboardLayout from '../../components/layout/DashboardLayout';
import ApprovalTable from '../../components/tables/ApprovalTable';

const rows = [
  { id: 1, request: 'Goal change', requestedBy: 'S. Patel', status: 'Pending' },
  { id: 2, request: 'Quarterly check-in', requestedBy: 'M. Diaz', status: 'Pending' },
];

export default function Approvals() {
  return (
    <DashboardLayout>
      <section className='dashboard-section'>
        <h1>Approvals</h1>
        <ApprovalTable rows={rows} />
      </section>
    </DashboardLayout>
  );
}

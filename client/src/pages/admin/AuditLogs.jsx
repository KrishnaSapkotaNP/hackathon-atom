import DashboardLayout from '../../components/layout/DashboardLayout';
import AuditTable from '../../components/tables/AuditTable';

const rows = [
  { id: 1, action: 'Permission granted', actor: 'Admin', time: '08:11' },
  { id: 2, action: 'Goal archived', actor: 'System', time: '12:47' },
];

export default function AuditLogs() {
  return (
    <DashboardLayout>
      <section className='dashboard-section'>
        <h1>Audit logs</h1>
        <AuditTable rows={rows} />
      </section>
    </DashboardLayout>
  );
}

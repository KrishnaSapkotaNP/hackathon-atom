import DashboardLayout from '../../components/layout/DashboardLayout';
import Button from '../../components/ui/Button';

export default function Checkins() {
  return (
    <DashboardLayout>
      <section className='dashboard-section'>
        <h1>Check-ins</h1>
        <p>Log weekly progress and highlight blockers.</p>
        <Button>Start check-in</Button>
      </section>
    </DashboardLayout>
  );
}

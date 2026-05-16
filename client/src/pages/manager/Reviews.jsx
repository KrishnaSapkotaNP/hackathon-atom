import DashboardLayout from '../../components/layout/DashboardLayout';
import Button from '../../components/ui/Button';

export default function Reviews() {
  return (
    <DashboardLayout>
      <section className='dashboard-section'>
        <h1>Reviews</h1>
        <p>Track upcoming performance reviews and feedback sessions.</p>
        <Button>Start review cycle</Button>
      </section>
    </DashboardLayout>
  );
}

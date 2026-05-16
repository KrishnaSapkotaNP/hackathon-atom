import DashboardLayout from '../../components/layout/DashboardLayout';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';

export default function CreateGoal() {
  return (
    <DashboardLayout>
      <section className='dashboard-section'>
        <h1>Create goal</h1>
        <form className='form-card' onSubmit={(event) => event.preventDefault()}>
          <Input label='Title' placeholder='Describe the goal' required />
          <Input label='Owner' placeholder='Owner name' required />
          <Input label='Due date' type='date' required />
          <Button type='submit'>Save goal</Button>
        </form>
      </section>
    </DashboardLayout>
  );
}

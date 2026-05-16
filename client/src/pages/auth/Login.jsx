import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';

export default function Login() {
  return (
    <div className='auth-page'>
      <form className='auth-card' onSubmit={(event) => event.preventDefault()}>
        <h1>Sign in</h1>
        <Input label='Email' type='email' placeholder='you@company.com' required />
        <Input label='Password' type='password' placeholder='password' required />
        <Button type='submit'>Continue</Button>
      </form>
    </div>
  );
}

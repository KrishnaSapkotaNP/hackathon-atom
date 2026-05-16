export default function GoalCard({ title, owner, status, due }) {
  return (
    <div className='card goal-card'>
      <div className='goal-title'>{title}</div>
      <div className='goal-meta'>Owner: {owner}</div>
      <div className='goal-meta'>Status: {status}</div>
      {due ? <div className='goal-meta'>Due: {due}</div> : null}
    </div>
  );
}

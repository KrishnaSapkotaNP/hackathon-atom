export default function StatCard({ label, value, trend }) {
  return (
    <div className='card stat-card'>
      <div className='stat-label'>{label}</div>
      <div className='stat-value'>{value}</div>
      {trend ? <div className='stat-trend'>{trend}</div> : null}
    </div>
  );
}

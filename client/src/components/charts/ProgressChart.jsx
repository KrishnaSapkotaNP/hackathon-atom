export default function ProgressChart({ value = 0 }) {
  return (
    <div className='chart chart-progress'>
      <div className='chart-label'>Progress</div>
      <div className='chart-value'>{value}%</div>
    </div>
  );
}

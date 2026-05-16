export default function PieStatusChart({ segments = [] }) {
  return (
    <div className='chart chart-pie'>
      <div className='chart-label'>Status Breakdown</div>
      <ul className='chart-legend'>
        {segments.length === 0 ? (
          <li>Waiting for data</li>
        ) : (
          segments.map((segment, index) => (
            <li key={segment.label ?? index}>
              {segment.label}: {segment.value}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

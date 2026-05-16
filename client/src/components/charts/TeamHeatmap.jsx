export default function TeamHeatmap({ cells = [] }) {
  return (
    <div className='chart chart-heatmap'>
      <div className='chart-label'>Team Activity</div>
      <div className='heatmap-grid'>
        {cells.length === 0 ? (
          <div className='heatmap-empty'>No activity yet</div>
        ) : (
          cells.map((cell, index) => (
            <div key={cell.id ?? index} className='heatmap-cell'>
              {cell.value}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

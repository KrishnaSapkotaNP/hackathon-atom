export default function GoalTable({ rows = [] }) {
  return (
    <table className='table goal-table'>
      <thead>
        <tr>
          <th>Goal</th>
          <th>Owner</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {rows.length === 0 ? (
          <tr>
            <td colSpan='3'>No goals yet</td>
          </tr>
        ) : (
          rows.map((row, index) => (
            <tr key={row.id ?? index}>
              <td>{row.title}</td>
              <td>{row.owner}</td>
              <td>{row.status}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

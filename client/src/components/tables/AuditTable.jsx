export default function AuditTable({ rows = [] }) {
  return (
    <table className='table audit-table'>
      <thead>
        <tr>
          <th>Action</th>
          <th>Actor</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {rows.length === 0 ? (
          <tr>
            <td colSpan='3'>No audit events</td>
          </tr>
        ) : (
          rows.map((row, index) => (
            <tr key={row.id ?? index}>
              <td>{row.action}</td>
              <td>{row.actor}</td>
              <td>{row.time}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

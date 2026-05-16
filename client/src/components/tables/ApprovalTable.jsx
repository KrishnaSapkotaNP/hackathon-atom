export default function ApprovalTable({ rows = [] }) {
  return (
    <table className='table approval-table'>
      <thead>
        <tr>
          <th>Request</th>
          <th>Requested By</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {rows.length === 0 ? (
          <tr>
            <td colSpan='3'>No pending approvals</td>
          </tr>
        ) : (
          rows.map((row, index) => (
            <tr key={row.id ?? index}>
              <td>{row.request}</td>
              <td>{row.requestedBy}</td>
              <td>{row.status}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

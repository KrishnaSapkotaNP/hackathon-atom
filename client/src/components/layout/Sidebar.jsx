export default function Sidebar() {
  return (
    <aside className='sidebar'>
      <div className='sidebar-brand'>Atom</div>
      <nav className='sidebar-nav'>
        <a href='#/dashboard'>Dashboard</a>
        <a href='#/goals'>Goals</a>
        <a href='#/checkins'>Check-ins</a>
        <a href='#/reviews'>Reviews</a>
        <a href='#/reports'>Reports</a>
      </nav>
    </aside>
  );
}

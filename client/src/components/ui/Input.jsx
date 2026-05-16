export default function Input({ label, id, ...props }) {
  const normalizedLabel = (label ?? '').trim().toLowerCase().replace(/\s+/g, '-');
  const inputId = id || `input-${normalizedLabel || 'field'}`;

  if (!label) {
    return <input id={inputId} className='input-control' {...props} />;
  }

  return (
    <label className='input-field' htmlFor={inputId}>
      <span className='input-label'>{label}</span>
      <input id={inputId} className='input-control' {...props} />
    </label>
  );
}

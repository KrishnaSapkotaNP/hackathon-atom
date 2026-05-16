export default function Modal({ open, title, children, onClose }) {
  if (!open) {
    return null;
  }

  return (
    <div className='modal-backdrop' role='dialog' aria-modal='true'>
      <div className='modal'>
        <div className='modal-header'>
          <div className='modal-title'>{title}</div>
          <button type='button' className='modal-close' onClick={onClose}>
            Close
          </button>
        </div>
        <div className='modal-body'>{children}</div>
      </div>
    </div>
  );
}

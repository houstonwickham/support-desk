import { useSelector } from 'react-redux';

import React from 'react';

function NoteItem({ note }) {
  const { user } = useSelector((state) => state.auth);

  return (
    <div
      className='note'
      style={{
        backgroundColor: note.isStaff ? 'rgba(0,0,0,0.7' : '#ffffff',
        color: note.isStaff ? '#ffffff' : '#000000',
      }}
    >
      <h4>
        Note from {note.isStaff ? <span>Staff</span> : <span>{user.name}</span>}
      </h4>
      <p>{note.text}</p>
      <p className='note-date'>
        {new Date(note.createdAt).toLocaleString('en-US')}
      </p>
    </div>
  );
}

export default NoteItem;

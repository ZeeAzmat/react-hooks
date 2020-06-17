import React, { useState } from 'react';

const NewSongForm = ({addSong}) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addSong(title);
    setTitle('');
  }

  return (
    <form className="new-song-form" onSubmit={handleSubmit}>
      <label>Song name:</label>
      <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="submit" value="Add Song" />
    </form>
  );
}

export default NewSongForm;

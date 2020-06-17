import { v4 as uuidv4 } from 'uuid';
import NewSongForm from './NewSongForm';
import React, { useState, useEffect } from 'react';

const SongList = () => {
  const [songList, setSongList] = useState([
    { title: 'This wild darkness', id: uuidv4() },
    { title: 'Hurricane', id: uuidv4() },
    { title: 'Fear Inoculant', id: uuidv4() },
    { title: 'Pnuema', id: uuidv4() },
  ]);

  const addSong = title => {
    setSongList([...songList, { title, id: uuidv4() }]);
  }

  useEffect(() => {
    console.log('hi there');
  }, [songList]);

  return (
    <div className="song-list">
      <ul>
        { songList.map((song) => {
          return <li key={song.id}>{song.title}</li>
        })}
      </ul>

      <NewSongForm addSong={addSong} />
      {/* <button onClick={addSong}>Add Song!</button> */}
    </div>
  );
}

export default SongList;

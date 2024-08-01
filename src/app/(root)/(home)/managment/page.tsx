import React, { useState } from 'react';

interface Artist {
  name: string;
  genre: string;
}

function Page() {
  // State to manage the list of artists
  const [artists, setArtists] = useState<Artist[]>([]);
  // State to manage form inputs
  const [artistName, setArtistName] = useState<string>('');
  const [artistGenre, setArtistGenre] = useState<string>('');

  // Handler to add a new artist
  const addArtist = () => {
    if (artistName && artistGenre) {
      setArtists([...artists, { name: artistName, genre: artistGenre }]);
      setArtistName('');
      setArtistGenre('');
    } else {
      alert('Please fill in both fields');
    }
  };

  return (
    <div className='h-full'>
      <div>Upcoming Event</div>
      <div>Event Packages</div>
      <div>List of Halls Available to Book</div>

      <div>
        <h2>Add Artist</h2>
        <input
          type='text'
          placeholder='Artist Name'
          value={artistName}
          onChange={(e) => setArtistName(e.target.value)}
        />
        <input
          type='text'
          placeholder='Artist Genre'
          value={artistGenre}
          onChange={(e) => setArtistGenre(e.target.value)}
        />
        <button onClick={addArtist}>Add Artist</button>
      </div>

      <div>
        <h2>Artists List</h2>
        <ul>
          {artists.map((artist, index) => (
            <li key={index}>{`${artist.name} - ${artist.genre}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Page;

import React, { useState } from 'react';

function MusicList() {


  const [name, setName] = useState("");
  const [music, setMusic] = useState();

  const newMusic = () => {
    const uploadData = new FormData();
    uploadData.append('name', name);
    uploadData.append('musicfile', music, music.name);

    fetch('https://missionaryfam.herokuapp.com/music/', {
      method: 'POST',
      body: uploadData
    })
      .then(res => console.log(res))
      .catch(error => console.log(error))
  }

  return (
    <div>
      <h3>Upload images with React</h3>
      <label>
        Name
        <input type="text" value={name} onChange={(evt) => setName(evt.target.value)} />
      </label>
      <br />
      <label>
        Add
        <input type="file" onChange={(evt) => setMusic(evt.target.files[0])} />
      </label>
      <br />
      <button onClick={() => newMusic()}>New Music</button>
    </div>
  )
}

export default MusicList;
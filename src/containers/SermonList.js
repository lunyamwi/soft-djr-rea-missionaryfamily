import React, { useState } from 'react';

function SermonList() {


    const [name, setName] = useState("");
    const [sermon, setSermon] = useState();

    const newSermon = () => {
        const uploadData = new FormData();
        uploadData.append('name', name);
        uploadData.append('sermonfile', sermon, sermon.name);

        fetch('http://127.0.0.1:8000/sermons/', {
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
        <input type="file" onChange={(evt) => setSermon(evt.target.files[0])} />
            </label>
            <br />
            <button onClick={() => newSermon()}>New Sermon</button>
        </div>
    )
}

export default SermonList;
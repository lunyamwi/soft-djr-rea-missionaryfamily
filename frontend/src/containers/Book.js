import React, { useState } from 'react';

function BookList() {


    const [title, setTitle] = useState("");
    const [cover, setCever] = useState();
    const [pdf_books, setPdfbooks] = useState();

    const newBook = () => {
        const uploadData = new FormData();
        uploadData.append('title', title);
        uploadData.append('cover', cover, cover.name);
        uploadData.append('pdf_books', pdf_books, pdf_books);

        fetch('https://missionaryfam.herokuapp.com/books/', {
            method: 'POST',
            body: uploadData
        })
            .then(res => console.log(res))
            .catch(error => console.log(error))
    }

    return (
        <div className="App">
            <h3>Upload images with React</h3>
            <label>
                Title
        <input type="text" value={title} onChange={(evt) => setTitle(evt.target.value)} />
            </label>
            <br />
            <label>
                Cover
        <input type="file" onChange={(evt) => setCever(evt.target.files[0])} />
            </label>
            <label>
                Book
        <input type="file" onChange={(evt) => setPdfbooks(evt.target.files[0])} />
            </label>
            <br />
            <button onClick={() => newBook()}>New Book</button>
        </div>
    )
}

export default BookList;
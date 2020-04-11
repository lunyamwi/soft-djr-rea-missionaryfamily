import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
// import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';

const IMAGES =
  [{
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    isSelected: false,
    caption: "After Rain (Jeshu John - designerspics.com)"
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
    caption: "Boats (Jeshu John - designerspics.com)"
  },

  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212
  },
  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212
  },
  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212
  },
  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212
  },
  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212
  },
  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212
  }
  ]







function ImageList() {


  const [title, setTitle] = useState("");
  const [images, setImages] = useState();
  const newImage = () => {
    const uploadData = new FormData();
    uploadData.append('title', title);
    uploadData.append('images', images, images.name);

    fetch('http://127.0.0.1:8000/images/', {
      method: 'POST',
      body: uploadData
    })
      .then(res => console.log(res))
      .catch(error => console.log(error))
  }

  return (
    <div>
      <h3 className="bg-red">Upload images with React</h3>
      <label>
        Title
        <input type="text" value={title} onChange={(evt) => setTitle(evt.target.value)} />
      </label>
      <br />
      <label>
        Cover
        <input type="file" onChange={(evt) => setImages(evt.target.files[0])} />
      </label>
      <br />
      {/* <button onClick={() => newImage()}>Upload Data</button> */}
      <Button variant="success" onClick={() => newImage()}>Upload</Button>{' '}
      <Col md={12}
        className="py-5">
        <Gallery images={IMAGES} />
      </Col>
    </div>


  )
}
export default ImageList;
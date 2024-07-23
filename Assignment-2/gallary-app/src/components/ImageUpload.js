import axios from "axios";
import React, { useState } from "react";

function ImageUpload() {
  const [image, setImage] = useState('');

  function handleImage(event) {
    console.log(event.target.files);
    setImage(event.target.files[0]);
  }

  function handleApi() {
    if (!image) {
      console.error("No image selected");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    for (const x of formData.entries()) {
      console.log(x);
    }

    axios
      .post("http://localhost:3001/gallary-app/public/uploaded-images/", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
  }
  return (
    <div>
      <input type="file" name="file" onChange={handleImage} />
      <button onClick={handleApi}>Submit</button>
    </div>
  );
}

export default ImageUpload;

import React, { useEffect } from "react";
import { Form, Row ,Button} from "react-bootstrap";
import bsCustomFileInput from "bs-custom-file-input"
import "bootstrap/dist/css/bootstrap.min.css";





function VideoUpload() {
  useEffect(() => {
    bsCustomFileInput.init();
  }, []);
    return (
        <div>
      <Form action='http://localhost:5000/api/uploads' method='POST' enctype="multipart/form-data" horizontal className="shadow-lg p-3 mb-5 bg-white rounded">
      <Form.Group as={Row}>
        <Form.File
          type="file" name="video"
          className="custom-file-label"
          id="inputGroupFile01"
          custom
        />
      </Form.Group>
      <div>
    <Button className="btn btn-primary mt-2 ml-2" type="submit">Upload</Button>
  </div>
     </Form>
        </div>
    );
  }

export default VideoUpload;

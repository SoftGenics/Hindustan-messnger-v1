import React from 'react';
import { Form,FormControl ,FormGroup,FormLabel,Button,Row} from "react-bootstrap";
import { useHistory } from "react-router-dom";

function HeadlinesTwo() {
  return (
    <div>
        <Form action='http://localhost:5000/api/headlinetwo' method='POST' enctype="multipart/form-data" horizontal className="shadow-lg p-3 mb-5 bg-white rounded">
  <FormGroup controlId="formControlsTextarea">
  <FormLabel>Two Headlines</FormLabel>
  <FormControl componentClass="textarea" name="headline2"placeholder="You can write here your Message.." as="textarea" />
</FormGroup>
<Form.Group as={Row}>
    <Form.File
      type="file"
name="image1"
      className="custom-file-label  mt-4"
      id="inputGroupFile01"
      custom
    />
  </Form.Group>
  <Form.Group as={Row}>
    <Form.File
      type="file"
name="image2"
      className="custom-file-label mt-4"
      id="inputGroupFile01"
      custom
    />
  </Form.Group>
<div>
<Button className="btn btn-primary mt-2 ml-2" type="submit">Submit</Button>
</div>
</Form>
    </div>
    );
  }
export default HeadlinesTwo;

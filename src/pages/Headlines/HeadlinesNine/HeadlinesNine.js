import React from 'react';
import { Form,FormControl ,FormGroup,FormLabel,Button,Row} from "react-bootstrap";
import { useHistory } from "react-router-dom";

function HeadlinesNine() {
  return (
    <div>
        <Form action='http://localhost:5000/api/headline-nine' method='POST' horizontal className="shadow-lg p-3 mb-5 bg-white rounded">
  <FormGroup controlId="formControlsTextarea">
  <FormLabel>Nine Headlines</FormLabel>
  <FormControl componentClass="textarea"  name="headline9" placeholder="You can write here your Message.." as="textarea" />
</FormGroup>
<Form.Group as={Row}>
    <Form.File
      type="file"
      className="custom-file-label  mt-4"
      id="inputGroupFile01"
      custom
    />
  </Form.Group>
  <Form.Group as={Row}>
    <Form.File
      type="file"
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

export default HeadlinesNine;

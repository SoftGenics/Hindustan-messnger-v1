import React, {useState} from 'react';
import { Form,FormControl ,FormGroup,FormLabel,Button,Row} from "react-bootstrap";
import { useHistory } from "react-router-dom";

function HeadlinesOne() {
  

    return (
        <div> 
            <Form action='http://localhost:5000/api/headline-one' method='POST' enctype="multipart/form-data" horizontal className="shadow-lg p-3 mb-5 bg-white rounded" >
      <FormGroup controlId="formControlsTextarea">
      <FormLabel>First Headlines</FormLabel>
      <FormControl componentClass="textarea" name="headline1" placeholder="You can write here your Message.."  />
    </FormGroup>
    <Form.Group as={Row}>
        <Form.File
          type="file" name="image"
          className="custom-file-label  mt-4"
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


export default HeadlinesOne;

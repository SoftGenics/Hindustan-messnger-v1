import React from 'react';
import { Form,FormControl ,FormGroup,FormLabel,Button} from "react-bootstrap";
import { useHistory } from "react-router-dom";




function MessageOfTheDay() {
  let history = useHistory();

  return (
  <div>
      <Form action='http://localhost:5000/api/msg' method='POST' horizontal className="shadow-lg p-3 mb-5 bg-white rounded">
      <FormGroup controlId="formControlsTextarea">
      <FormLabel>Message Of The Day</FormLabel>
      <FormControl componentClass="textarea" name="msg" placeholder="You can write here your Message.." as="textarea" />
    </FormGroup>
  <div>
    <Button className="btn btn-primary mt-2 ml-2" type="submit">Submit</Button>
  </div>
  </Form>
  </div>
  );
}

export default MessageOfTheDay;

import React from "react";
import { 
  FormGroup,
  Input,
  Label,
} from "reactstrap";

function FormArticle({ payload, handleChange }) {
  return (
    <div>
      <FormGroup>
        <Label for="exampleEmail">
          Title
        </Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="with a placeholder"
          type="text"
          value={payload ? payload.title : ''}
          onChange={function(event) {
            handleChange({ title: event.target.value })
          }}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">
          Body
        </Label>
        <Input
          id="exampleText"
          name="text"
          type="textarea"
          value={payload ? payload.body : ''}
          onChange={function(event) {
            handleChange({ body: event.target.value })
          }}
        />
      </FormGroup>
      <FormGroup check>
        <Input 
          type="checkbox" 
          id="cekbox" 
          checked={payload ? payload.approved : ''} 
          onChange={function(event) {
            handleChange({ approved: !payload.approved })
          }}
        />
        {' '}
        <Label for="cekbox" check>
          Approved
        </Label>
      </FormGroup>
    </div>
  )
}

export default FormArticle
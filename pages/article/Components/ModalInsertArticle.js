import React, { useState } from "react";
import { 
  Modal, 
  ModalHeader, 
  ModalBody,
  ModalFooter,
  Button,
  Alert
} from "reactstrap";
import FormArticle from "./FormArticle";

// api
import { InsertArticle } from "../../../api-lib/ArticleApi";

function ModalInsertArticle() {
  const [modal, setModal] = useState(false);
  const [alert, setAlert] = useState(true);
  const toggle = () => setModal(!modal);

  // state buat data
  const [payload, setPayload] = useState({
    title: '',
    body: '',
    approved: false
  })

  function handleChange(value) {
    setPayload({ ...payload, ...value })
  }

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Click Me
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
        <Alert color="danger" hidden={alert}>
          Invalid Input !
        </Alert>
        <FormArticle handleChange={handleChange} payload={payload} />
        </ModalBody>
        <ModalFooter>
          <Button 
            color="primary" 
            onClick={function() {
              InsertArticle(payload)
                .then(result => {
                  if(result.status === 'success') {
                    window.location.reload()
                  } else {
                    setAlert(false)
                  }
                })
            }}
          >
            Submit
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalInsertArticle
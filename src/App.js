import React, { useState } from 'react';
import './App.css';
import { Container, Form, Button, Alert } from 'react-bootstrap';

function App() {

  let [text, setText] = useState("");
  let [pattern, setPattern] = useState("");
  let [occur, setOccur] = useState("");
  let [show, setShow] = useState(false);

  let handleSubmit = () => {
    let find = 0, i = 0;
 
    while (true) {
        i = text.indexOf(pattern, i);
        if (i >= 0) {
            find++;
            i++;
        } else
            break;
    }
    setOccur(find);
    setShow(!show);
  }

  return (
    <>
    <div style={{height: "100vh"}}>
    <Container className='h-100'>
      <div className='h-100 d-table mx-auto w-100'>
        <div className='h-100 align-middle d-table-cell'>
          <h1 className='mb-5'>Find all occurances of a pattern in a text!</h1>
          <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Text</Form.Label>
                <Form.Control type="text" onChange={(e)=>setText(e.target.value)} placeholder="eg. tadadattaetadadadafa" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label>Pattern</Form.Label>
                <Form.Control type="text" onChange={(e)=>setPattern(e.target.value)} placeholder="eg. dada" />
              </Form.Group>
            </Form>
            <Button variant="primary" className="mb-3" onClick={handleSubmit}>Primary</Button>
            {show
            ?
            <Alert className="mt-2" key='success' variant='success'>
                '{pattern}' occurs in the word '{text}' for <b>{occur}</b> times
            </Alert>
            :
            ""
            }
        </div>
      </div>
    </Container>
    </div>
    </>
  );
}

export default App;

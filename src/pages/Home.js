import React, { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import Textform from "../components/Textform";
import Alert from "../components/Alert";
import { increment, decrement, incrementByValue } from "../reducer/features";

const Home = ({ mode, showAlert, alerts }) => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [value, setValue] = useState(null);

  return (
    <Container>
      <Form>
        <Form.Control
          placeholder="Enter a value"
          onChange={(event) => setValue(event.target.value)}
        />
        <Button
          className="mt-2"
          onClick={() => dispatch(incrementByValue(value))}
        >
          Add
        </Button>
        <div className="d-flex align-items-center mt-2">
          <Button onClick={() => dispatch(increment())}>Increment</Button>
          <Form.Text className="mx-3">{count}</Form.Text>
          <Button onClick={() => dispatch(decrement())}>Decrement</Button>
        </div>
      </Form>
    </Container>
  );
};

export default Home;

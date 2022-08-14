import React from "react";
import { Container, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import Textform from "../components/Textform";
import Alert from "../components/Alert";
import { increment, decrement } from "../reducer/features";

const Home = ({ mode, showAlert, alerts }) => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Container>
      <div className="d-flex align-items-center">
        <Button onClick={() => dispatch(increment())}>Increment</Button>
        <Form.Text className="mx-3">{count}</Form.Text>
        <Button onClick={() => dispatch(decrement())}>Decrement</Button>
      </div>
    </Container>
  );
};

export default Home;

import React, { useState, useEffect } from "react";

import { Container } from "react-bootstrap";
import Activation from "./form/Activation";
import RegisterForm from "./form/RegisterForm";

const Register = () => {
  const [email, setEmail] = useState("");

  const [stage, setStage] = useState(1);

  useEffect(() => {
    if (stage) setStage(stage);
  }, [stage]);

  return (
    <div>
      {stage === 1 && (
        <Container>
          <RegisterForm email={email} setEmail={setEmail} setStage={setStage} />
        </Container>
      )}

      {stage === 2 && (
        <Container>
          <Activation/>
        </Container>
      )}
    </div>
  );
};

export default Register;

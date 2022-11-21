import styled from 'styled-components';
import { Form, Field } from 'formik';

const ContactForm = styled(Form)`
  margin: 0;
  color: gray;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 360px;
  padding: 20px;
  border: 1px solid gray;
  border-radius: 5px;
`;

const Label = styled.label`
  display: flex;
  justify-content: space-between;
  width: 300px;
`;

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 47.8px;
  width: 220px;
`;

const Input = styled(Field)`
  height: 22px;
`;

const ErrorText = styled.p`
  color: tomato;
  font-size: 12px;
  margin-top: 6px;
`;

const Button = styled.button`
  width: 180px;
  padding: 6px;
  margin-top: 20px;
  margin-left: 80px;
`;

const css = {
  ContactForm,
  Label,
  ErrorText,
  Input,
  InputWrap,
  Button,
};

export default css;

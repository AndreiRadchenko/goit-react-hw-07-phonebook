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
  align-items: center;
  width: 300px;
`;

const Input = styled(Field)`
  width: 220px;
  height: 22px;
`;

const Button = styled.button`
  width: 180px;
  padding: 6px;
  margin-top: 30px;
`;

const css = {
  ContactForm,
  Label,
  Input,
  Button,
};

export default css;

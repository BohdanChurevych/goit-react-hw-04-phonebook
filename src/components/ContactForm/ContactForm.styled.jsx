import styled from 'styled-components';

const FormContainer = styled.div`
  background-color: #f1f1f1;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Text = styled.p`
  font-size: 20px;
  padding: 0;
  margin: 0;
  margin-bottom: 5px;
  margin-top: 20px;
`;
const Input = styled.input`
  height: 25px;
`;
const Submit = styled.button`
  margin-top: 20px;
  width: 120px;
  padding: 8px 12px;
`;
export { FormContainer, Form, Text, Input, Submit };
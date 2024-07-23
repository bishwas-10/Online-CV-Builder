import styled from "styled-components";

export const StyledLabel = styled.label`
  opacity: 0.5; /* Adjust the opacity value as needed */
  font-size: 16px;
  font-weight: bold;
  
`;
export const StyledInput = styled.input`

  background-color: #e2e8f0;
  width:100%;
  &:focus {
    outline:none ;
    border-bottom: 3px solid blue;
    
  }
`;
export const StyledTextArea = styled.textarea`
  background-color: #e2e8f0;
  width:100%;
  border-radius:10px;
  &:focus {
    outline:none ;
    border-bottom: 3px solid blue;
    
  }
`;
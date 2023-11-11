import styled from "styled-components";


const Container = styled.div`
  background: #ff6347;
  position: relative;
  margin: auto 300px;
  border-radius: 55px;
  color: white;
  font-family: 'Poppins', 'Helvetica Neue', 'Lucida Grande', Arial, Verdana, sans-serif;
  padding: 1px 0px 40px 0;
  text-align: center;
`;

const FormContainer = styled.div`
  margin: 0 auto;
  width: 650px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 300;
  letter-spacing: 0.025em;
  
  strong {
    font-weight: 600;
  }
`;

const StyledForm = styled.form`
  position: relative;
  display: block;
  height: 70px;
  border-radius: 30px;
  background: white;
  margin: 0 auto;
  box-shadow: 0 8px 32px rgba(0,0,0,.28);
  overflow: hidden;
`;

const Input = styled.input`
  line-height: 70px;
  padding: 0;
  border: none;
  outline: none;
  font-size: 1rem;
  font-weight: 300;
  /* background: #F53A54; */
  letter-spacing: 0.02em;
  
  &:not([type=submit]) {
    width: 100%;
    display: block;
    padding: 0 150px 0 30px;
  }
  
  &:not([type=email]) {
    position: absolute;
    height: 50px;
    line-height: 50px;
    top: 10px;
    right: 10px;
    border-radius: 30px;
    padding: 0 25px;
    background: #ff6347;
    color: white;
    cursor: pointer;
    
    &:hover {
      background: red};
    }

  
  &:focus {
    outline: none;
    background: white;
  }
`

export default function NewsLetter() {
    return (
        <Container>
            <FormContainer>
                <Title><strong>Subscribe</strong> to our newsletter</Title>
                <StyledForm action="">
                    <Input type="email" name="email" id="email" placeholder="example@example.com" />
                    <Input type="submit" name="submit" value="subscribe" />
                </StyledForm>
            </FormContainer>
        </Container>
    );
}

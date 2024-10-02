import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #25262c;
`

export const TextEditorContainer = styled.div`
  display: flex;
  background-color: #1b1c22;
  height: 80vh;
  width: 60vw;
  display: flex;
  justify-content: space-between;
  padding: 20px;
`

export const TextEditorLogoCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;
  width: 50%;
`
export const Heading = styled.h1`
  color: #fff;
  font-size: 28px;
  font-weight: normal;
`
export const TextEditorImage = styled.img`
  height: 300px;
`
export const EditingContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #25262c;
  width: 50%;
  border: 1px solid #334155;
  border-radius: 12px;
  
`
export const StyledItemsContainer = styled.ul`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #334155;
  gap: 10px;
  padding: 15px;
  list-style-type: none;
`

export const Button = styled.button`
  background-color: transparent;
  border: 0;
  color: ${props => props.color};
`
export const TextArea = styled.textarea`
  background: transparent;
  border: none;
  outline: none;
  height: 100%;
  padding: 20px;
  color: #ffffff;
  font-weight: ${props => props.fontWeight};
  font-style: ${props => props.fontStyle};
  text-decoration: ${props => props.textDecoration};
`
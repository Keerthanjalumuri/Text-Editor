import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  AppContainer,
  TextEditorContainer,
  TextEditorLogoCard,
  Heading,
  TextEditorImage,
  EditingContainer,
  StyledItemsContainer,
  Button,
  TextArea,
} from './styledComponents.js'

class TextEditor extends Component {
  state = {
    isBold: false,
    isItalic: false,
    isUnderline: false,
  }

  onClickBold = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  onClickItalic = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  onClickUnderline = () => {
    this.setState(prevState => ({isUnderline: !prevState.isUnderline}))
  }

  render() {
    const {isBold, isItalic, isUnderline} = this.state
    const boldIcon = isBold ? '#faff00' : '#f1f5f9'
    const italicIcon = isItalic ? '#faff00' : '#f1f5f9'
    const underlineIcon = isUnderline ? '#faff00' : '#f1f5f9'

    return (
      <AppContainer>
        <TextEditorContainer>
          <TextEditorLogoCard>
            <Heading>Text Editor</Heading>
            <TextEditorImage
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </TextEditorLogoCard>
          <EditingContainer>
            <StyledItemsContainer>
              <li>
                <Button
                  data-testid="bold"
                  onClick={this.onClickBold}
                  color={boldIcon}
                >
                  <VscBold size={25} />
                </Button>
              </li>
              <li>
                <Button
                  data-testid="italic"
                  onClick={this.onClickItalic}
                  color={italicIcon}
                >
                  <GoItalic size={25} />
                </Button>
              </li>
              <li>
                <Button
                  data-testid="underline"
                  onClick={this.onClickUnderline}
                  color={underlineIcon}
                >
                  <AiOutlineUnderline size={25} />
                </Button>
              </li>
            </StyledItemsContainer>
            <TextArea
              cols={10}
              row={30}
              fontStyle={isItalic ? 'italic' : 'normal'}
              fontWeight={isBold ? 'bold' : 'normal'}
              textDecoration={isUnderline ? 'underline' : 'normal'}
            />
          </EditingContainer>
        </TextEditorContainer>
      </AppContainer>
    )
  }
}

export default TextEditor

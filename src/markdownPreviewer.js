import React from 'react';
import { connect } from 'react-redux';
import { updatePreview } from './markdownAction';

const MarkdownPreviewer = ({ preview, addText }) => {
  const handleOnChange = (event) => {
    console.log(event.target.value)
    
    addText(event.target.value);
  }

  return (
    <div>
      <p> {preview} </p>
      <textarea id="editor" onChange={handleOnChange} defaultValue={preview}></textarea>
    </div>

  )
}


const mapStateToProps = (state) => ({
  preview: state.preview,
});

const mapDispatchToProps = (dispatch) => {
  return ({
    //
    addText: (textAreaValue) => dispatch(updatePreview(textAreaValue)),
  })

}


export default connect(mapStateToProps, mapDispatchToProps)(MarkdownPreviewer);
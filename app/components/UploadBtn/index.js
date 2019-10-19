import React from 'react';
import PropTypes from 'prop-types';

class UploadButton extends React.PureComponent {
  constructor(props) {
    super(props);
    this.fileInputEl = null;
  }
  render() {
    const {
      onFileChange,
      getUpload,
      button,
      onClick,
      style,
    } = this.props;
    return (
      <div>
        <div style={style} onClick={onClick}>{button || <span>文件上传</span>}</div>
        <input
          /* accept={fileType} */
          type="file"
          style={{ display: 'none' }}
          ref={(el) => {
            if (getUpload) {
              getUpload(el);
            }
            this.fileInputEl = el;
          }}
          onChange={(...v) => {
            onFileChange(...v);
            this.fileInputEl.value = '';
          }}
        />
      </div>
    );
  }
}

UploadButton.propTypes = {
  style: PropTypes.object,
  onFileChange: PropTypes.func,
  getUpload: PropTypes.func,
  onClick: PropTypes.func,
  button: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
  ]),
};

export default UploadButton;


import React, { PureComponent } from 'react';
import { BasePage } from 'containers/BasePage';
import { Helmet } from 'react-helmet';

class LocalFile extends PureComponent {
  state = {
    videoSrc: '',
  };

   //  上传封面到oss
  handleUpload = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    this.setState({ videoSrc: URL.createObjectURL(file) });
  };

  handleCanPlay = () => {
    const palyer = this.video;
    console.log(palyer);
  }

  render() {
    const { videoSrc } = this.state;
    return (
      <div>
        <Helmet title="Videocontext页面" />
        <input
          type="file"
          ref={(el) => (this.fileInputEl = el)}
          onChange={(...v) => {
            this.handleUpload(...v);
            this.fileInputEl.value = '';
          }}
        />
        <video
          src={videoSrc}
          controls
          onCanPlay={this.handleCanPlay}
          ref={(el) => (this.video = el)}
        />
      </div>
    );
  }
}

export default BasePage(LocalFile);

import React, { PureComponent } from 'react';
import { BasePage } from 'containers/BasePage';
import { Helmet } from 'react-helmet';
import ClipboardJS from 'clipboard';
import { Button, Input } from 'antd';
import CopyToClipboard from 'react-copy-to-clipboard';

import { fetchJson } from './api';

class ClipboardPage extends PureComponent {
  state = {
  }

  componentDidMount() {
    this.clipboard = new ClipboardJS('.btn', {
      text: () => 'haha',
    });
    // const clipboard = new ClipboardJS('.btn');
  }

  componentWillUnmount() {
    this.clipboard.destroy();
  }

  clipboard;

  handleClickClipboard = () => {
    // this.antdBtnTwo.handleClick();
    this.shareVideoAsy();
  }

  /**
   * 异步之后调用接口受浏览器安全策略拦截
   */
  shareVideoAsy = async () => {
    try {
      await fetchJson('http://123.206.18.31/static/mock.json');
      this.antdBtnTwo.handleClick();
    } catch (error) {
      //
    } finally {
      //
    }
  }

  render() {
    return (
      <div>
        <Helmet title="剪切板" />
        <div>ClipboardPage</div>
        <Input placeholder="Basic usage" ref={(ref) => { this.antdInput = ref; }} />
        <Button className="btn" data-clipboard-text="1" ref={(ref) => { this.antdBtn = ref; }}>clipboard</Button>
        <Button key="back" onClick={this.handleClickClipboard}>react-copy-to-clipboard</Button>
        <div style={{ display: 'none' }}>
          <CopyToClipboard
            onCopy={() => this.setState({ copied: true })}
            text={this.state.asyncUrl}
          >
            <Button ref={(ref) => { this.antdBtnTwo = ref; }}>react-copy-to-clipboard</Button>
          </CopyToClipboard>
        </div>
      </div>
    );
  }
}

export default BasePage(ClipboardPage);

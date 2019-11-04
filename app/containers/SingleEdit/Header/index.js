/**
 *
 * SingleHeaderCom 顶部栏
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Input } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import LogoPng from '../../../images/icon-192x192.png';

import { makeSelectProjectInfo } from '../selectors';
import { changeProjectInfo } from '../actions';
import { setCaretPosition } from '../commom/tool';

import { HeaderConotent, FlexDiv, SaveBtn, ShareBtn, ProjectNameContent, ProjectNameP } from './styled';

const STYLE = {
  input: {
    width: 300,
  },
};

export class SingleHeaderCom extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  state = {
    isEdit: false,
    inputTitle: '',
  }


  // 修改编辑状态
  handleEdit = (flag) => {
    if (flag) {
      this.setState({ isEdit: flag, inputTitle: this.props.projectInfo.title }, () => {
        const inputEl = this.antdInput.input;
        inputEl.focus();
        const len = this.state.inputTitle.length;
        setCaretPosition(inputEl, len);
      });
    } else {
      const { inputTitle } = this.state;
      if (
        inputTitle.trim().length > 0 &&
        inputTitle !== this.props.projectInfo.title
      ) {
        this.props.actionChangeProjectInfo({ title: inputTitle });
      }
      this.setState({ isEdit: false, projectName: '' });
    }
  }

  // 修改标题
  handleEditTitle = (inputTitle) => this.setState({ inputTitle });

  renderProjectName = () => (
    <ProjectNameContent>
      <ProjectNameP title={'projectName'}>{this.props.projectInfo.title}</ProjectNameP>
      <Icon type="edit" style={{ cursor: 'pointer' }} onClick={() => this.handleEdit(true)} />
    </ProjectNameContent>
  )
  renderProjectNameEdit = () => (
    <ProjectNameContent>
      <Input
        ref={(ref) => { this.antdInput = ref; }}
        style={STYLE.input}
        placeholder="请输入标题"
        value={this.state.inputTitle}
        onBlur={() => {
          this.handleEdit(false);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            this.handleEdit(false);
          }
        }}
        onChange={(e) => this.handleEditTitle(e.target.value)}
      />
    </ProjectNameContent>
  )

  render() {
    const { isEdit } = this.state;
    return (
      <HeaderConotent>
        <Link to="/">
          <img src={LogoPng} style={{ height: '32px' }} alt="" />
        </Link>
        {
          isEdit ? this.renderProjectNameEdit() : this.renderProjectName()
        }
        <FlexDiv>
          <SaveBtn theme="white" label="保存" />
          <ShareBtn disabled={false} label={'分享'} />
        </FlexDiv>
      </HeaderConotent>
    );
  }
}

SingleHeaderCom.propTypes = {
  projectInfo: PropTypes.object.isRequired,

  actionChangeProjectInfo: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  projectInfo: makeSelectProjectInfo(),
});

function mapDispatchToProps(dispatch) {
  return {
    actionChangeProjectInfo: (...arg) => dispatch(changeProjectInfo(...arg)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleHeaderCom);

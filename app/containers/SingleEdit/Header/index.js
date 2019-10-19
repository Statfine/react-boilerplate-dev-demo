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
import { WeiboLogoSvg } from 'components/Header/svg';

import makeSelectSingleEdit from '../selectors';

import LogoHeaderShenZ from '../../../components/Header/images/logo-header-shenz.svg';
import { HeaderConotent, FlexDiv, SaveBtn, ShareBtn, ProjectNameContent, ProjectNameP } from './styled';

const STYLE = {
  input: {
    width: 300,
  },
};

export class SingleHeaderCom extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  state = {
    isEdit: false,
    projectName: '',
  }

  // 修改编辑状态
  handleEdit = (flag) => {
    if (flag) {
      this.setState({ isEdit: flag, projectName: 'projectName' }, () => {
        this.antdInput.input.focus();
      });
    } else {
      this.setState({ isEdit: false, projectName: '' });
    }
  }

  // 修改标题
  handleEditTitle = (projectName) => this.setState({ projectName });

  renderProjectName = () => (
    <ProjectNameContent>
      <ProjectNameP title={'projectName'}>projectName</ProjectNameP>
      <Icon type="edit" style={{ cursor: 'pointer' }} onClick={() => this.handleEdit(true)} />
    </ProjectNameContent>
  )
  renderProjectNameEdit = () => (
    <ProjectNameContent>
      <Input
        ref={(ref) => { this.antdInput = ref; }}
        style={STYLE.input}
        placeholder="请输入标题"
        value={this.state.projectName}
        onBlur={() => {
          this.handleEdit(false);
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
          {
            location.host.endsWith('weiclip.com') ?
              <img src={LogoHeaderShenZ} style={{ height: '32px' }} alt="" /> :
              <WeiboLogoSvg style={{ width: 142, height: 28 }} viewBox="0 0 142 28" />
          }
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
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  singleedit: makeSelectSingleEdit(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleHeaderCom);

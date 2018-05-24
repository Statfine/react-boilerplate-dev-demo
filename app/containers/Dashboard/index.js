import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import ListOnePage from '../ListOnePage/Loadable';
import ListTwoPage from '../ListTwoPage/Loadable';
import VideoListPage from '../VideoListPage/Loadable';
import VideoPage from '../VideoPage/Loadable';
import CutPage from '../CutPage/Loadable';
import AntdPage from '../AntdPage/Loadable';
import BBCVideoContextPage from '../BBCVideoContext/Loadable';
import DndPage from '../DndPage/Loadable';
import CssPage from '../CssPage/Loadable';
import RefPage from '../RefPage/Loadable';
import AliPlayerPage from '../AliPlayerPage/Loadable';
import EChartPage from '../EChartPage/Loadable';
import WavePage from '../WavesurferPage/Loadable';
import ComPage from '../ComPage';
import CanvasPage from '../CanvasPage/Loadable';
import CanvasCutPage from '../CanvasCutPage/Loadable';
import CanvasHtmlPage from '../CanvasHtmlPage/Loadable';
import SubtitlePage from '../SubtitlePage';

const AppWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

const LeftNav = styled.div`
  width:180px;
  overflow-y: auto;
  position:fixed;
  height:100%;
  background:white;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.12);
  z-index:500;
  color:#364149;
  display: flex;
  flex-direction: column;
  align-content: space-around;
`;

const P = styled.div`
  height:48px;
  padding: 0 20px;
  line-height:48px;
  background:${({ selected }) => selected ? '#e9eef1' : 'unset'};
  border-right: ${({ selected }) => selected ? '4px #4885ed solid' : '4px #fff solid'};
  cursor:pointer;
  & svg {
    margin-right:10px;
    display: inline-block;
    color: ${({ selected }) => selected ? '#4885ed' : '#667485'} !important;
  }
  & div {npm i
    display: inline-block;
    color: ${({ selected }) => selected ? '#4885ed' : '#667485'};
  }
  &:hover {
    background: #e9eef1;
    border-right: ${({ selected }) => selected ? '4px #4885ed solid' : '4px #e9eef1 solid'};
  }
`;

const RightNav = styled.div`
  padding: 15px 20px 15px 200px;
  width: 100%;
`;

class Dashboard extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    // TODO
  }

  onJump = (url) => {
    this.props.history.push(`${this.props.match.path}/${url}`);
  }

  render() {
    return (
      <div>
        <Helmet
          titleTemplate="SJ web"
        >
        </Helmet>
        <AppWrapper>
          <LeftNav>
            <P onClick={() => this.onJump('one')} selected={location.pathname.startsWith('/dashboard/one')}>OneList</P>
            <P onClick={() => this.onJump('two')} selected={location.pathname.startsWith('/dashboard/two')}>TwoList</P>
            <P onClick={() => this.onJump('antd')} selected={location.pathname.startsWith('/dashboard/antd')}>Antd</P>
            <P onClick={() => this.onJump('live')} selected={location.pathname.startsWith('/dashboard/live')}>Live</P>
            <P onClick={() => this.onJump('videolist')} selected={location.pathname.startsWith('/dashboard/videolist')}>VideoList</P>
            <P onClick={() => this.onJump('cut')} selected={location.pathname.startsWith('/dashboard/cut')}>CutComponent</P>
            <P onClick={() => this.onJump('bbc')} selected={location.pathname.startsWith('/dashboard/bbc')}>BBCVideoContext</P>
            <P onClick={() => this.onJump('css')} selected={location.pathname.startsWith('/dashboard/css')}>CssPage</P>
            <P onClick={() => this.onJump('ref')} selected={location.pathname.startsWith('/dashboard/red')}>RefPage</P>
            <P onClick={() => this.onJump('ali')} selected={location.pathname.startsWith('/dashboard/ali')}>阿里播放器</P>
            <P onClick={() => this.onJump('echart')} selected={location.pathname.startsWith('/dashboard/echart')}>Echart</P>
            <P onClick={() => this.onJump('wavesurefer')} selected={location.pathname.startsWith('/dashboard/wavesurefer')}>波形</P>
            <P onClick={() => this.onJump('dnd')} selected={location.pathname.startsWith('/dashboard/dnd')}>拖动</P>
            <P onClick={() => this.onJump('comPage')} selected={location.pathname.startsWith('/dashboard/comPage')}>comPage</P>
            <P onClick={() => this.onJump('canvas')} selected={location.pathname.startsWith('/dashboard/canvas')}>Canvas</P>
            <P onClick={() => this.onJump('canvasCut')} selected={location.pathname.startsWith('/dashboard/canvasCut')}>CanvasCut</P>
            <P onClick={() => this.onJump('canvasHtml')} selected={location.pathname.startsWith('/dashboard/canvasHtml')}>Html2Canvas</P>
            <P onClick={() => this.onJump('subtitle')} selected={location.pathname.startsWith('/dashboard/subtitle')}>走字</P>
            <P onClick={() => this.props.history.push('/')}>home</P>
          </LeftNav>
          <RightNav>
            <Switch>
              <Route exact path={this.props.match.url} render={() => (<h3>Please select a topic.</h3>)} />
              <Route path={`${this.props.match.path}/antd`} component={AntdPage} />
              <Route path={`${this.props.match.path}/one`} component={ListOnePage} />
              <Route path={`${this.props.match.path}/two`} component={ListTwoPage} />
              <Route path={`${this.props.match.path}/live`} component={VideoPage} />
              <Route path={`${this.props.match.path}/videolist`} component={VideoListPage} />
              <Route path={`${this.props.match.path}/cut`} component={CutPage} />
              <Route path={`${this.props.match.path}/bbc`} component={BBCVideoContextPage} />
              <Route path={`${this.props.match.path}/dnd`} component={DndPage} />
              <Route path={`${this.props.match.path}/css`} component={CssPage} />
              <Route path={`${this.props.match.path}/ref`} component={RefPage} />
              <Route path={`${this.props.match.path}/ali`} component={AliPlayerPage} />
              <Route path={`${this.props.match.path}/echart`} component={EChartPage} />
              <Route path={`${this.props.match.path}/wavesurefer`} component={WavePage} />
              <Route path={`${this.props.match.path}/comPage`} component={ComPage} />
              <Route path={`${this.props.match.path}/canvas`} component={CanvasPage} />
              <Route path={`${this.props.match.path}/canvasCut`} component={CanvasCutPage} />
              <Route path={`${this.props.match.path}/canvasHtml`} component={CanvasHtmlPage} />
              <Route path={`${this.props.match.path}/subtitle`} component={SubtitlePage} />
            </Switch>
          </RightNav>
        </AppWrapper>
      </div>
    );
  }
}

Dashboard.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
};

export default Dashboard;

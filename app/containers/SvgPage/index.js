import React, { PureComponent } from 'react';
import ReactSVG from 'react-svg';
import JiShiSvgOne from './jishi-1.svg';
import DemoSvg from './demo.svg';
// import { SvgCutLive } from './svg';

export default class AvgPage extends PureComponent {
  state = {};
  render() {
    return (
      <div>
        <h1>SvgPage</h1>
        <img src="http://39.108.60.29/static/video/v1.png" alt="" style={{ width: 230, height: 407 }} />
        <img src={DemoSvg} alt="" style={{ width: 230, height: 407 }} />
        <img src={JiShiSvgOne} alt="" style={{ width: 230, height: 407 }} />
        <ReactSVG
          path={JiShiSvgOne}
          callback={(svg) => console.log(svg)}
        />
      </div>
    );
  }
}

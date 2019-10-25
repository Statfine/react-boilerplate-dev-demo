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
        <div style={{ width: 400, overflow: 'hidden', resize: 'both' }}>
          <svg
            width="100%"
            height="80"
            viewBox="0 0 600 80"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <text fontSize="80" x="0" y="1em">这个标题很长哦可能一行放不下的怎么办呢</text>
          </svg>
        </div>
        <p>这个标题很长哦可能一行放不下的怎么办呢</p>
      </div>
    );
  }
}

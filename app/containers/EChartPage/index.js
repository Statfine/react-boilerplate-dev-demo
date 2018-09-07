import React, { PureComponent } from 'react';
import ReactEcharts from 'echarts-for-react';
import { BasePage } from 'containers/BasePage';
import { Helmet } from 'react-helmet';
import './china';

import { 柱状图, 折线图, 雷达图, 地图, 圆饼图, 漏斗图, 关系图, 玫瑰图 } from './data';

class EChartPage extends PureComponent {
  state = {};
  render() {
    return (
      <div>
        <Helmet title="Echart demo" />
        <ReactEcharts
          option={柱状图}
          style={{ height: '330px', width: '100%' }}
          className="react_for_echarts"
        />
        <ReactEcharts
          option={折线图}
          style={{ height: '330px', width: '100%' }}
          className="react_for_echarts"
        />
        <ReactEcharts
          option={雷达图}
          style={{ height: '330px', width: '100%' }}
          className="react_for_echarts"
        />
        <ReactEcharts
          option={地图}
          style={{ height: '330px', width: '100%' }}
          className="react_for_echarts"
        />
        <ReactEcharts
          option={圆饼图}
          style={{ height: '330px', width: '100%' }}
          className="react_for_echarts"
        />
        <ReactEcharts
          option={漏斗图}
          style={{ height: '330px', width: '100%' }}
          className="react_for_echarts"
        />
        <ReactEcharts
          option={关系图}
          style={{ height: '330px', width: '100%' }}
          className="react_for_echarts"
        />
        <ReactEcharts
          option={玫瑰图}
          style={{ height: '330px', width: '100%' }}
          className="react_for_echarts"
        />
      </div>
    );
  }
}

export default BasePage(EChartPage);

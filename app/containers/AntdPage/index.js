import React, { PureComponent } from 'react';
import { Slider, Icon, Button, Select, TreeSelect, Row, Col } from 'antd';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

import MaterialSlider from 'material-ui/Slider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import styled from 'styled-components';
const SHOW_PARENT = TreeSelect.SHOW_PARENT;

// import './slelect.css';

const AntdBtn = styled(Button)`
  width: 200px;
  height: 100px;
`;

const muiTheme = getMuiTheme({
  slider: {
    primary1Color: '#ffffff',
    primary3Color: '#ffffff',
    selectionColor: '#F76B1C',
    handleFillColor: '#F76B1C',
    pickerHeaderColor: '#F76B1C',
    clockCircleColor: '#ffffff',
  },
});

const Option = Select.Option;
const children = [];
for (let i = 10; i < 36; i += 1) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

const treeData = [{
  label: '节点一',
  value: '0-0',
  key: '0-0',
  children: [],
}, {
  label: '节点二',
  value: '0-1',
  key: '0-1',
  children: [{
    label: '子节点三',
    value: '0-1-0',
    key: '0-1-0',
  }, {
    label: '子节点四',
    value: '0-1-1',
    key: '0-1-1',
  }, {
    label: '子节点五',
    value: '0-1-2',
    key: '0-1-2',
  }],
}];

export default class AntdPage extends PureComponent {
  state = {
    open: false,
  };

  onChangeS = (value) => {
    console.log('onChange ', value, arguments);
    this.setState({ value });
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleFirstSlider = (event, value) => {
    console.log(value);
  }

  handleChange = (value) => {
    console.log(`selected ${value}`);
  }

  render() {
    const tProps = {
      treeData,
      value: this.state.value,
      onChange: this.onChangeS,
      multiple: true,
      treeCheckable: true,
      showCheckedStrategy: SHOW_PARENT,
      searchPlaceholder: '请选择',
      style: {
        width: 300,
      },
    };

    return (
      <div style={{ width: 600, margin: '0 auto' }}>
        <p>antd修改主题  See： webpack</p>
        <Slider range defaultValue={[20, 50]} />
        <Icon type="step-backward" />
        <AntdBtn type="primary" icon="download" size="large">Download</AntdBtn>
        <RaisedButton label="Dialog" onClick={this.handleOpen} />
        <Dialog
          modal
          open={this.state.open}
          onRequestClose={this.handleClose}
          bodyStyle={{ background: 'red', maxHeight: '460px!important', height: '500px', width: '300px' }}
          contentStyle={{ background: 'blue', width: '300px', height: '500px', position: 'fixed', left: '50%', marginLeft: '-25%', top: '30px', transform: 'translate(0px, 0px)' }}
          style={{ padding: '0px', paddingTop: '0px !important', width: '300px' }}
        >
          The actions in this window were passed in as an array of React objects.
        </Dialog>

        <p style={{ marginTop: '100px' }}>material修改主题  See： webpack</p>
        <MuiThemeProvider muiTheme={muiTheme}>
          <MaterialSlider
            min={0}
            max={100}
            value={50}
            style={{ width: 290, marginLeft: 10 }}
            sliderStyle={{ margin: 0 }}
            onChange={this.handleFirstSlider}
          />
        </MuiThemeProvider>
        <Select
          multiple
          style={{ width: '100%' }}
          placeholder="Please select"
          defaultValue={['a10', 'c12']}
          onChange={this.onChange}
        >
          {children}
        </Select>
        <TreeSelect {...tProps} />
        <p>响应式 24格</p>
        <Row>
          <Col xs={2} sm={4} md={6} lg={8} xl={10}>Col</Col>
          <Col xs={20} sm={16} md={12} lg={8} xl={4}>Col</Col>
          <Col xs={2} sm={4} md={24} lg={8} xl={10}>Col</Col>
        </Row>
      </div>
    );
  }
}

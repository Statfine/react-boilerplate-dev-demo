import React, { PureComponent } from 'react';
import { Slider, Icon, Button, Select, TreeSelect, Row, Col, Modal, Steps, Input } from 'antd';
import { BasePage } from 'containers/BasePage';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import MaterialSlider from 'material-ui/Slider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// import 'antd/lib/pagination/style/index.css';
// import 'antd/lib/icon/style/css';

import styled from 'styled-components';
const SHOW_PARENT = TreeSelect.SHOW_PARENT;

// import './slelect.css';

const AntdBtn = styled(Button) `
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
const Step = Steps.Step;
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
const Search = Input.Search;

class AntdPage extends PureComponent {
  state = {
    open: false,
    value: 0,
    visible: false,
    step: 0,
  };

  // this.emailInput.input.focus();
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

  handleChange = (event, index, value) => this.setState({ value });

  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = () => {
    this.setState({ visible: false });
  }
  handleCancel = () => {
    this.setState({ visible: false });
  }

  handlePromise = () => {
    const a = new Promise((resolve, reject) => {
      try {
        setTimeout(() => resolve(true), 2000);
      } catch (error) {
        reject(error.message);
      }
    });
    a.then((re) => {
      console.log(re);
      return a;
    }).catch((error) => {
      console.log(error);
    });
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
    const { step } = this.state;

    return (
      <div style={{ width: 600, margin: '0 auto' }}>
        <div onClick={this.handlePromise}>antd修改主题  See： webpack</div>
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
        <DropDownMenu
          value={this.state.value}
          onChange={this.handleChange}
        >
          <MenuItem value={0} primaryText="Never" />
          <MenuItem value={2} primaryText="Every Night" />
          <MenuItem value={3} primaryText="Weeknights" />
          <MenuItem value={4} primaryText="WeekendsWeekendsWeekendsWeekends" />
          <MenuItem value={5} primaryText="Weekly" />
        </DropDownMenu>
        <Button type="primary" onClick={this.showModal}>
          Open
        </Button>
        <Steps progressDot current={step}>
          <Step onClick={() => this.setState({ step: 0 }, () => alert(0))} style={{ cursor: 'pointer' }} title="Finished" description="This is a description." />
          <Step onClick={() => this.setState({ step: 1 }, () => alert(1))} style={{ cursor: 'pointer' }} title="In Progress" description="This is a description." />
          <Step onClick={() => this.setState({ step: 2 }, () => alert(2))} style={{ cursor: 'pointer' }} title="Waiting" description="This is a description." />
        </Steps>
        <Modal
          visible={this.state.visible}
          title="Title"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>Return</Button>,
            <Button key="submit" type="primary" onClick={this.handleOk}>
              Submit
            </Button>,
          ]}
        >
          <div style={{ height: 300 }}>
            <Select
              multiple
              style={{ width: '100%' }}
              placeholder="Please select"
              defaultValue={['a10', 'c12']}
              onChange={this.onChange}
            >
              {children}
            </Select>
            <div style={{ height: 600 }}>1</div>
          </div>

        </Modal>
        <Search
          placeholder="input search text"
          onSearch={(value) => console.log(value)}
          style={{ width: 200 }}
        />
        <Input placeholder="Basic usage" ref={(ref) => { this.antdInput = ref; }} />
        <Button type="primary" onClick={() => this.antdInput.input.focus()}>输入框聚焦</Button>
      </div>
    );
  }
}

export default BasePage(AntdPage);

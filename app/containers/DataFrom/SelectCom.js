import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

import { Label, LabelTitle, LabelRight } from './styled';

const { Option } = Select;
const SelectCom = ({
  value,
  dataInfo,
  onChange,
}) => (
  <Label>
    <LabelTitle>{dataInfo.name}:</LabelTitle>
    <LabelRight>
      <Select value={value} onChange={onChange} style={{ width: '100%' }}>
        {
          dataInfo.defaultList.map((item) => (
            <Option value={item.value}>{item.label}</Option>
          ))
        }
      </Select>
    </LabelRight>
  </Label>
);

/**
 * value 初始值
 * dataInfo 数据初始对象
 * onChange 修改方法
 */
SelectCom.defaultProps = {
  value: '',
};
SelectCom.propTypes = {
  value: PropTypes.string,
  dataInfo: PropTypes.object,
  onChange: PropTypes.func,
};
export default SelectCom;

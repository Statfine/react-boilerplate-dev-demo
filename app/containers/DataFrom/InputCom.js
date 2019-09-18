import React from 'react';
import PropTypes from 'prop-types';
import { Input, InputNumber } from 'antd';

import { Label, LabelTitle, LabelRight } from './styled';

const InputCom = ({
  value,
  dataInfo,
  onChange,
  isNumber,
}) => (
  <Label>
    <LabelTitle>{dataInfo.name}:</LabelTitle>
    <LabelRight>
      {
        isNumber ?
          <InputNumber placeholder={dataInfo.name} value={value} onChange={onChange} style={{ width: '100%' }} /> :
          <Input placeholder={dataInfo.name} value={value} onChange={onChange} style={{ width: '100%' }} />
      }
    </LabelRight>
  </Label>
);

/**
 * value 初始值
 * dataInfo 数据初始对象
 * onChange 修改方法
 * isNumber 是否是数字
 */
InputCom.defaultProps = {
  value: '',
  isNumber: false,
};
InputCom.propTypes = {
  value: PropTypes.string,
  dataInfo: PropTypes.object,
  onChange: PropTypes.func,
  isNumber: PropTypes.bool,
};
export default InputCom;

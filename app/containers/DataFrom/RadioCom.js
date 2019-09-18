import React from 'react';
import PropTypes from 'prop-types';
import { Radio } from 'antd';

import { Label, LabelTitle, LabelRight } from './styled';

const RadioCom = ({
  value,
  dataInfo,
  onChange,
}) => (
  <Label>
    <LabelTitle>{dataInfo.name}:</LabelTitle>
    <LabelRight>
      <Radio.Group options={dataInfo.defaultList} value={value} onChange={onChange} />
    </LabelRight>
  </Label>
);

/**
 * value 初始值
 * dataInfo 数据初始对象
 * onChange 修改方法
 */
RadioCom.defaultProps = {
  value: '',
};
RadioCom.propTypes = {
  value: PropTypes.string,
  dataInfo: PropTypes.object,
  onChange: PropTypes.func,
};
export default RadioCom;

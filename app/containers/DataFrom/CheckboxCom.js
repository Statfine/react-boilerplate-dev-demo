import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'antd';

import { Label, LabelTitle, LabelRight } from './styled';

const CheckBoxCom = ({
  value,
  dataInfo,
  onChange,
}) => (
  <Label>
    <LabelTitle>{dataInfo.name}:</LabelTitle>
    <LabelRight>
      <Checkbox.Group options={dataInfo.defaultList} value={value.split(',')} onChange={onChange} />
    </LabelRight>
  </Label>
);

/**
 * value 初始值
 * dataInfo 数据初始对象
 * onChange 修改方法
 */
CheckBoxCom.defaultProps = {
  value: '',
};
CheckBoxCom.propTypes = {
  value: PropTypes.string,
  dataInfo: PropTypes.object,
  onChange: PropTypes.func,
};
export default CheckBoxCom;

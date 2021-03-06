/**
 *  name 显示标题
 *  type 类型(字符串)
 *    string-字符串 number-数字 checkbox-单选框 radio-复选框 select-选择器
 *  field 传递字段
 *  value 默认值
 *  minLimit 最小限制 todo
 *  maxLimit 最大限制 todo
 *  defaultList [{value, label}]筛选数组(checkbox,radio,select)
*/
export const dataOne = [
  {
    name: '姓',
    type: 'string', // 字符串
    field: 'name',
    value: '123',
    minLimit: 3,
    maxLimit: 60,
  },
  {
    name: '名',
    type: 'string', // 字符串
    field: 'call',
    value: '123',
    minLimit: 0,
    maxLimit: 0,
  },
  {
    name: '年龄',
    type: 'number', // 数字
    field: 'age',
    value: 0,
    minLimit: 3,
    maxLimit: 60,
  },
  {
    name: '水果',
    type: 'checkbox', // 多选框
    field: 'fruits',
    value: '0,1',
    minLimit: 3,
    maxLimit: 5,
    defaultList: [
      { value: '0', label: 'Apple' },
      { value: '1', label: 'Pear' },
      { value: '2', label: 'Orange' },
    ],
  },
  {
    name: '性别',
    type: 'radio', // 单选框
    field: 'sex',
    value: '0',
    minLimit: 0,
    maxLimit: 1,
    defaultList: [
      { value: '0', label: '男' },
      { value: '1', label: '女' },
    ],
  },
  {
    name: '颜色',
    type: 'select', // 选择器器
    field: 'color',
    value: '0',
    minLimit: 0,
    maxLimit: 1,
    defaultList: [
      { value: '0', label: 'Apple' },
      { value: '1', label: 'Pear' },
      { value: '2', label: 'Orange' },
    ],
  },
];

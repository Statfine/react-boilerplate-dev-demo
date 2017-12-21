
// 删除弹窗
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import styled from 'styled-components';
import DefaultButton from 'components/DefaultButton';

const DialogTit = styled.p`
  color: #444;
  font-size: 16px;
  margin-bottom: 50px;
`;

const ActionContent = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const Btn = styled(DefaultButton)`
  width: 108px;
  height: 36px;
  line-height: 36px;
  padding: 0;
  font-size: 14px;
`;

const SureBtn = styled(Btn)`
  margin-left: 20px;
`;

const CancelBtn = styled(Btn)`
  background: #fff;
  color: #4885ed;
  border: 1px solid #4885ed;
`;

export default class DeleteDialog extends Component {
  render() {
    const { title, onDelete, open, closeDialog } = this.props;
    return (
      <Dialog
        open={open}
        onRequestClose={() => closeDialog()}
        contentStyle={{ width: 590 }}
      >
        <DialogTit>{title}</DialogTit>
        <ActionContent>
          <SureBtn
            label="确认"
            onClick={() => onDelete()}
          />
          <CancelBtn onClick={() => closeDialog()} label="取消" />
        </ActionContent>
      </Dialog>
    );
  }
}

DeleteDialog.propTypes = {
  title: PropTypes.string,
  onDelete: PropTypes.func,
  open: PropTypes.bool,
  closeDialog: PropTypes.func,
};

/**
 * 可拖拽变换组件
 * 四个顶点 都是等比缩放 nw ne sw se   以Y轴为参考(敲黑板)
 * 四个边点 需判断是否等比缩放 n w e s
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';
import {
  Line,
  Rotate,
  RoDrag,
  TransCtrl,
  TranContainer,
  ContrlArrow,
  ArrowLeftTop,
  ArrowRightTop,
  ArrowBottomLeft,
  ArrowBottomRight,
  ArrowLeft,
  ArrowRight,
  ArrowTop,
  ArrowBottom,
} from './styled';
import { MIN_WIDTH } from './config';

class Transformable extends PureComponent {
  state = {
    dragFlag: '',
    /**
     * 鼠标点击位置
     * 初始宽高
     * 初始Left和top值
     * 初始四边距
     */
    scale: fromJS({
      clientX: 0,
      clientY: 0,
      startW: 0,
      startH: 0,
      startL: 0,
      startT: 0,
      startX: 0,
      startY: 0,
      startR: 0,
      startB: 0,
    }),
    /**
     * 鼠标移动时坐标和元素中心坐标 （相对与父元素）
     */
    rotate: fromJS({
      mouseX: 0,
      mouseY: 0,
      elementX: 0,
      elementY: 0,
      deg: 0,
    }),
    /**
     * 拖动
     * startX 鼠标X轴距离
     * startY 鼠标Y轴距离
     * tranX  transfromY轴距离
     * tranY  transfromY轴距离
     */
    drag: fromJS({
      startX: 0,
      startY: 0,
    }),
    /**
     * 附加操作按钮
     */
    extra: !this.props.disabled,
  }
  componentDidMount() {
    /**
     * 获取父元素节点，并设position为relative
     */
    const { defaultPosition, disabled } = this.props;
    const drag = this.trancontainer;
    this.parent = drag.parentNode;
    const val = this.getStyle(this.parent).position;
    const height = this.getStyle(this.parent).height;
    if (val !== 'relative') {
      this.parent.style.position = 'relative';
    }
    if (height === '0px') {
      this.parent.style.height = this.getStyle(this.parent.parentNode).height;
    }
    drag.style.left = defaultPosition.x && `${Math.round(defaultPosition.x)}%`;
    drag.style.top = defaultPosition.y && `${Math.round(defaultPosition.y)}%`;
    drag.style.transform = defaultPosition.rotate ? `rotate(${defaultPosition.rotate}deg)` : `rotate(${0}deg)`;
    if (this.props.translate) {
      drag.style.width = defaultPosition.w ? `${defaultPosition.w}%` : '10%';
      drag.style.height = defaultPosition.h ? `${defaultPosition.h}%` : '10%';
      this[0].style.width = '100%';
      this[0].style.height = '100%';
      this[0].style.display = 'flex';
      this[0].style.justifyContent = 'center';
      this[0].style.alignItems = 'center';
      this[0].style.overflow = 'hidden';
    }
    /**
     * 激活当前元素，添加键盘事件
     */
    if (!disabled) {
      drag.focus();
      drag.addEventListener('keydown', this.handleKeyDown);
    }
    /**
    * 拖动鼠标落下
    */
    drag.addEventListener('mousedown', (e) => { // eslint-disable-line
      // if (!disabled) {
      document.body.style.userSelect = 'none';
      document.body.style.webkitUserSelect = 'none';
      document.body.style.msUserSelect = 'none';
      document.body.style.mozUserSelect = 'none';
      document.addEventListener('mouseup', this.handleMouseUp);
      drag.style.cursor = 'move';
      const startTranslateX = this.getTransX(
        this.getStyle(this.trancontainer).transform,
      );
      const startTranslateY = this.getTransY(
        this.getStyle(this.trancontainer).transform,
      );
      this.setState(({ drag }) => ({ // eslint-disable-line
        drag: drag.set('startX', e.clientX)
                  .set('startY', e.clientY)
                  .set('tranX', startTranslateX)
                  .set('tranY', startTranslateY),
      }));
      document.addEventListener('mousemove', this.handleDragMouseMove);
      // }
    });
  }

  componentWillReceiveProps(nextProps) {
    const drag = this.trancontainer;
    if (nextProps.disabled !== this.props.disabled) {
      this.setState({ extra: !nextProps.disabled });
      if (nextProps.disabled) {
        drag.addEventListener('mouseenter', this.handleMouseEnter);
      } else {
        drag.removeEventListener('mouseenter', this.handleMouseEnter);
        drag.removeEventListener('mouseleave', this.handleMouseLeave);
      }
    }
    if (nextProps.defaultPosition !== this.props.defaultPosition) {
      // const { defaultPosition } = nextProps;
      // this.trancontainer.style.width = `${defaultPosition.w}px`;
      // this.trancontainer.style.height = `${defaultPosition.h}px`;
      // this.trancontainer.style.left = `${defaultPosition.x}px`;
      // this.trancontainer.style.top = `${defaultPosition.y}px`;
      // this.handleTransfrom();
    }
    if (nextProps.deg !== this.props.deg) {
      const x = this.getTransX(
        this.getStyle(this.trancontainer).transform,
      );
      const y = this.getTransY(
        this.getStyle(this.trancontainer).transform,
      );
      this.trancontainer.style.transform = `translate(${x}px, ${y}px) rotate(${nextProps.deg}deg)`;
    }
    if (nextProps.disabled !== this.props.disabled && !nextProps.disabled) {
      this.trancontainer.addEventListener('keydown', this.handleKeyDown);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mousemove', this.handleDragMouseMove);
    document.removeEventListener('mousemove', this.handleRotateMouseMove);
    document.removeEventListener('mouseup', this.handleMouseUp);
    clearTimeout(this.timer);
  }

  getStyle = (el) => {
    let style = null;
    if (window.getComputedStyle) {
      style = window.getComputedStyle(el, null);
    } else {
      style = el.currentStyle;
    }
    return style;
  };

  getTransX = (matrix) => {
    const matrixArr = matrix.substring(7).split(',');
    return parseInt(matrixArr[4]);
  };

  getTransY = (matrix) => {
    const matrixArr = matrix.substring(7).split(',');
    return parseInt(matrixArr[5]);
  };

  /**
   * @param {*number} mx 鼠标X坐标
   * @param {*number} my 鼠标Y坐标
   * @param {*number} ex 元素中心X坐标
   * @param {*numver} ey 元素中心Y坐标
   */
  getAngleFromCenter(mx, my, ex, ey) {
    const x = Math.abs(ex - mx);
    const y = Math.abs(ey - my);
    const z = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

    const cos = y / z;
    const radina = Math.acos(cos);
    let angle = Math.floor(180 / (Math.PI / radina));

    if (mx > ex && my > ey) angle = 180 - angle;
    if (mx === ex && my > ey) angle = 180;
    if (mx > ex && my === ey) angle = 90;
    if (mx < ex && my > ey) angle = 180 + angle;
    if (mx < ex && my === ey) angle = 270;
    if (mx < ex && my < ey) angle = 360 - angle;
    return angle;
  }

  handleMouseEnter = () => {
    clearTimeout(this.timer);
    const drag = this.trancontainer;
    this.setState({ extra: true });
    drag.addEventListener('mouseleave', this.handleMouseLeave);
  }

  handleMouseLeave = () => {
    this.timer = setTimeout(() => {
      this.setState({ extra: false });
    }, 300);
  }
  timer = null;
  handleRenderRotate = () => (
    <Rotate>
      <RoDrag
        onMouseDown={this.handleRotateMouseDown}
      />
      <Line />
    </Rotate>
  );

  /**
   * 键盘按下
   */
  handleKeyDown = (ev) => {
    // ev.stopPropagation();
    // ev.preventDefault();
    console.log('handleKeyDown');
    const left = this.formatStyle(this.trancontainer, 'left');
    const top = this.formatStyle(this.trancontainer, 'top');
    if (ev.keyCode === 37) {
      this.trancontainer.style.left = `${left - 1}px`;
    }
    if (ev.keyCode === 38) {
      this.trancontainer.style.top = `${top - 1}px`;
    }
    if (ev.keyCode === 39) {
      this.trancontainer.style.left = `${left + 1}px`;
    }
    if (ev.keyCode === 40) {
      this.trancontainer.style.top = `${top + 1}px`;
    }
    // this.handleTransfrom();
  }
  parent = null;

  formatStyle = (ele, props) => {
    const str = this.getStyle(ele)[props];
    return parseFloat(str.substring(0, str.length - 2));
  };

  /**
   * 拖动鼠标移动
   */
  handleDragMouseMove = (ev) => {
    console.log('handleDragMouseMove');
    // startX-鼠标X轴距离; startY-鼠标Y轴距离; tranX-相对父元素x轴距离; tranY-相对父元素Y轴距离
    const { startX, startY, tranX, tranY } = this.state.drag.toJS();
    const drag = this.trancontainer;
    const moveX = ev.clientX - startX;
    const moveY = ev.clientY - startY;
    // 元素本身宽高 left top
    // const x = this.formatStyle(drag, 'left');
    // const y = this.formatStyle(drag, 'top');
    // const tw = this.formatStyle(drag, 'width');
    // const th = this.formatStyle(drag, 'height');
    // const { width, height } = this.parent.getBoundingClientRect();
    // // 实际占据空间大小（旋转后不等同于元素尺寸）
    // const { width: w, height: h } = drag.getBoundingClientRect();
    // const maxX = width - w;
    // const maxY = height - h;
    if (!this.props.disabled) {
      if (this.props.deg > 0) {
        // drag.style.transform =
        //   `translate(
        //   ${moveX + tranX + x <= 0 + ((w - tw) / 2)
        //     ? -x + ((w - tw) / 2) : moveX + tranX + x >= maxX + ((w - tw) / 2)
        //       ? (maxX - x) + ((w - tw) / 2) : moveX + tranX}px,
        //   ${moveY + tranY + y <= 0 + ((h - th) / 2)
        //     ? -y + ((h - th) / 2) : moveY + tranY + y >= maxY + ((h - th) / 2)
        //       ? (maxY - y) + ((h - th) / 2) : moveY + tranY}px) rotate(${this.props.deg}deg)`;
        drag.style.transform =
          `translate(
          ${moveX + tranX}px,
          ${moveY + tranY}px) rotate(${this.props.deg}deg)`;
      } else {
        // drag.style.transform =
        //   `translate(
        //   ${moveX + tranX + x <= 0
        //     ? -x : moveX + tranX + x >= maxX
        //       ? maxX - x : moveX + tranX}px,
        //   ${moveY + tranY + y <= 0
        //     ? -y : moveY + tranY + y >= maxY
        //       ? maxY - y : moveY + tranY}px)`;
        // 不做边界限制
        drag.style.transform =
          `translate(
          ${moveX + tranX}px,
          ${moveY + tranY}px)`;
        // const setLeft = moveX + tranX + x <= 0 ? 0 : moveX + tranX + x >= maxX ? maxX - x : x + moveX;
        // drag.style.left = `${Math.round(setLeft / width)}%`;
        // drag.style.top = defaultPosition.y && `${Math.round(defaultPosition.y)}%`;
      }
    }
    this.handleTransfrom();
    // document.addEventListener('mouseup', this.handleMouseUp);
  }
  /**
   * 缩放鼠标落下
   */
  handleMouseDown = (ev, flag) => {
    console.log('handleMouseDown');
    ev.stopPropagation();
    document.addEventListener('mouseup', this.handleMouseUp);
    document.body.style.userSelect = 'none';
    document.body.style.webkitUserSelect = 'none';
    document.body.style.msUserSelect = 'none';
    document.body.style.mozUserSelect = 'none';
    this.setState({ dragFlag: flag });
    const startTranslateX = this.getTransX(
      this.getStyle(this.trancontainer).transform,
    );
    const startTranslateY = this.getTransY(
      this.getStyle(this.trancontainer).transform,
    );
    const parentX = this.formatStyle(this.parent, 'width');
    const parentY = this.formatStyle(this.parent, 'height');
    const clientX = ev.clientX;
    const clientY = ev.clientY;
    const startW = this.formatStyle(this.trancontainer, 'width');
    const startH = this.formatStyle(this.trancontainer, 'height');
    const startL = this.formatStyle(this.trancontainer, 'left');
    const startT = this.formatStyle(this.trancontainer, 'top');
    const startX = startTranslateX + startL;
    const startY = startTranslateY + startT;
    const startR = parentX - (startX + startW);
    const startB = parentY - (startY + startH);

    this.setState(({ scale }) => ({
      scale: scale.set('clientX', clientX)
        .set('clientY', clientY)
        .set('startW', startW)
        .set('startH', startH)
        .set('startL', startL)
        .set('startT', startT)
        .set('startX', startX)
        .set('startY', startY)
        .set('startR', startR)
        .set('startB', startB),
    }));
    document.addEventListener('mousemove', this.handleMouseMove);
  };
  /**
   * 缩放鼠标移动事件
   */
  handleMouseMove = (ev) => {
    console.log('handleMouseMove');
    const start = this.state.scale.toJS();
    console.log('start', start.startW, start.startH, start.startW / start.startH);
    const { isTransScale } = this.props;
    const transScale = start.startW / start.startH; // 缩放尺寸， 基于当前宽高比
    const MIN_HEIGHT = isTransScale ? (MIN_WIDTH / transScale) : MIN_WIDTH; // 拖拽组件最小高度
    document.removeEventListener('mousemove', this.handleDragMouseMove);
    document.removeEventListener('mousemove', this.handleRotateMouseMove);
    ev.stopPropagation();
    const { dragFlag } = this.state;
    const moveX = ev.clientX - start.clientX;
    const moveY = ev.clientY - start.clientY;
    // 以Y轴为参考(敲黑板)
    if (dragFlag === 'nw') {
      if (
        moveY < 0 || // 上移
        (moveY > 0 && start.startH - moveY >= MIN_HEIGHT)
      ) {
        this.trancontainer.style.height = `${start.startH - moveY}px`;
        this.trancontainer.style.top = `${start.startT + moveY}px`;

        // 实现等比变化
        const adjustWidth = moveY * transScale; // 等比变化之后，宽度的变化
        this.trancontainer.style.left = `${start.startL + adjustWidth}px`;
        this.trancontainer.style.width = `${(start.startH - moveY) * transScale}px`;
      }
    }
    if (dragFlag === 'ne') {
      if (
        (moveY < 0) ||
        (moveY > 0 && start.startH - moveY >= MIN_HEIGHT)
      ) {
        this.trancontainer.style.height = `${start.startH - moveY}px`;
        this.trancontainer.style.top = `${start.startT + moveY}px`;

        // 实现等比变化
        this.trancontainer.style.width = `${(start.startH - moveY) * transScale}px`;
      }
    }
    if (dragFlag === 'sw') {
      if (start.startB - moveY >= 0) {
        this.trancontainer.style.height = `${start.startH + moveY}px`;

        // 实现等比变化
        const adjustWidth = moveY * transScale; // 等比变化之后，宽度的变化
        this.trancontainer.style.left = `${start.startL - adjustWidth}px`;
        this.trancontainer.style.width = `${(start.startH + moveY) * transScale}px`;
      }
    }
    if (dragFlag === 'se') {
      if (start.startR - moveX >= 0) {
        this.trancontainer.style.width = `${start.startW + moveX}px`;
        if (isTransScale) this.trancontainer.style.height = `${(start.startW + moveX) / transScale}px`;
      }
      if (start.startB - moveY >= 0) {
        this.trancontainer.style.height = `${start.startH + moveY}px`;

        // 实现等比变化
        this.trancontainer.style.width = `${(start.startH + moveY) * transScale}px`;
      }
    }
    if (dragFlag === 'w') {
      if (
        (moveX < 0) || // 左移
        (moveX > 0 && start.startW - moveX >= MIN_WIDTH)
      ) {
        this.trancontainer.style.width = `${start.startW - moveX}px`;
        this.trancontainer.style.left = `${start.startL + moveX}px`;
        if (isTransScale) {
          const adjustHeight = moveX / transScale;
          const adjustTop = adjustHeight / 2;
          this.trancontainer.style.top = `${start.startT + adjustTop}px`;
          this.trancontainer.style.height = `${(start.startW - moveX) / transScale}px`;
        }
      }
    }
    if (dragFlag === 'e') {
      if (
        moveX >= 0 || // 右移
        (moveX < 0 && start.startW + moveX >= MIN_WIDTH)
      ) {
        this.trancontainer.style.width = `${start.startW + moveX}px`;
        if (isTransScale) {
          const adjustHeight = moveX / transScale;
          const adjustTop = adjustHeight / 2;
          this.trancontainer.style.top = `${start.startT - adjustTop}px`;
          this.trancontainer.style.height = `${(start.startW + moveX) / transScale}px`;
        }
      }
    }
    if (dragFlag === 'n') {
      if (
        moveY < 0 || // 上移
        (moveY > 0 && start.startH - moveY >= MIN_HEIGHT)
      ) {
        this.trancontainer.style.height = `${start.startH - moveY}px`;
        this.trancontainer.style.top = `${start.startT + moveY}px`;
        if (isTransScale) {
          const adjustWidth = moveY * transScale; // 等比变化之后，宽度的变化
          const adjustLeft = adjustWidth / 2;
          this.trancontainer.style.left = `${start.startL + adjustLeft}px`;
          this.trancontainer.style.width = `${(start.startH - moveY) * transScale}px`;
        }
      }
    }
    if (dragFlag === 's') {
      if (
        moveY > 0 || // 下移
        (moveY < 0 && start.startH + moveY >= MIN_HEIGHT)
      ) {
        this.trancontainer.style.height = `${start.startH + moveY}px`;
        if (isTransScale) {
          const adjustWidth = moveY * transScale; // 等比变化之后，宽度的变化
          const adjustLeft = adjustWidth / 2;
          this.trancontainer.style.left = `${start.startL - adjustLeft}px`;
          this.trancontainer.style.width = `${(start.startH + moveY) * transScale}px`;
        }
      }
    }
    this.handleTransfrom();
  }

  /**
   * 拖动停止后计算位置
   */
  handleTransfrom = () => {
    const result = {
      x: this.formatStyle(this.trancontainer, 'left') +
      this.getTransX(this.getStyle(this.trancontainer).transform),
      y: this.formatStyle(this.trancontainer, 'top') +
      this.getTransY(this.getStyle(this.trancontainer).transform),
      deg: this.state.rotate.get('deg'),
    };
    if (this.props.blur) {
      this[0].style.backgroundPosition = `-${result.x}px -${(result.y)}px`;
    }
  }

  /**
   * 鼠标抬起事件
   */
  handleMouseUp = () => {
    const result = {
      w: this.formatStyle(this.trancontainer, 'width'),
      h: this.formatStyle(this.trancontainer, 'height'),
      x: this.formatStyle(this.trancontainer, 'left') +
      this.getTransX(this.getStyle(this.trancontainer).transform),
      y: this.formatStyle(this.trancontainer, 'top') +
      this.getTransY(this.getStyle(this.trancontainer).transform),
      deg: this.state.rotate.get('deg'),
    };

    const { width, height } = this.parent.getBoundingClientRect();
    result.w = (result.w / width) * 100;
    result.h = (result.h / height) * 100;
    result.x = (result.x / width) * 100;
    result.y = (result.y / height) * 100;
    result.effectId = this.props.effectId;

    const drag = this.trancontainer;
    drag.style.width = `${result.w}%`;
    drag.style.height = `${result.h}%`;
    drag.style.left = `${result.x}%`;
    drag.style.top = `${result.y}%`;
    // drag.style.transform = 'translate(0,0)';
    console.log(this.props.defaultPosition.rotate, this.props.deg);
    drag.style.transform =
          `translate(0px, 0px) rotate(${this.props.deg ? this.props.deg : 0}deg)`;
    // drag.style.transform = `translate(0,0) rotate(${defaultPosition.rotate}deg)`;
    // drag.style.transform = defaultPosition.rotate ? `rotate(${defaultPosition.rotate}deg)` : `rotate(${0}deg)`;

    if (this.props.onChange && !this.props.disabled) {
      this.props.onChange(result);
    }
    document.body.style.userSelect = '';
    document.body.style.webkitUserSelect = '';
    document.body.style.msUserSelect = '';
    document.body.style.mozUserSelect = '';
    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mousemove', this.handleDragMouseMove);
    document.removeEventListener('mousemove', this.handleRotateMouseMove);
    document.removeEventListener('mouseup', this.handleMouseUp);
  };

  /**
   * 旋转鼠标点下事件
   * 旋转默认原点暂定为0度坐标 （width / 2）
   */
  handleRotateMouseDown = (ev) => {
    ev.stopPropagation();
    document.removeEventListener('mouseup', this.handleMouseUp);
    // document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mousemove', this.handleDragMouseMove);
    document.body.style.userSelect = 'none';
    document.body.style.webkitUserSelect = 'none';
    document.body.style.msUserSelect = 'none';
    document.body.style.mozUserSelect = 'none';
    document.addEventListener('mousemove', this.handleRotateMouseMove);
  }
  /**
   * 旋转鼠标移动事件
   */
  handleRotateMouseMove = (ev) => {
    /**
     * 1、获取鼠标移动时相对父元素的坐标 (client - parent.pffset)
     * 2、获取被旋转元素默认相对父元素中心坐标
     * ps: 不取相对屏幕边界的绝对坐标
     */
    const x = this.getTransX(
      this.getStyle(this.trancontainer).transform,
    );
    const y = this.getTransY(
      this.getStyle(this.trancontainer).transform,
    );
    const { left, top } = this.parent.getBoundingClientRect();
    const { left: tl, top: tt } = this.trancontainer.getBoundingClientRect();
    const mouseX = ev.clientX - (left);
    const mouseY = ev.clientY - (top);
    const elementX = (tl - left) + (this.formatStyle(this.trancontainer, 'width') / 2);
    const elementY = (tt - top) + (this.formatStyle(this.trancontainer, 'height') / 2);
    const deg = this.getAngleFromCenter(mouseX, mouseY, elementX, elementY);
    this.setState(({ rotate }) => ({
      rotate: rotate.set('deg', deg),
    }));
    /**
     * 旋转时加上移动产生的x与y偏移
     * translate属性应在rotate前
     */
    this.trancontainer.style.transform = `translate(${x}px, ${y}px)) rotate(${deg}deg)`;
    document.addEventListener('mouseup', this.handleMouseUp);
  }

  publicGetSize = () => {
    const result = {
      w: this.formatStyle(this.trancontainer, 'width'),
      h: this.formatStyle(this.trancontainer, 'height'),
      x: this.formatStyle(this.trancontainer, 'left') +
        this.getTransX(this.getStyle(this.trancontainer).transform),
      y: this.formatStyle(this.trancontainer, 'top') +
        this.getTransY(this.getStyle(this.trancontainer).transform),
      deg: this.state.rotate.get('deg'),
    };
    return result;
  }
  render() {
    const {
      children,
      disabled,
      rotate,
      translate,
      drag,
      extraBtn,
      defaultPosition,
      isTransScale,
    } = this.props;
    const { extra } = this.state;
    return (
      <TranContainer
        innerRef={(ref) => this.trancontainer = ref}
        tabIndex={0}
        autoFocus
        disabled
        {...this.props}
        transScale={isTransScale && defaultPosition.w / defaultPosition.h} // transScale是否等比设置最小高度
      >
        {extra && extraBtn && extraBtn()}
        {!disabled && rotate && this.handleRenderRotate()}
        {!disabled && (translate || drag) && <TransCtrl />}
        {!disabled && translate &&
          <ContrlArrow>
            <ArrowLeftTop onMouseDown={(e) => this.handleMouseDown(e, 'nw')} >nw</ArrowLeftTop>
            <ArrowRightTop onMouseDown={(ev) => this.handleMouseDown(ev, 'ne')} >ne</ArrowRightTop>
            <ArrowBottomLeft onMouseDown={(ev) => this.handleMouseDown(ev, 'sw')} >sw</ArrowBottomLeft>
            <ArrowBottomRight onMouseDown={(ev) => this.handleMouseDown(ev, 'se')} >se</ArrowBottomRight>
            <ArrowLeft onMouseDown={(e) => this.handleMouseDown(e, 'w')} >w</ArrowLeft>
            <ArrowRight onMouseDown={(e) => this.handleMouseDown(e, 'e')} >e</ArrowRight>
            <ArrowTop onMouseDown={(e) => this.handleMouseDown(e, 'n')} >n</ArrowTop>
            <ArrowBottom onMouseDown={(e) => this.handleMouseDown(e, 's')} >s</ArrowBottom>
          </ContrlArrow>
        }
        {React.Children.map(children, (element, idx) => {
          const type = element.type;
          const prop = type instanceof Function ? 'innerRef' : 'ref';
          return React.cloneElement(element, {
            [prop]: (ref) => this[idx] = ref,
          });
        })}
      </TranContainer>
    );
  }
}

/**
 * children: 可变换的元素
 * defaultPosition: 默认定位与尺寸
 * disabled: 禁用
 * onChange: 拖拽或尺寸变换回调函数
 * rotate: 是否可旋转
 * drag: 可拖动
 * isTransScale 是否等比缩放
 * effectId 标识
 */
Transformable.defaultProps = {
  isTransScale: false,
  translate: true,
};
Transformable.propTypes = {
  children: PropTypes.object,
  defaultPosition: PropTypes.object,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  rotate: PropTypes.bool,
  translate: PropTypes.bool,
  deg: PropTypes.number,
  blur: PropTypes.bool,
  drag: PropTypes.bool,
  extraBtn: PropTypes.func,
  isTransScale: PropTypes.bool,
  effectId: PropTypes.string,
};

export default Transformable;

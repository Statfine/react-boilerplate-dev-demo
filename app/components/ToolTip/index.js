import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Protal from '../Portal';

const Container = styled.div`
  position: relative;
`;

const TipContainer = styled.div`
  position: fixed;
  top: ${({ top }) => `${top}px` || '0%'};
  left: ${({ left }) => `${left}px` || '0%'};
  z-index: ${(props) => props.zIndex};
`;

const TipInfo = styled.span`
  font-size: 12px;
  color: #FFFFFF;
  display: ${({ show }) => show ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  padding: 3px 8px;
  background: #293133;
  border-radius: 4px;
  position: absolute;
  top: 100%;
  left: -50%;
  white-space: nowrap;
`;

export default class ToolTip extends React.PureComponent {
  state = {
    show: false,
    top: 0,
    left: 0,
  }
  render() {
    const { title, children, style, titleStyle, contentStyle, zIndex, className } = this.props;
    const { show, top, left } = this.state;
    return (
      <Container style={style} className={className}>
        <div
          ref={(ref) => (this.tooltip = ref)}
          style={contentStyle}
          onMouseEnter={() => {
            if (!this.state.show) {
              const { x, y, height } = this.tooltip.getBoundingClientRect();
              this.setState({ show: true, left: x + this.props.offsetLeft, top: y + height + 4 + this.props.scrollTop });
            }
          }}
          onMouseLeave={() => {
            this.setState({ show: false, left: 0, top: 0 });
          }}
        >
          {children}
        </div>
        {show && <Protal>
          <TipContainer top={top} left={left} zIndex={zIndex}>
            <TipInfo show={show} style={titleStyle} className="tool_tip">{title}</TipInfo>
          </TipContainer>
        </Protal>}
      </Container>
    );
  }
}

ToolTip.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.element,
    PropTypes.node,
  ]).isRequired,
  titleStyle: PropTypes.object,
  style: PropTypes.object,
  scrollTop: PropTypes.number,
  offsetLeft: PropTypes.number,
  contentStyle: PropTypes.object,
  zIndex: PropTypes.number,
  className: PropTypes.string,
};

ToolTip.defaultProps = {
  titleStyle: null,
  style: null,
  scrollTop: 0,
  offsetLeft: 0,
  contentStyle: null,
  zIndex: 100,
};

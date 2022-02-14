import React, {Component} from 'react';
import {withTranslation} from "react-i18next";
import PropTypes from 'prop-types';

import Shiitake from "shiitake";

import './Scrap.scss';

class Scrap extends Component {

  state = {
    isExpanded: false
  };

  expandedText = this.props.t('Scrap.readLess');

  truncationText = this.props.t('Scrap.readMore');

  notifyExpandChange = () => {
    const {onExpandChange} = this.props;
    if (onExpandChange) {
      onExpandChange(this.state.isExpanded);
    }
  };

  onTruncationTextClick = () => {
    const {onTruncationTextClick} = this.props;
    if (onTruncationTextClick) {
      onTruncationTextClick();
    } else {
      this.setState(prevState => {
        return {
          isExpanded: !prevState.isExpanded
        };
      }, this.notifyExpandChange);
    }
  };

  renderReadMore = () => {
    let {truncationText, hideTruncation} = this.props;
    if (!truncationText && !hideTruncation) {
      truncationText = this.truncationText;
    }
    return (
      <div className="Truncation">
        <div className="Truncation-inner">
          ...
          <div className="ReadMore" onClick={this.onTruncationTextClick}>{truncationText}</div>
        </div>
      </div>
    );
  };

  overflowNode = this.renderReadMore();

  renderCollapsedView = () => {
    const {className, lines, text} = this.props;
    return (
      <Shiitake lines={lines} className={className}
                overflowNode={this.overflowNode}>
        {text}
      </Shiitake>
    );
  };

  renderExpandedView = () => {
    const {className, text, t} = this.props;
    const classes = ['ScrapExpanded'];
    if (className) {
      classes.push(className);
    }
    return (
      <div className={classes.join(' ')}>
        <div>
          {text}
          <span className="ReadLess"
                onClick={this.onTruncationTextClick}>
            {t('Scrap.readLess')}
          </span>
        </div>
      </div>
    );
  };

  render() {
    const {isExpanded} = this.state;
    return isExpanded ? this.renderExpandedView() : this.renderCollapsedView();
  }
}

Scrap.propTypes = {
  className: PropTypes.string.isRequired,
  hideTruncation: PropTypes.bool,
  lines: PropTypes.number.isRequired,
  onExpandChange: PropTypes.func,
  truncationText: PropTypes.string,
  onTruncationTextClick: PropTypes.func,
  text: PropTypes.string.isRequired
};

export default withTranslation()(Scrap);


import React, {Component} from 'react';
import {Link} from "@reach/router";
import PropTypes from 'prop-types';

import {MainDashboardController} from "../../pages/MainDashBoard/MainDashboardController";

import './ExpandingCalculatedText.scss';

class ExpandingCalculatedText extends Component {

  collapseRef = React.createRef();

  expanderRef = React.createRef();

  fakeItemsRef = React.createRef();

  itemsHiddenStartIndex;

  mainItemsRef = React.createRef();

  mainRef = React.createRef();

  state = {
    expanded: false
  };

  subscriptions = {};

  constructor(props) {
    super(props);
    this.subscriptions.resizeBroadcaster = MainDashboardController.resizeBroadcaster.subscribe(this.onResize);
  }

  componentDidMount() {
    this.onResize();
  }

  componentWillUnmount() {
    for (const key in this.subscriptions) {
      this.subscriptions[key].unsubscribe();
    }
  }

  itemReducer = (result, item, index, array) => {
    const {renderItemFn} = this.props;
    const renderFn = renderItemFn ? renderItemFn : this.renderItem;
    result.push(renderFn(item, index, array));
    return result;
  };

  onItemClick = (item, index) => {
    const {onItemClick} = this.props;
    onItemClick(item, index);
  };

  onResize = () => {
    const {current: main} = this.mainRef;
    const {expanded} = this.state;
    if (main) {
      const {width} = main.getBoundingClientRect();
      const {childNodes} = this.fakeItemsRef.current;
      let item = 0;
      const itemCount = childNodes.length;
      let itemsToHideIndex = undefined;
      let itemsWidth = 0;
      let currentRect;
      const {itemSplit} = this.props;
      while ((itemsToHideIndex === undefined) && item < itemCount - 1) {
        currentRect = childNodes[item].getBoundingClientRect();
        itemsWidth += currentRect.width - 4.57 + 5; // Remove 4.57 for discrepancy between hidden and real items and then add 5 pixel margin
        if (itemSplit) {
          itemsWidth += itemSplit;
        }
        if (itemsWidth > width) {
          itemsToHideIndex = item;
        }
        item++;
      }
      if (!expanded) {
        let expanderDisplay;
        const {current: mainItems} = this.mainItemsRef;
        if (itemsToHideIndex !== undefined) {
          expanderDisplay = itemsToHideIndex ? 'block' : 'none';
          item = itemsToHideIndex;
          let currentItem;
          while (item < itemCount) {
            currentItem = mainItems.childNodes[item];
            currentItem.classList.add('Hidden');
            item++;
          }
        } else {
          itemsToHideIndex = itemCount;
          expanderDisplay = 'none';
        }
        this.expanderRef.current.style.display = expanderDisplay;
        if (this.itemsHiddenStartIndex < itemsToHideIndex) {
          item = this.itemsHiddenStartIndex;
          let currentItem;
          while (item < itemsToHideIndex) {
            currentItem = mainItems.childNodes[item];
            currentItem.classList.remove('Hidden');
            item++;
          }
        }
        if (this.itemsHiddenStartIndex) {
          const previousLastVisibleElement = mainItems.childNodes[this.itemsHiddenStartIndex - 1];
          const previousCommaSeparator = previousLastVisibleElement.childNodes[1];
          if (previousCommaSeparator) {
            previousCommaSeparator.style.display = 'inline';
            previousLastVisibleElement.style.marginRight = '5px';
          }
        }
        const lastVisibleElement = mainItems.childNodes[itemsToHideIndex - 1];
        if (lastVisibleElement) {
          const lastCommaSeparator = lastVisibleElement.childNodes[1];
          if (lastCommaSeparator) {
            lastCommaSeparator.style.display = 'none';
            lastVisibleElement.style.marginRight = '1px';
          }
        }

        this.itemsHiddenStartIndex = itemsToHideIndex;
      } else {
        this.collapseRef.current.style.display = itemsToHideIndex ? 'block' : 'none';
      }
    }
  };

  renderCollapse = () => {
    let view = null;
    const {expanded} = this.state;
    if (expanded) {
      const {renderCollapseFn} = this.props;
      if (renderCollapseFn) {
        view = renderCollapseFn();
      } else {
        view = (
          <div className="ExpandingCalculatedText-collapse"
               onClick={this.toggleExpanded}>
            [x]
          </div>
        );
      }
    }

    return (
      <div ref={this.collapseRef}>
        {view}
      </div>
    );
  };

  renderExpander = () => {
    let view = null;
    const {expanded} = this.state;
    if (!expanded) {
      const {expandHandler, renderExpanderFn} = this.props;
      if (renderExpanderFn) {
        view = renderExpanderFn();
      } else {
        const expandFn = expandHandler ? expandHandler : this.toggleExpanded;
        view = (
          <div className="ExpandingCalculatedText-expander"
               onClick={expandFn}>
            ...
          </div>
        );
      }
    }

    return (
      <div ref={this.expanderRef}>
        {view}
      </div>
    );
  };

  renderItems = (className, ref, style) => {
    const {items} = this.props;
    const {expanded} = this.state;
    const classes = [className];
    if (expanded) {
      classes.push('Expanded');
    }
    return (
      <div className={classes.join(' ')} ref={ref} style={style}>
        {items.reduce(this.itemReducer, [])}
        {this.renderCollapse()}
      </div>
    );
  };

  renderItem = (item, index, array) => {
    const {getRouteFn, hideCommaSeparators} = this.props;
    let {id, name} = item.tag ? item.tag : item;
    let view;
    const innerView = (
      <React.Fragment>
        {name}
        {!hideCommaSeparators ? <span className="CommaSeparator">
          {index !== array.length - 1 ? ', ' : ''}
        </span> : null}
      </React.Fragment>
    );
    if (getRouteFn) {
      view = (
        <Link to={getRouteFn(id, name)} key={index}>
          {innerView}
        </Link>
      );
    } else {
      view = (
        <div key={index} onClick={this.onItemClick.bind(this, item, index)}>
          {innerView}
        </div>
      );
    }
    return view;
  };

  toggleExpanded = () => {
    const {blockExpand} = this.props;
    if (!blockExpand) {
      this.setState(prevState => {
        const {expanded} = prevState;
        return {
          expanded: !expanded
        };
      }, this.updateCommaSeparatorVisibility);
    }
  };

  updateCommaSeparatorVisibility = () => {
    if (this.itemsHiddenStartIndex) {
      const {current: mainItems} = this.mainItemsRef;
      const {expanded} = this.state;
      const lastVisibleElement = mainItems.childNodes[this.itemsHiddenStartIndex - 1];
      const previousCommaSeparator = lastVisibleElement.childNodes[1];
      if (previousCommaSeparator) {
        previousCommaSeparator.style.display = expanded ? 'inline' : 'none';
        lastVisibleElement.style.marginRight = expanded ? '5px' : '1px';
      }
    }
  };

  render() {
    const classes = ['ExpandingCalculatedText'];
    const {className} = this.props;
    if (className) {
      classes.push(className);
    }
    const style = {
      position: 'absolute',
      left: -20000
    };
    return (
      <div className={classes.join(' ')}
           ref={this.mainRef}>
        {this.renderItems('FakeItems', this.fakeItemsRef, style)}
        {this.renderItems('Main', this.mainItemsRef)}
        {this.renderExpander()}
      </div>
    );
  }
}

ExpandingCalculatedText.propTypes = {
  className: PropTypes.string,
  blockExpand: PropTypes.bool,
  expandHandler: PropTypes.func,
  getRouteFn: PropTypes.func,
  hideCommaSeparators: PropTypes.bool,
  items: PropTypes.array.isRequired,
  itemSplit: PropTypes.number,
  onItemClick: PropTypes.func,
  renderCollapseFn: PropTypes.func,
  renderExpanderFn: PropTypes.func,
  renderItemFn: PropTypes.func
};

export default ExpandingCalculatedText;

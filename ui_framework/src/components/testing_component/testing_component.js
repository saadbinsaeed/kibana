import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class KuiTestingComponent extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  }

  constructor(props) {
    super(props);
  }

  render() {
    const {
      children,
      className,
      ...rest
    } = this.props;

    const classes = classNames('kuiTestingComponent', className);

    return (
      <div
        className={classes}
        {...rest}
      >
        <p>this is my 1st component</p>
        {children}
      </div>
    );
  }
}

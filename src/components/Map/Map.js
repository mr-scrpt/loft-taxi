import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    width: 200,
    height: 200
  }
};

class Map extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div>Карта</div>
    );
  }
}

export default withStyles(styles)(Map);

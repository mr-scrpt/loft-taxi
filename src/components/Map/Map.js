import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import mapboxgl from 'mapbox-gl';
import ModalAddress from '../ModalAddress';

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
  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoidGlweWxqYSIsImEiOiJjazAyOHBtM3IyanE0M2J1dDhtNDZsNHpwIn0.3_-aEyOwipYPz0t8BXImsA';
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [30.264, 59.894], // starting position [lng, lat]
      zoom: 9 // starting zoom
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <>
        <div ref={el => this.mapContainer = el} style={{width: '100%', height: '100%'}}>

        </div>
        <ModalAddress/>
      </>
    );
  }
}

export default withStyles(styles)(Map);

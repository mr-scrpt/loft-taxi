import React, {PureComponent} from 'react';
import {withStyles} from '@material-ui/core/styles';
import mapboxgl from 'mapbox-gl';
import ModalAddress from '../ModalAddress';
import {compose} from 'recompose';
import {connect} from "react-redux";
import {getCoordsWay} from '../../modules/Map';

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
  state = {

  };
  mapRef = React.createRef();

  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoidGlweWxqYSIsImEiOiJjazAyOHBtM3IyanE0M2J1dDhtNDZsNHpwIn0.3_-aEyOwipYPz0t8BXImsA';

    const map = new mapboxgl.Map({
      container: this.mapRef.current,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [30.264, 59.894], // starting position [lng, lat]
      zoom: 9 // starting zoom
    });

    this.setState({map});
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const {coordsWay} = this.props;
    const {map} = this.state;
    if (coordsWay !== prevProps.coordsWay) {
      map.on('load', function () {
        map.addLayer({
          "id": "route",
          "type": "line",
          "source": {
            "type": "geojson",
            "data": {
              "type": "Feature",
              "properties": {},
              "geometry": {
                "type": "LineString",
                "coordinates": [
                  [30.371142, 59.92443],
                  [30.371932, 59.924407],
                  [30.374519, 59.917191],
                  [30.374572, 59.915347],
                  [30.369497, 59.914448],
                  [30.363392, 59.914143],
                  [30.359925, 59.91432],
                  [30.357957, 59.911102],
                  [30.359507, 59.910827],
                  [30.361112, 59.909908],
                  [30.363222, 59.907253],
                  [30.36445, 59.904733],
                  [30.358976, 59.905967],
                  [30.355892, 59.902484]
                ]
              }
            }
          },
          "layout": {
            "line-join": "round",
            "line-cap": "round"
          },
          "paint": {
            "line-color": "#888",
            "line-width": 8
          }
        });
      })

    }
  }

  render() {
    const {classes} = this.props;


    return (
      <>
        <div ref={this.mapRef} style={{width: '100%', height: '100%'}}>
        </div>
        <ModalAddress/>
      </>
    );
  }
}

export default compose(
  connect(
    state => ({coordsWay: getCoordsWay(state)})
  ),
  withStyles(styles)
)(Map)


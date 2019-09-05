import React, {PureComponent} from 'react';
import {withStyles} from '@material-ui/core/styles';
import mapboxgl from 'mapbox-gl';
import ModalAddress from '../ModalAddress';
import {compose} from 'recompose';
import {connect} from "react-redux";
import {getCoordsWay, getOnMyWay} from '../../modules/Map';

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
    const {coordsWay, getOnMyWay} = this.props;
    const {map} = this.state;
    // Удаление
    if (getOnMyWay === false) {
      if (map.getLayer("route")) {
        map.removeLayer("route");
      }

      if (map.getSource("route")) {
        map.removeSource("route");
      }
    }

    if (this.props.coordsWay.length && (getOnMyWay === 'loaded' || getOnMyWay)) {
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
                "coordinates": coordsWay
              }
            }
          },
          "layout": {
            "line-join": "round",
            "line-cap": "round"
          },
          "paint": {
            "line-color": "#b80034",
            "line-width": 8
          }
        });
    }

   /* if (getOnMyWay === false){
      map.removeLayer(map.painter.id);
      //map.removeSource("route");
      console.log(map);
    }*/

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
    state => ({coordsWay: getCoordsWay(state), getOnMyWay: getOnMyWay(state)})
  ),
  withStyles(styles)
)(Map)


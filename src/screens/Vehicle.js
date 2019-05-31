import React from 'react';
import { StatusBar } from 'react-native';
import Container from '../components/Container';
import Spinner from '../components/Spinner';
import DescriptionRow from '../components/DescriptionRow';

class Vehicle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      spinner: false
    };
  }

  componentDidMount() {
    const url = this.props.navigation.getParam('url');
    this.setState({ spinner: true }, () => this._fetchVehicleDetails(url));
  }

  _fetchVehicleDetails(url) {
    fetch(url)
      .then(res => res.json())
      .then(res => this.setState({ data: res, spinner: false }))
      .catch(err => console.error(err));
  }

  _renderRow(label, value) {
    return <DescriptionRow label={label} value={value} />;
  }

  render() {
    const {
      name,
      model,
      manufacturer,
      cost_in_credits,
      length,
      max_atmosphering_speed,
      crew,
      passengers,
      cargo_capacity,
      consumables,
      vehicle_class
    } = this.state.data;

    return (
      <Container>
        <StatusBar barStyle='light-content' />
        {this._renderRow('Name', name)}
        {this._renderRow('Model', model)}
        {this._renderRow('Cost in credits', cost_in_credits)}
        {this._renderRow('Length', length)}
        {this._renderRow('Max. atmosphering speed', max_atmosphering_speed)}
        {this._renderRow('Crew', crew)}
        {this._renderRow('Passengers', passengers)}
        {this._renderRow('Cargo Capacity', cargo_capacity)}
        {this._renderRow('Consumables', consumables)}
        {this._renderRow('Vehicle class', vehicle_class)}
        <Spinner enable={this.state.spinner} />
      </Container>
    );
  }
}

export default Vehicle;

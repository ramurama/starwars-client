import React from 'react';
import { View, FlatList, StatusBar } from 'react-native';
import Container from '../components/Container';
import VehicleListItem from '../components/VehichleListItem';
import { API_VEHICLE_BASE } from '../config/api';
import Spinner from '../components/Spinner';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spinner: false,
      vehicles: [],
      nextPage: undefined
    };
  }

  componentDidMount() {
    this.setState({ spinner: true }, () => this._getVehicles(API_VEHICLE_BASE));
  }

  async _getVehicles(url) {
    if (this.state.nextPage !== null) {
      try {
        const data = await this._fetchVehicles(url);
        const { next, results } = data;
        this.setState({
          spinner: false,
          vehicles: [...this.state.vehicles, ...results],
          nextPage: next
        });
      } catch (err) {
        console.error(err);
      }
    }
  }

  _fetchVehicles(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json())
        .then(res => {
          resolve(res);
        })
        .catch(err => reject(err));
    });
  }

  render() {
    return (
      <Container>
        <StatusBar barStyle='light-content' />

        <View style={{ flex: 1 }}>
          <FlatList
            data={this.state.vehicles}
            extraData={this.state}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <VehicleListItem
                data={item}
                onPress={() =>
                  this.props.navigation.navigate('vehicle', {
                    title: item.name,
                    url: item.url
                  })
                }
              />
            )}
            showsVerticalScrollIndicator={false}
            onEndReachedThreshold={0.5}
            onEndReached={() => this._getVehicles(this.state.nextPage)}
          />
        </View>
        <Spinner enable={this.state.spinner} />
      </Container>
    );
  }
}

export default Main;

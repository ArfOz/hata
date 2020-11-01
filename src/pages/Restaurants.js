import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import {useDispatch} from 'react-redux';

import {RestaurantItem} from '../components';

const Restaurants = (props) => {
  const [list, setList] = useState([]);
  const dispatch = useDispatch();

  const fetchData = () => {
    axios
      .get(
        'https://opentable.herokuapp.com/api/restaurants?state=IL',
        // bu şekilde de yazılabilir
        // 'https://opentable.herokuapp.com/api/restaurants',
        // {params: {
        //     "state" : "IL"
        // }}
      )
      .then((response) => setList(response.data.restaurants))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderList = ({item}) => (
    <RestaurantItem
      item={item}
      onAddFavourite={() => dispatch({
        type: 'ADD_TO_FAVOURITE',
        payload: {selectedRestaurant: item},
      })}
    />
  );
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Text style={{fontSize: 25, fontWeight: 'bold', textAlign: 'center'}}>
          Restaurants Page
        </Text>
        <FlatList
          data={list}
          renderItem={renderList}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => (
            <View style={{borderWidth: 1, borderColor: 'red'}} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export {Restaurants};

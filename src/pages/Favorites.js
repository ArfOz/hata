import React from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import { useSelector } from 'react-redux';

const Favorites = () => {
    const favList = useSelector(state => state.favouriteList)
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{flex:1}}>
        <FlatList
        data={favList}
        renderItem={({item}) => <Text>{item.name}</Text>}
        keyExtractor= {(item,index) => index.toString()}
        ListEmptyComponent={() => <Text>Nothing On Fav...</Text>}
        />
      </View>
    </SafeAreaView>
  );
};

export {Favorites};

import React, {useEffect} from 'react';
import {StyleSheet, SafeAreaView, FlatList} from 'react-native';
import BackGroundMode from '../../component/BackGroundMode';
import {useDispatch, useSelector} from 'react-redux';
import {fetchApiData} from '../../redux/action';
import {initValue} from '../../redux/reduxTypes';
import Header from '../../component/Header';
import CardView from '../../component/CardView';

// in this initValue only apiData will be available
type intialState = Pick<initValue, 'apiData'>;

const Home = () => {
  const dispatch = useDispatch();
  const getdata = useSelector((state: intialState) => state.apiData);

  useEffect(() => {
    dispatch(fetchApiData());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <Header label="Home" />

      <BackGroundMode variant="default">
        <FlatList
          data={getdata}
          keyExtractor={(_, index) => `index${index}`}
          horizontal={false}
          renderItem={({item}) => {
            return <CardView {...item} />;
          }}
        />
      </BackGroundMode>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

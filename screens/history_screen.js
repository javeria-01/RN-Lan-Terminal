import CalculateBtn from '../components/calculate_btn';
import { View, FlatList, Text, StyleSheet } from 'react-native';

const HistoryScreen = ({ route }) => {
  const { history } = route.params || { history: [] };

  const renderItem = ({ item }) => (
    <View style={styles.historyItem}>
      <Text>{`${item.expr} = ${item.res}`}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={history}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
            {history.length === 0 && (
        <Text style={{ textAlign: 'center', marginTop: 20 , fontSize: 20}}>No history available</Text>
      )}
       {history.length > 0 && (
      <CalculateBtn label="Clear History" onPress={() => navigation.setParams({ history: [] })} />
     
      )}
       <View style={{marginBottom: 30}}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  historyItem: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' },
});

export default HistoryScreen;
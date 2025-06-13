import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ElvatedButton from '../components/button';
import CalculateBtn from '../components/calculate_btn';
const CalculatorScreen = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState([]);
  const navigation = useNavigation();

  const evaluateExpression = (expr) => {
    try {
      if (expr.includes('!')) {
        const n = parseInt(expr.replace('!', ''));
        return factorial(n);
      }else if (expr.includes('√')) {
        const n = parseFloat(expr.replace('√', ''));
        return Math.sqrt(n);
      }else{
        return eval(expr);
      }     
     
    } catch (e) {
      return 'Error';
    }
  };

  const factorial = (n) => (n === 0 ? 1 : n * factorial(n - 1));

  const handleCalculate = () => {
    const res = evaluateExpression(expression);
    setResult(res);
    setHistory([...history, { id: Date.now().toString(), expr: expression, res }]);
    setExpression('');
  };

  const operations = ['+', '-', '*', '/', 'sin', 'cos', 'tan', 'x^2', '%', '!', '√'];

  return (
    <View style={styles.container}>
    <Text style={styles.result}>Result: {result}</Text>
      <TextInput
        style={styles.input}
        value={expression}
        onChangeText={setExpression}
        placeholder="Enter expression"
        keyboardType="numeric"
      />
      
      <View style={styles.buttonContainer}>
        {operations.map(op => (
          <ElvatedButton key={op} label={op} onPress={() => setExpression(expr => expr + op)} />
        ))}
        
      </View>
      <View style={{flex: 1}}>
      </View>
      <CalculateBtn label="Calculate" onPress={handleCalculate} />
      <CalculateBtn label="History" onPress={() => navigation.navigate('History', { history })} />
      <View style={{marginBottom: 30}}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  input: { borderWidth: 1, padding: 10, marginBottom: 20, marginTop: 10 },
  result: { fontSize: 24, marginBottom: 10 },
  buttonContainer: { flexDirection: 'row', flexWrap: 'wrap' },
});

export default CalculatorScreen;
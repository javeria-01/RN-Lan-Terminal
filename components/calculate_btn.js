
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CalculateBtn = ({ label, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: { padding: 10, margin: 5, backgroundColor: '#ddd', borderRadius: 5},
  buttonText: { textAlign: 'center' , fontSize: 18},
});

export default CalculateBtn;
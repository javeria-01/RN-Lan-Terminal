import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ElvatedButton = ({ label, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: { padding: 10, margin: 5, backgroundColor: '#ddd', borderRadius: 5, width: 120, height: 52},
  buttonText: { textAlign: 'center' , fontSize: 18},
});

export default ElvatedButton;
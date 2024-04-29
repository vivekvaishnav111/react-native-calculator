import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import { useState } from 'react';

export default function App() {
  const [displayValue, setDisplayValue] = useState('0');
  const [firstDisplayValue, setFirstDisplayValue] = useState('');
  const [firstValue, setFirstValue] = useState('');
  const [operator, setOperator] = useState(null);

  //--Function to Handle Number Buttons--//

  const handleNumButtons = (num) => {
    if (displayValue === '0') {
      setDisplayValue(num.toString());
    } else setDisplayValue((displayValue + num).toString());
  };
  //--Function to handle operator buttons--//
  const handleOperators = (operator) => {
    setOperator(operator);
    setFirstValue(displayValue);
    setFirstDisplayValue((displayValue + operator).toString());
    setDisplayValue('');
  };
  //-- Function to Handle Clear Button--//
  const handleClearButton = () => {
    setFirstValue('');
    setOperator(null);
    setDisplayValue('');
    setFirstDisplayValue('');
  };
  //--Function to handle equal button--//
  const handleEqualButton = () => {
    // handleClearButton();
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);
    if (operator === '+') setDisplayValue((num1 + num2).toString());
    else if (operator === '-') setDisplayValue((num1 - num2).toString());
    else if (operator === 'x') setDisplayValue((num1 * num2).toString());
    else if (operator === '/') setDisplayValue((num1 / num2).toString());
    else if (operator === '%') setDisplayValue((num1 % num2).toString());
    setOperator(null);
    setFirstValue('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.calcContainer}>
        <View style={styles.displayContainer}>
        
          <View style={styles.firstNumberDisplay}><Text style={styles.displayNumbers} >{firstDisplayValue}</Text></View>
          <View style={styles.secondNumberDisplay}><Text style={styles.displayNumbers}>{displayValue}</Text></View>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.row}>
            <TouchableOpacity
              style={[styles.button, styles.clearButton]}
              onPress={() => handleClearButton()}>
              <Text style={styles.buttonText}>AC</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleNumButtons(7)}>
              <Text style={styles.buttonText}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleNumButtons(8)}>
              <Text style={styles.buttonText}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleNumButtons(9)}>
              <Text style={styles.buttonText}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.operatorButton]}
              onPress={() => handleOperators('%')}>
              <Text style={[styles.buttonText, styles.operatorButtonText]}>
                %
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleNumButtons(4)}>
              <Text style={styles.buttonText}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleNumButtons(5)}>
              <Text style={styles.buttonText}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleNumButtons(6)}>
              <Text style={styles.buttonText}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.operatorButton]}
              onPress={() => handleOperators('/')}>
              <Text style={[styles.buttonText, styles.operatorButtonText]}>
                ÷
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleNumButtons(1)}>
              <Text style={styles.buttonText}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleNumButtons(2)}>
              <Text style={styles.buttonText}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleNumButtons(3)}>
              <Text style={styles.buttonText}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.operatorButton]}
              onPress={() => handleOperators('x')}>
              <Text style={[styles.buttonText, styles.operatorButtonText]}>x</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleNumButtons(0)}>
              <Text style={styles.buttonText}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.operatorButton]}
              onPress={() => handleOperators('+')}>
              <Text style={[styles.buttonText, styles.operatorButtonText]}>
                +
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.operatorButton]}
              onPress={() => handleOperators('-')}>
              <Text style={[styles.buttonText, styles.operatorButtonText]}>
                -
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.equalButton]}
              onPress={() => handleEqualButton()}>
              <Text style={styles.buttonText}>=</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000',
    padding: 8,
    marginTop:30,
    
  },
  calcContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#1a2533',
    borderRadius: 30,
    padding: 10,
  },
  displayContainer: {
    width: '100%',
    height: '30%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 30,
  },
  firstNumberDisplay: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  secondNumberDisplay: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  displayNumbers:{
    fontSize: 50,
    fontWeight: 200,
  },
  buttonContainer: {
    marginTop: 10,
    flex: 1,
    width: '100%',
    // height: 500,
    backgroundColor: '#2e2e2e',
    borderRadius: 30,
    padding: 10,
    // flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
    backgroundColor: '#e8e6e3',
    // width: 100,
    // height: 100,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 80,
    margin: 2,
  },
  buttonText: {
    //fontWeight: 700,
    fontSize: 30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  clearButton: {
    backgroundColor: '#fc9403',
  },
  operatorButton: {
    color: '#fc9403',
    backgroundColor: '#ccc',
  },
  operatorButtonText: {
    color: '#000',
  },
  equalButton:{
    backgroundColor: '#fc9403',
    borderColor: '#000',
  },
});

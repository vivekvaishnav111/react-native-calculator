import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.calcContainer}>
        <View style={styles.displayContainer}></View>
        <View style={styles.buttonContainer}>
          <View style={styles.row}>
            <TouchableOpacity style={[styles.button, styles.clearButton]}>
              <Text style={styles.buttonText}>AC</Text>
            </TouchableOpacity>            
            
           
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button,styles.operatorButton]}>
              <Text style={[styles.buttonText, styles.operatorButtonText]}>%</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button,styles.operatorButton]}>
              <Text style={[styles.buttonText, styles.operatorButtonText]}>÷</Text>
            </TouchableOpacity>
         
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button,styles.operatorButton]}>
              <Text style={[styles.buttonText, styles.operatorButtonText]}>x</Text>
            </TouchableOpacity>
         
          </View>
           <View style={styles.row}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button,styles.operatorButton]}>
              <Text style={[styles.buttonText, styles.operatorButtonText]}>+</Text>
            </TouchableOpacity>
             <TouchableOpacity style={[styles.button,styles.operatorButton]}>
              <Text style={[styles.buttonText, styles.operatorButtonText]}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button,styles.equalButton]}>
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
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  calcContainer: {
    width: '100%',
    height: 600,
    backgroundColor: '#1a2533',
    borderRadius: 30,
    padding: 10,
  },
  displayContainer: {
    width: '100%',
    height: 150,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 30,
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
    flex:1,
    backgroundColor: '#e8e6e3',
    // width: 100,
    // height: 100,
    padding:10,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius:80,
    margin:2
  },
  buttonText: {
    //fontWeight: 700,
    fontSize:30
  },
  row: {

    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  clearButton:{
    backgroundColor:'#fc9403'
  },
  operatorButton:{
    color:'#fc9403',
    backgroundColor:'#ccc'
  },
  operatorButtonText:{
    color:'#000'
    },
  equalButton:{
    backgroundColor:'#fc9403',
    borderColor:'#000',
    }
});

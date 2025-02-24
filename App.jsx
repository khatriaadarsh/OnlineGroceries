import {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  FlatList,
  TextInput,
  Button,
} from 'react-native';
const App = () => {
  const data = [
    {id: '1', name: 'Apple'},
    {id: '2', name: 'Banana'},
    {id: '3', name: 'Cherry'},
    {id: '4', name: 'Date'},
    {id: '5', name: 'Elderberry'},
    {id: '6', name: 'Fig'},
    {id: '7', name: 'Grape'},
    {id: '8', name: 'Honeydew'},
  ];
  const [result, setResult] = useState('');
  const [submitText, setSubmitText] = useState('');
  const handleSubmit = () => {
    setSubmitText(result);
    setResult('');
  };
  return (
    <SafeAreaView style={style.container}>
      {/* <FlatList
        data={data}
        renderItem={({item}) => (
          <View style={style.item}>
            <Text style={style.text}>{item.name}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      /> */}

      <Text style={style.welText}>Welcome to Input text Application</Text>
      <TextInput
        placeholder="Enter text here..."
        style={style.inputText}
        value={result}
        onChangeText={setResult}
        multiline
      />
      <Button title="Submit" onPress={handleSubmit}></Button>
      {submitText ? <Text>Result:{submitText}</Text> : null}
    </SafeAreaView>
  );
};
export default App;

const style = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    padding: 16,
    alignItems: 'center',
    backgroundColor: 'gray',
    justifyContent: 'center',
    gap: 10,
  },
  welText: {
    fontWeight: 'bold',
    fontSize: 19,
  },
  inputText: {
    width: '100%',
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
  },
  // item: {
  //   padding: 16,
  //   marginVertical: 8,
  //   backgroundColor: 'white',
  //   borderRadius: 8,
  // },
  // text: {
  //   fontSize: 18,
  // },
});
// card: {
//   width: 100,
//   height: 100,
//   backgroundColor: 'white',
//   borderRadius: 10,
//   padding: 5,
//   alignItems: 'center',
//   justifyContent: 'center',
// },

/* <View style={style.card}>
<Image
  style={{width: 40, height: 40, borderRadius: 40}}
  source={{
    uri: 'https://plus.unsplash.com/premium_photo-1669703777437-27602d656c27?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  }}></Image>
<Text>Name</Text>
<Text>Email</Text>
</View> */

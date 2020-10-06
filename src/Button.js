import React from 'react';  
  
import { StyleSheet, View, Button } from 'react-native';  
  
export default class ButtonScreen extends React.Component {  
  
    constructor(props) {  
        //constructor to set default state  
        super(props);  
        this.state = {  
            username: '',  
        };  
    }  
    static navigationOptions = {  
        title: 'Button',  
        headerStyle: {  
            backgroundColor: '#f4511e',  
        },  
          
        headerTitleStyle: {  
            fontWeight: 'bold',  
        },  
    };  
  
    render() {  
        const { navigate } = this.props.navigation;  
        return (  
            <View style={styles.bgimage}>
            <Image source =
            {require('C:/Users/jitendra reddy/BoardGame/src/images/game card 3.png')} />)
        <View style={styles.buttonStyle}>  
            <Button  
        title="Start Game"  
        // color="#00B0FF"  
        onPress={() =>  
        this.props.navigation.navigate('Cards', {  
            userName: this.state.username,  
            otherParam: '101',  
        })  
    }  
        />  
        </View>  
        </View>
    );  
    }  
}  
const styles = StyleSheet.create({  

    buttonStyle:{ 
        justifyContent:"center",
        width: "93%",  
        marginTop: 50,  
        elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    },
    bgimage:{
        flex:1,
justifyContent:"center",
alignItems: "center",
    } 
});  
import React, { Component } from 'react'
import { Text, StyleSheet, View, Button} from 'react-native'

class HomeScreen extends Component {
    render() {
        return (
            <View>
                <Text>Hello</Text>
                <Button
                    onPress={()=>this.props.navigation.navigate('DeatilStack')}
                    title="Learn More"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        )
    }
}
export default HomeScreen

const styles = StyleSheet.create({})

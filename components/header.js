import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


// export default class Header extends React.Component {
const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{ props.title }</Text>
        </View>
    )
}
// }

const styles = {
    header: {
        backgroundColor: "#171717",
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40
    },
    title: {
        color: "#F3F3F3",
        fontSize: 22,
        fontWeight: "900",
        textTransform: "uppercase",
        alignItems: "center"
    }
};


export default Header;
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Clipboard } from "react-native";
import { WebBrowser } from "expo";

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

	async fromClipboard() {
		let url = await Clipboard.getString();
		console.log(url);
		// if (this.isLink) {
		WebBrowser.openBrowserAsync("https://unv.is/" + url);
		// } else {
		//   Alert.alert(
		//     'No link detected',
		//     'Your clipboard does not seem to contain any link',
		//     [
		//       {text: 'OK', onPress: () => console.log("Alert dialog closed")},
		//     ],
		//   )
		//}
	}
	isLink() {
		return true;
	}

	render() {
		return (
			<View style={styles.container}>
				<Image style={styles.image} source={require("./assets/padlock.svg")} />
				<Button title="Open from clipboard" onPress={this.fromClipboard} />
			</View>
		);
	}
}

const Button = (props) => {
	return (
		<TouchableOpacity style={styles.button} onPress={props.onPress}>
			<Text style={{ fontSize: 18 }}>{props.title}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#1DE07E",
		color: "white",
		alignItems: "center",
		justifyContent: "center",
	},
	image: {
		height: 100,
		width: 100,
	},
	button: {
		height: 80,
		width: 200,
		backgroundColor: "white",
		borderColor: "white",
		borderRadius: 30,
		justifyContent: "center",
		alignItems: "center",
	},
});

/*
I need to add a setting to change the different "providers" that circumvent articles, in case of them doesn't work
Some include: outline.com, unv.is, 
*/

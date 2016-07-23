import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Avatar, Subheader, COLOR, IconToggle, Icon } from 'react-native-material-design';

export default class IconToggles extends Component {

	constructor(props) {
		super(props);
		this.state = {
			badgeOne: 3,
			badgeTwo: 6,
			badgeThree: 9
		};

	}

	incrementBadge = (badge) => {
		this.setState({[badge]: this.state[badge] + 1});
	};

	render() {
		return (
			<View>
				<Subheader text="Icons"/>
				<View style={styles.avatarContainer}>
					<IconToggle color="paperGrey900">
						<Icon
							name="business"
							color="paperGrey900"
							style={styles.icon}
						/>
					</IconToggle>
				</View>
			</View>
		);
	}
}

const styles = {
	avatarContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 16
	},
	icon: {
		margin: 16
	}
};
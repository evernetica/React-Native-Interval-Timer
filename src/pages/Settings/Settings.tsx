import React from 'react';
import {Text, View} from 'react-native';
import {colors} from '@components/colors.ts';

export const Settings = () => {
	return (
		<View style={{backgroundColor: colors.main, flex: 1}}>
			<Text style={{color: colors.textWhite}}>Settings</Text>
		</View>
	);
};
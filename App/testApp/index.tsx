import React from 'react'
import { SafeAreaView, Text, StatusBar } from 'react-native'

export function App(): React.ReactElement {
	return (
		<>
			<StatusBar barStyle="dark-content" />
			<SafeAreaView>
				<Text>
					test app
				</Text>
			</SafeAreaView>
		</>
	)
}

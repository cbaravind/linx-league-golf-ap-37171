import { Box, Button, Center, Icon, Image, Link, Pressable, ScrollView, Text, View } from 'native-base'

import { SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { colors } from '../theme'
import AppHeader from './AppHeader'
export default function Container({ children,title }) {
    return (
        <>
            <StatusBar
                barStyle={'light-content'}
                backgroundColor={colors.grey}
                hidden={false}
                translucent={true}
            />

            <View style={{ backgroundColor: colors.grey }}>
                <SafeAreaView >
                   {children}
                    {/* <ScrollView style={{ backgroundColor: colors.background,paddingTop:20  }} >
                        <Center px="1" >
                            {children}
                        </Center>
                    </ScrollView> */}
                </SafeAreaView>


            </View>
        </>
    )
}
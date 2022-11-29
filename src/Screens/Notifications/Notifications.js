import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import Container from '../../Components/Container'
import AppHeader from '../../Components/AppHeader'
import { colors } from '../../theme'
import Notification from './components/Notification'
import { notifications } from '../../assets/data'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import AllNotifications from './AllNotifications'
import Specific from './Specific'

export default function Notifications() {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'All' },
        { key: 'second', title: 'Specific' },
    ]);
    const renderTabBar = props => (
        <TabBar
            {...props}
            activeColor={colors.text1}
            inactiveColor={'rgba(65, 64, 66, 0.6)'}
            labelStyle={styles.labelStyle}
            indicatorStyle={styles.indicator}
            style={styles.tabBar}
            indicatorContainerStyle={styles.indicatorContainer}
        />
    );

    return (
        <Container >
            <AppHeader back title="Notifications" />
            <View style={{ backgroundColor: colors.background, flex: 1, }} >
                <TabView
                    renderTabBar={renderTabBar}
                    pagerStyle={{ marginTop: 25, backgroundColor: colors.background }}
                    navigationState={{ index, routes }}
                    onIndexChange={setIndex}
                    renderScene={SceneMap({
                        first: () => <AllNotifications />,
                        second: () => <Specific />,
                    })}
                />


            </View>
        </Container>
    )
}
const styles = StyleSheet.create({
    labelStyle: {
        fontWeight: '700',
        fontSize: 16,
        color: colors.text1,
        textTransform: 'capitalize'
    },
    indicator: {
        backgroundColor: colors.green,
        height: 5,
        borderRadius: 5,
    },
    tabBar: {
        backgroundColor: colors.background,
        paddingTop: 20,

        marginHorizontal: 20
    },
    indicatorContainer:{
        backgroundColor: colors.white,
        height: 5,
        alignSelf:'flex-end',
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        position: 'absolute',
        top:65,
        borderRadius: 5,
        
    }

})
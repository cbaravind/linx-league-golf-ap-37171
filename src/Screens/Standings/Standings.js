import { View, Text, StyleSheet } from "react-native"
import React from "react"
import Container from "../../Components/Container"
import AppHeader from "../../Components/AppHeader"
import { colors } from "../../theme"
import { TabView, SceneMap, TabBar } from "react-native-tab-view"
import Standing from "./Standing"
import Feed from "./Feed"
import { Icon, IconButton } from "native-base"
import Ionicons from "react-native-vector-icons/Ionicons"
import { useNavigation } from "@react-navigation/core"
import RoutesKey from "../../Navigation/routesKey"

export default function Standings() {
  const navigation = useNavigation()
  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState([
    { key: "first", title: "Standing" },
    { key: "second", title: "Feed" }
  ])
  const renderTabBar = props => (
    <TabBar
      {...props}
      activeColor={colors.text1}
      inactiveColor={"rgba(65, 64, 66, 0.6)"}
      labelStyle={styles.labelStyle}
      indicatorStyle={styles.indicator}
      style={styles.tabBar}
      indicatorContainerStyle={styles.indicatorContainer}
    />
  )
  return (
    <Container>
      <AppHeader
        showLogo
        rightIcon={
          <IconButton
            onPress={() => navigation.navigate(RoutesKey.RULESANDSCORING)}
            style={{ alignSelf: "flex-end" }}
            icon={
              <Icon
                as={Ionicons}
                name="information-circle-outline"
                color={colors.white}
                size={7}
              />
            }
          />
        }
      />
      <View style={{ backgroundColor: colors.background, flex: 1 }}>
        <TabView
          renderTabBar={renderTabBar}
          pagerStyle={{ marginTop: 25, backgroundColor: "transparent" }}
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={SceneMap({
            first: () => <Standing />,
            second: () => <Feed />
          })}
        />
      </View>
    </Container>
  )
}
const styles = StyleSheet.create({
  labelStyle: {
    fontWeight: "700",
    fontSize: 16,
    color: colors.text1,
    textTransform: "capitalize"
  },
  indicator: {
    backgroundColor: colors.green,
    height: 5,
    borderRadius: 5
  },
  tabBar: {
    backgroundColor: colors.background,
    // paddingTop: 20,
    width: "94%",
    alignSelf: "center",
    elevation: 0
    // marginHorizontal: 20
  },
  indicatorContainer: {
    backgroundColor: colors.white,
    height: 5,
    alignSelf: "flex-end",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    position: "absolute",
    top: 50,
    borderRadius: 5
  }
})

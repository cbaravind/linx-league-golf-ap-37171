import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, Image, Animated, Easing } from "react-native";
import * as Progress from 'react-native-progress';
import { useDispatch, useSelector } from "react-redux";
import RoutesKey from "../../Navigation/routesKey";
// import { getDataFromPhone } from "../../utils/localStore";
import AsyncStorage from "@react-native-async-storage/async-storage"
import { saveUser } from "../../redux/reducers/auth";
import LinearGradient from "react-native-linear-gradient";
import AnimatedLinearGradient, { presetColors } from 'react-native-animated-linear-gradient'
import { getUser } from "../../../api";
// import { Easing } from "react-native-reanimated";

const Splash = () => {
    const navigation = useNavigation();
    const [progress, setProgress] = useState(0);
    const { user } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    useEffect(() => {
        perist()
    }, []);
    const maxHeight = useRef(new Animated.Value(0)).current  

    useEffect(() => {
        Animated.timing(
            maxHeight,
            {
                toValue: 1,
                duration: 5000,
                easing: Easing.linear, 
                useNativeDriver: false
            }
        ).start();
    }, [maxHeight])

    const perist = async () => {
        const userObj = await AsyncStorage.getItem('user')
        if (userObj) {
            // const newUser=JSON.parse(userObj)
            // console.log(userObj.email,'=====')
            dispatch(saveUser(JSON.parse(userObj)))
            if (!user) {
            }
            navigation.navigate(RoutesKey.BOTTOMTAB);
        }
        if (userObj == null) {
            let newProgress = 0;
            setInterval(() => {
                newProgress += Math.random() / 5;
                if (newProgress > 1) {
                    newProgress = 1;
                }
                setProgress(newProgress)
            }, 500)
        }
    }
    useEffect(() => {
        if (progress == 1) {
            HomeRoute()
        }
    }, [progress])

    const HomeRoute = () => {
        setTimeout(() => {
            navigation.reset({
                index: 0,
                routes: [{ name: RoutesKey.LOGIN }],
            })
        }, 1000);
    }

    return (
        <View style={styles.container}>
            <View style={{ position: 'absolute', marginTop: '20%', height: '100%', width: '100%', zIndex: 10 }} >
                <Image
                    style={styles.image}
                    source={require("../../assets/images/splash2.png")}

                />
                <View style={styles.loader} >
                    <Progress.Bar color='#225529' animationType='timing' indeterminate={false} progress={progress} width={200} />
                </View>
            </View>
            <Animated.View
                style={{
                    zIndex: 0,
                    height: maxHeight.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 1000]
                    })

                }}>
                <LinearGradient colors={['#f1f2f2', 'rgba(125, 158, 73, 0.2)', 'rgba(241,242,242,0.2)']}
                    style={[{
                        height: '100%',
                        width: '100%',
                        // position: 'absolute'
                    }]} />
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#F1F2F2",
        // display: "flex",
        // height: "100%",
        // alignItems:"center",
        // justifyContent:"center",
        zIndex: 10
    },
    image: {
        width: 310,
        height: 95,
        alignSelf: "center",
        marginTop: 300
    },
    loader: {
        // height: 10,
        alignSelf: "center",
        position: 'absolute',
        bottom: 100
        // marginTop: "auto",
    }
});
export default Splash
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import * as Progress from 'react-native-progress';
import { useDispatch, useSelector } from "react-redux";
import RoutesKey from "../../Navigation/routesKey";
import { saveUser } from "../../redux/reducers/auth";
// import { getDataFromPhone } from "../../utils/localStore";
import AsyncStorage from "@react-native-async-storage/async-storage"

const Splash = () => {
    const navigation = useNavigation();
    const [progress, setProgress] = useState(0);
    const { user } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    useEffect(() => {
        perist()
    }, []);

    const perist = async () => {
        const token = await AsyncStorage.getItem('user')
        // let token = await getDataFromPhone("loginKey");
        console.log()
        if (token) {
            if (!user) {
                dispatch(saveUser(token))
            }
            navigation.navigate(RoutesKey.BOTTOMTAB);
        }
        if (token == null) {
            // 
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
            <Image
                style={styles.image}
                source={require("../../assets/images/splash2.png")}

            />
            <View style={styles.loader}>
                <Progress.Bar color='#225529' animationType='timing' indeterminate={false} progress={progress} width={200} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F1F2F2",
        display: "flex",
        height: "100%",
    },
    image: { width: 310, height: 95, alignSelf: "center", marginTop: 300 },
    loader: {
        height: 10,
        alignSelf: "center",
        marginTop: "auto",
    }
});
export default Splash
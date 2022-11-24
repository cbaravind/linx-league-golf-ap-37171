import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import * as Progress from 'react-native-progress';
import RoutesKey from "../../Navigation/routesKey";
// import { getDataFromPhone } from "../../utils/localStore";

const Splash = () => {
    const navigation = useNavigation();
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        perist()
    }, []);

    const perist = async () => {
        // let token = await getDataFromPhone("loginKey");
        // if (token) {
        //   navigation.navigate(RoutesKey.BOTTOMTAB);
        // }
        // if (token == null) {
        let newProgress = 0;
        setInterval(() => {
            newProgress += Math.random() / 5;
            if (newProgress > 1) {
                newProgress = 1;
            }
            setProgress(newProgress)
        }, 500)
        // }
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
                source={require("../../Assets/Images/splash2.png")}

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
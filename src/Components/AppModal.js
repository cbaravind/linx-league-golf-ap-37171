import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors, fonts } from '../theme'
import Modal from 'react-native-modal'
import AppButton from './AppButton'
import Icon from 'react-native-vector-icons/Ionicons'

export default function AppModal({ heading, desc, button, onPress, onClose }) {
    return (
        <Modal style={{ backgroundColor: colors.white, paddingHorizontal: 20, position: "absolute", right: 0, left: 0, alignSelf: "center", marginTop: '50%', paddingVertical: 30, borderRadius: 8 }} isVisible={true} animationIn={'slideInUp'} >
            <TouchableOpacity style={{ alignItems: "flex-end", marginBottom: 25 }} onPress={onClose} >
                <Icon name="close" size={25} color={colors.text1} />
            </TouchableOpacity>
            {heading ?
                <Text style={styles.heading}>{heading}</Text>
                :
                <></>
            }
            {
                desc ?
                    <View style={{ paddingTop:heading? 30:0, paddingHorizontal: 20,paddingBottom:button?0:20 }} >
                        <Text style={styles.desc}>{desc}</Text>
                    </View>
                    :
                    <></>
            }
            {
                button ?

                    <View style={{ padding: 20, }} >
                        <AppButton label={'OK'} onPress={onPress} />
                    </View>
                    :
                    <></>
            }
        </Modal>
    )
}
const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        color: colors.green,
        fontWeight: '700',
        // fontFamily: fonts.PROXIMA_BOLD,
        textAlign: "center"
    },
    desc: {
        // fontFamily: fonts.PROXIMA_REGULAR,
        fontSize: 14,
        color: colors.text1,
        textAlign: 'center',
        lineHeight: 18
    }
})
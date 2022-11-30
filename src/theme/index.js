import { StyleSheet } from "react-native"

const colors = {
    grey:'#414042',
    grey2:'#D9D9D9',
    grey3:'#BDBDBD',
    grey4:'#828282',
    white:'#fff',
    green:'#7D9E49',
    darkGreen:'#225529',
    background:'#f1f2f2',
    borderColor:'#D8DAE5',
    text1:'#414042',
    text2:'#4F4F4F',
    pink:'#FF355E',
    black:'#000'
}
const fonts={
    PROXIMA_REGULAR:'Proxima Nova Cond-Regular',
    PROXIMA_SEMI_BOLD:'Proxima-Semi-Bold',
    // PROXIMA_BOLD:'FONTSPRINGDEMO Proxima Nova Cond-Bold'
}
const globalStyles=StyleSheet.create({
    cardStyle:{
        backgroundColor: colors.white,
        marginTop:15,
        paddingBottom:20,
        shadowColor:'rgba(125, 158, 73, 0.15)',
        shadowOffset:{
            width:0,
            height:4
        },
        borderRadius:8,
        shadowOpacity:.15
    }
})
export {
    colors,
    fonts,
    globalStyles
}
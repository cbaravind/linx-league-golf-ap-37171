import { StyleSheet, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Modal, Text, Box, Button, Icon, KeyboardAvoidingView } from 'native-base'
import Row from '../../../Components/Row'
import { fonts,colors } from '../../../theme'

export default function ReportModal({ isVisible, setVisible }) {
    const [reportClicked, setReportClicked] = useState(false)
    const reasons = [
        { id: 1, reason: 'Spam' },
        { id: 2, reason: 'Suspected Cheating' },
        { id: 3, reason: 'Hatred and bullying' },
        { id: 4, reason: 'Self-harm' },
        { id: 5, reason: 'Violent, gory and harmful  content' },
        { id: 6, reason: 'Child porn' },
        { id: 7, reason: 'Illegal activities (e.g. drug uses)' },
        { id: 8, reason: 'Deceptive content' },
        { id: 9, reason: 'Copyright and trademark infringement' }
    ]
    return (
        <Modal width={'100%'} isOpen={isVisible} onClose={() => setVisible(false)}>
            <Modal.Content style={styles.container} maxWidth="400px">
                {/* <Modal.CloseButton /> */}
                    <KeyboardAvoidingView behavior={'padding'}>
                <Modal.Body>
                    <Box p='5'>
                        {reportClicked ?
                            <>
                            <Text py='2' style={[styles.text,{fontWeight:'700'}]}>Why are you reporting this?</Text>
                                {reasons.map((item) => (
                                    <TouchableOpacity onPress={()=>{setVisible(false);setReportClicked(false)}}>
                                        <Text style={styles.text} py='2'>
                                            {item.reason}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                                 <Text style={styles.text} py='1'>Other</Text>
                                 <TextInput placeholderTextColor={colors.text1} placeholder={'Enter a reason...'} numberOfLines={3} style={[styles.input,styles.text]} />
                            </>
                            :
                            <TouchableOpacity onPress={() => setReportClicked(true)}>
                                <Row style={{ justifyContent: 'flex-start', }}>
                                    <Image source={require('../../../assets/images/info.png')} style={{ width: 18, height: 18 }} />
                                    <Text p='2'style={styles.text}>Report User</Text>
                                </Row>
                            </TouchableOpacity>
                        }

                    </Box>
                </Modal.Body>
                </KeyboardAvoidingView>
            </Modal.Content>
        </Modal >
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 0,
        position: 'absolute',
        bottom: 0,
        borderTopRightRadius: 24,
        borderTopLeftRadius: 24
    },
    text:{
        fontSize:14,
        fontWeight:'400',
        color:colors.text1,
        fontFamily:fonts.PROXIMA_REGULAR
    },
    input:{
        backgroundColor:colors.grey3,
        padding:10,
        height:78,
        borderRadius:8,
    }
})
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useRef } from 'react'
import { Icon, Input, Text } from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons';


const InputText = (props) => {
    const [show, setShow] = React.useState(false);


    return (
        <View keyboardShouldPersistTaps='always' style={props.style}>
            <Text fontWeight={props.fontWeight} mb='2' mt='2'>{props.text}</Text>
            <Input isDisabled={props.disabled} keyboardType={props.keynum == true ? 'number-pad' : 'default'} autoFocus={props.autoFocus} h='10' borderColor={props.greenColor == true ? '#7D9E49' : '#BDBDBD'} backgroundColor={props.bgcolor == true ? '#FFFFFF' : '#BDBDBD'} placeholder={props.placeholder} onChangeText={props.onChangeText} value={props.value}
                InputRightElement={props.icon == true ?
                    <TouchableOpacity
                        onPress={() => setShow(!show)}>
                        <Icon
                            as={
                                <Ionicons
                                    color='white'
                                    name={show ? 'eye-off' : 'eye'}
                                    style={{ fontSize: 16, marginRight: 10, color: 'black' }}
                                />
                            }
                            size="5"
                            m={4}
                        />
                    </TouchableOpacity>
                    : null}
                type={props.typeShow == 'text' ? 'text' : (show ? 'text' : 'password')}
            />
        </View>
    )
}

export default InputText

const styles = StyleSheet.create({})
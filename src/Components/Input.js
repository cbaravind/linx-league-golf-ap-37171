import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useRef } from 'react'
import { Icon, Input, Text } from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons';


const InputText = (props) => {
    const [show, setShow] = React.useState(false);

    console.log(props.error)
    return (
        <View keyboardShouldPersistTaps='always' style={props.style}>
            <Text fontWeight={props.fontWeight} mb='2' mt='2'>{props.text}</Text>
            <Input
                isDisabled={props.disabled}
                placeholder={props.placeholder}
                autoFocus={props.autoFocus} h='10'
                keyboardType={props.keynum == true ? 'number-pad' : 'default'}
                borderColor={props.greenColor == true ? '#7D9E49' : '#BDBDBD'}
                backgroundColor={props.bgcolor == true ? '#FFFFFF' : '#BDBDBD'}
                onChangeText={props.onChangeText}
                value={props.value}
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
            {props.error ?
                <View style={{ marginHorizontal: 7, marginTop: 3, }}>
                    <Text fontWeight={"500"} fontSize={12} color="red.600" >{props.error}</Text>
                </View>
                : <></>
            }
        </View>
    )
}

export default InputText

const styles = StyleSheet.create({})
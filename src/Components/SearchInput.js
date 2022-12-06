import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { colors, fonts } from '../theme'
import Row from './Row'
import Icon from 'react-native-vector-icons/Ionicons'

export default function SearchInput({ onSearchSubmit, clearResults }) {
    const [term, setTerm] = useState('');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [loading, setLoading] = useState(false)

    // update 'term' value after 1 second from the last update of 'debouncedTerm'
    useEffect(() => {
        const timer = setTimeout(() => setTerm(debouncedTerm), 1000);
        return () => clearTimeout(timer);
    }, [debouncedTerm])

    // submit a new search
    useEffect(() => {
        if (term !== '') {
            onSearchSubmit(term);
        }
        else {
            clearResults();
        }
    }, [term]);


    return (
        <View style={{ padding: 20 }}>

            <Row style={styles.container}>
                <Icon name="search" size={20} color={colors.green} />
                <TextInput value={debouncedTerm}
                    onChangeText={(val) => setDebouncedTerm(val)}
                    placeholder={'Add or Invite a friend to play'}
                    // onChangeText={onChangeText} 
                    placeholderTextColor={'#828282'}
                    style={styles.input}
                />
                {debouncedTerm.length > 0 && (
                    <TouchableOpacity
                        onPress={() => { clearResults(); setDebouncedTerm('') }}>
                        <Icon
                            name={'close-circle'}
                            size={23}
                            style={{marginRight:5}}
                            color={colors.grey4}
                        />
                    </TouchableOpacity>
                )}
                <TouchableOpacity>
                    <Icon name="mic" size={20} color={colors.green} />
                </TouchableOpacity>
            </Row>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.grey3,
        borderWidth: 1,
        borderColor: colors.green,
        borderRadius: 8,
        paddingHorizontal: 9,
        justifyContent: "flex-start",
        marginBottom: 8
    },
    input: {
        height: 38,
        color: colors.text2,
        fontSize: 16,
        marginLeft: 7,
        flex: 1,
        // fontFamily: fonts.PROXIMA_REGULAR,
        fontWeight: "400",

    },
    text: {
        fontSize: 14,
        fontWeight: "400",
        // fontFamily: fonts.PROXIMA_REGULAR,
        color: colors.text1
    }
})
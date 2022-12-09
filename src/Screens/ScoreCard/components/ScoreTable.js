import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
// import Row from '../../../Components/Row'
import { colors, fonts } from '../../../theme'
import { Table, TableWrapper, Row, Col, Rows } from 'react-native-table-component';
export default function ScoreTable() {
    const tableTitle = [['Hole'], ['RED'], ['HDCP'], ['PAR']]
    const widthArr = [40, 40, 40, 40, 40, 40, 40, 40, 40, 40,]
    const [tableData, setTableData] = useState([])
    useEffect(() => {

        setData()
    }, [])
    const setData = () => {
        let updated = []
        for (let i = 0; i < 4; i += 1) {
            const rowData = [];
            for (let j = 0; j < 10; j += 1) {
                rowData.push(`${i}${j}`);
            }
            // const updated
            updated.push(rowData);
        }
        setTableData(updated)
    }
    console.log(tableData)
    return (
        <View style={styles.container}>
            <ScrollView horizontal={true}>
                <View>

                    <ScrollView style={styles.dataWrapper}>
                        {tableData ?

                            <Table  borderStyle={{ borderWidth: 0, borderColor: '#C1C0B9', borderRadius: 10 }}>
                                <TableWrapper style={styles.wrapper}>
                                    <TableWrapper style={{ flexDirection: "column" }}>
                                        {
                                            tableTitle.map((rowData, index) => (
                                                <Row
                                                    key={index}
                                                    data={rowData}
                                                    // widthArr={widthArr}
                                                    style={[styles.row, { backgroundColor: index == 0 ? colors.grey3 : index == 1 ? colors.pink : index == 2 ? colors.white : colors.darkGreen }]}
                                                    textStyle={[styles.text, index % 2 == 0 && { color: colors.text1 }]}
                                                />
                                            ))
                                        }
                                    </TableWrapper>
                                    {/* <Col data={tableTitle} style={[styles.title,]} textStyle={[styles.text,{color:tableTitle=='HDCP'?colors.white:colors.text1}]} /> */}

                                    <TableWrapper style={{ flexDirection: "column" }}>
                                        {
                                            tableData.map((rowData, index) => (
                                                <Row
                                                    key={index}
                                                    data={rowData}
                                                    widthArr={widthArr}
                                                    style={[styles.row, { backgroundColor: index == 0 ? colors.grey3 : index == 1 ? colors.pink : index == 2 ? colors.white : colors.darkGreen }]}
                                                    textStyle={[styles.text, index % 2 == 0 && { color: colors.text1 }]}
                                                />
                                            ))
                                        }
                                    </TableWrapper>
                                </TableWrapper>
                            </Table>
                            :
                            <>
                            </>
                        }
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 60, backgroundColor: colors.background,marginHorizontal:10},
    header: { height: 50, backgroundColor: '#537791', },
    text: { textAlign: 'center', fontWeight: '400', color: colors.white, fontFamily: fonts.PROXIMA_REGULAR },
    dataWrapper: { marginTop: -1 },
    row: { height: 40, backgroundColor: '#E7E6E1' },
    title: { flex: 1, },
    wrapper: { flexDirection: 'row' },
});
import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from "../../../App";
import Map from "../map/Map";

export type Props = NativeStackScreenProps<StackParamList, 'Homepage'>;

export default function Homepage(props: Props) {
    return (
        <View style={styles.conteiner}>
            <Map/>
        </View>
    );
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        height: "100%",
        backgroundColor: "#fff"
    },
    buttonBox: {
        justifyContent: "space-around",
        flexDirection: "row",
    },
    navbar: {
        marginTop: 15,
        marginBottom: 20,
    }
})

import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import axios from 'axios';
import selectCountry from "react-native-element-dropdown/src/components/SelectCountry";
// var axios = require('axios');

const locationData = [
    // { label: 'Building', value: '1' },
    // { label: 'Outside', value: '2' },
    // { label: 'Other', value: '3' },
    { label: 'Stephens', value: '1' },
    // { label: 'ICE', value: '2' },
    // { label: 'Dunham', value: '3' },
    // { label: 'Outside', value: '4' },
    // { label: 'Other', value: '5' },

];
// const buildingData = [
//     { label: 'Stephens', value: '1' },
//     { label: 'ICE', value: '1' },
//     { label: 'Dunham', value: '1' },
// ];
// const lotData = [
//     { label: 'South Vago Lot', value: '2' },
//     { label: 'North Vago Lot', value: '2' },
//     { label: 'Dunham Lot', value: '2' },
// ];
// const floorData = [
//     { label: 'Lower Level', value: '1' },
//     { label: '1st Floor', value: '1'},
//     { label: '2nd Floor', value: '1' },
//     { label: '3rd Floor', value: '1' },
// ];
const locationSpecifics = [
    { label: 'STPHS101', value: '1' },
    { label: 'STPHS102', value: '1' },
    { label: 'STPHS103', value: '1' },
    { label: 'STPHS104', value: '1' },
    { label: 'Spartan Spot', value: '1' },
    { label: '1st Floor Hallway', value: '1' },
    { label: '2nd Floor Hallway', value: '1' },
    // { label: 'South Vago Lot', value: '4' },
    // { label: 'North Vago Lot', value: '4' },
    // { label: 'Dunham Lot', value: '4' },
    // { label: 'Other', value: '5' },
];

const DropdownComponent = () => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    // useEffect(() => {
    //
    //     var config = {
    //         method: 'get',
    //         url: 'https://api.countrystatecity.in/v1/countries',
    //         headers: {
    //             'X-CSCAPI-KEY': 'API_KEY'
    //         }
    //     };
    //
    //     axios(config)
    //         .then(function (response) {
    //             console.log(JSON.stringify(response.data));
    //             var count = Object.keys(response.data).length;
    //             var countryArray = [];
    //             for ( var i = 0; i < count; i++){
    //                 countryArray.push ({
    //                     value: response.data[i].iso2,
    //                     label: response.data[i].name,
    //                 });
    //             }
    //             setCountryData(countryArray);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    //
    // }, []);

    return (
        <View style={styles.container}>
            <View style ={{backgroundColor: '#fff'}}>
            {/*{renderLabel()}*/}
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={locationData}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select Building, Outside or Other' : '...'}
                searchPlaceholder="Search"
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setValue(item.value);
                    setIsFocus(false);
                }}
                renderLeftIcon={() => (
                    <AntDesign
                        style={styles.icon}
                        color={isFocus ? 'blue' : 'black'}
                        name="Safety"
                        size={20}
                    />
                )}
            />
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={locationSpecifics}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select Room, Nearest room or Parking lot' : '...'}
                // placeholder="Select Room, Nearest room or Parking lot"
                searchPlaceholder="Search"
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setValue(item.value);
                    setIsFocus(false);
                }}
                renderLeftIcon={() => (
                    <AntDesign
                        style={styles.icon}
                        color={isFocus ? 'blue' : 'black'}
                        name="Safety"
                        size={20}
                    />
                )}
            />
            </View>
        </View>
    );
};

export default DropdownComponent;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 12,

    },
    dropdown: {
        height: 50,
        borderColor: 'black',
        borderWidth: 0.5,
        paddingHorizontal: 8,
        marginBottom: 2,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});
//-----------------------------------------------------
// import React, { useState } from 'react';
// import { StyleSheet, View, Text } from 'react-native';
// import { Dropdown } from 'react-native-element-dropdown';
// import {AntDesign} from "@expo/vector-icons";
// // import AntDesign from '@expo/vector-icons/AntDesign';
//
// const data = [
//     { label: 'Building', value: '1' },
//     { label: 'Outside', value: '2' },
//     { label: 'Other', value: '3' },
// ];
//
// const DropdownComponent = () => {
//     const [value, setValue] = useState(null);
//     // const [isFocus, setIsFocus] = useState(false);
//
//     const renderItem = item => {
//         return (
//             <View style={styles.item}>
//                 <Text style={styles.textItem}>{item.label}</Text>
//                 {item.value === value && (
//                     <AntDesign
//                         style={styles.icon}
//                         color="black"
//                         name="Safety"
//                         size={20}
//                     />
//                 )}
//             </View>
//         );
//     };
//
//     return (
//         <Dropdown
//             style={styles.dropdown}
//             placeholderStyle={styles.placeholderStyle}
//             selectedTextStyle={styles.selectedTextStyle}
//             inputSearchStyle={styles.inputSearchStyle}
//             iconStyle={styles.iconStyle}
//             data={data}
//             search
//             maxHeight={300}
//             labelField="label"
//             valueField="value"
//             // placeholder={!isFocus ? 'Select Location' : '...'}
//             placeholder="Select Location"
//             searchPlaceholder="Search"
//             value={value}
//             onChange={item => {
//                 setValue(item.value);
//             }}
//             renderLeftIcon={() => (
//                 <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
//             )}
//             renderItem={renderItem}
//         />
//     );
// };
//
// export default DropdownComponent;
//
// const styles = StyleSheet.create({
//     dropdown: {
//         // margin: 10, //16
//         marginTop: -30,
//         marginLeft: 120,
//         marginBottom: 30,
//         height: 50, //50
//         width: 200, //added
//         backgroundColor: 'white',
//         borderRadius: 6, //12
//         padding: 12,
//         shadowColor: '#000',
//         shadowOffset: {
//             width: 0,
//             height: 1,
//         },
//         shadowOpacity: 0.2,
//         shadowRadius: 1.41,
//
//         elevation: 2,
//     },
//     icon: {
//         marginRight: 5,
//     },
//     item: {
//         padding: 17, //17
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//     },
//     textItem: {
//         flex: 1,
//         fontSize: 16,
//     },
//     placeholderStyle: {
//         fontSize: 16,
//     },
//     selectedTextStyle: {
//         fontSize: 16,
//     },
//     iconStyle: {
//         width: 20, //20
//         height: 20,
//     },
//     inputSearchStyle: {
//         height: 40,
//         fontSize: 16,
//     },
// });



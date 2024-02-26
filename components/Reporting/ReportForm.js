import {View, Text, StyleSheet, Button, SafeAreaView, ScrollView, TextInput} from "react-native";
import DropdownComponent from "./locationDropdown";
import DropdownLocationType from "./locationDropdown";
import ProblemTitleBox from "./ProblemTitle";
import ProblemDescBox from "./DescribeTextBox";
import React, {useState} from "react";
import SubmitProblem from "./SubmitReport";
import colors from "@/constants/Colors"
import axios from "axios";
import {Dropdown} from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function ReportForm() {
    let reportFormData = new FormData();
    const ProblemTitleBox = () => {
        const [title, setTitle] = useState('');
        reportFormData.append('title', title);
        return (
            <SafeAreaView>
                <TextInput
                    style={titleStyles.input}
                    onChangeText={title => setTitle(title)}
                    value={title}
                />
            </SafeAreaView>
        );
    };

    const locationData = [
        { label: 'Stephens', value: '1' },
    ];
    const locationSpecifics = [
        { label: 'STPHS101', value: '1' },
        { label: 'STPHS102', value: '1' },
        { label: 'STPHS103', value: '1' },
        { label: 'STPHS104', value: '1' },
        { label: 'Spartan Spot', value: '1' },
        { label: '1st Floor Hallway', value: '1' },
        { label: '2nd Floor Hallway', value: '1' },
    ];
    const DropdownComponent = () => {
        const [locationValue, setLocationValue] = useState(null);
        const [locationSpecValue, setLocationSpecValue] = useState(null);
        const [isFocus, setIsFocus] = useState(false);
        // reportFormData.append('location', locationValue);
        return (
            <View style={locationStyles.container}>
                <View style ={{backgroundColor: '#fff'}}>
                    {/*{renderLabel()}*/}
                    <Dropdown
                        style={[locationStyles.dropdown, isFocus && { borderColor: 'blue' }]}
                        placeholderStyle={locationStyles.placeholderStyle}
                        selectedTextStyle={locationStyles.selectedTextStyle}
                        inputSearchStyle={locationStyles.inputSearchStyle}
                        iconStyle={locationStyles.iconStyle}
                        data={locationData}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="locationValue"
                        placeholder={!isFocus ? 'Select Building, Outside or Other' : '...'}
                        searchPlaceholder="Search"
                        locationValue={locationValue}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setLocationValue(item.locationValue);
                            setIsFocus(false);
                        }}
                        renderLeftIcon={() => (
                            <AntDesign
                                style={locationStyles.icon}
                                color={isFocus ? 'blue' : 'black'}
                                name="Safety"
                                size={20}
                            />
                        )}
                    />
                    <Dropdown
                        style={[locationStyles.dropdown, isFocus && { borderColor: 'blue' }]}
                        placeholderStyle={locationStyles.placeholderStyle}
                        selectedTextStyle={locationStyles.selectedTextStyle}
                        inputSearchStyle={locationStyles.inputSearchStyle}
                        iconStyle={locationStyles.iconStyle}
                        data={locationSpecifics}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="locationSpecValue"
                        placeholder={!isFocus ? 'Select Room, Nearest room or Parking lot' : '...'}
                        // placeholder="Select Room, Nearest room or Parking lot"
                        searchPlaceholder="Search"
                        locationSpecValue={locationSpecValue}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setLocationSpecValue(item.locationSpecValue);
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
    // reportFormData.append('location', DropdownComponent.locationSpecValue);
    const ProblemDescBox = () => {
        const [text, onChangeText] = useState('');

        return (
            <SafeAreaView>
                <TextInput
                    style={descStyles.input}
                    onChangeText={onChangeText}
                    value={text}
                />
            </SafeAreaView>
        );
    };
    // reportFormData.append('description', ProblemDescBox.text);

    async function submitForm () {
        axios.post(`http://localhost:3000/postreport`, {title: reportFormData})
            .then(response => {
                console.log('Response data:', response.data);
            })
            .catch(error => {
                console.error('Error posting data:', error);
                //please fill out all fields
            });
    }
    const SubmitProblem = () => {
        const [isSubmitted, setIsSubmitted] = useState(false);
        return(
            <View>
                <Button onPress={submitForm} title={"Submit"}/>
            </View>

        );
    }

    return (
        <SafeAreaView style={styles.background}>
            <ScrollView>
                <View style={styles.background}>
                    <Text style={styles.title}> Report A Problem </Text>
                    <Text style={styles.text}> Problem Title: </Text>
                    <ProblemTitleBox/>
                    <Text style={styles.text}> Location: </Text>
                    <DropdownComponent/>
                    <Text style={styles.text}> Describe Your Problem: </Text>
                    <ProblemDescBox/>
                    <SubmitProblem/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: colors.main.background,
    },
    title: {
        fontSize: 40,
        color: '#ffffff',
        marginBottom: 15,
        padding: 35,

    },
    text: {
        fontSize: 25,
        padding: 5,
        color: '#ffffff',
        // fontSize: 100,
    }
});

const titleStyles = StyleSheet.create({
    input: { //title text box
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#fff',
    }
});

const locationStyles = StyleSheet.create({
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
    }
});

const descStyles = StyleSheet.create({
    input: {
        height: 100,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
});

// export default ReportForm;

import React, { useState, useEffect} from "react";
import { View, Text, StyleSheet, Button, SafeAreaView, ScrollView, TextInput } from "react-native";
import axios from "axios";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Dropdown } from "react-native-element-dropdown";
import { useNavigation } from '@react-navigation/native';
import colors from "@/constants/Colors";
import {getCookie} from "../../api/cookies";

export default function ReportForm() {
    const navigation = useNavigation();
    const [userId, setUserId] = useState('');
    const [reportFormData, setReportFormData] = useState({
        userId: userId,
        image: 'BLAH.jpg',
        title: '',
        location: null,
        locationSpec: null,
        description: ''
    });

    useEffect(() => {
        const fetchUserId = async () => {
            try {
                const userIdFromStorage = await getCookie("userid")
                setUserId(userIdFromStorage);
            } catch (error) {
                console.error('Error fetching userId:', error);
            }
        };

        fetchUserId();
    }, []);

    useEffect(() => {
        setReportFormData(prevState => ({ ...prevState, userId }));
    }, [userId]);

    const updateTitle = (title) => {
        setReportFormData(prevState => ({ ...prevState, title }));
    };

    const updateLocation = (location) => {
        setReportFormData(prevState => ({ ...prevState, location }));
    };

    const updateLocationSpec = (locationSpec) => {
        setReportFormData(prevState => ({ ...prevState, locationSpec }));
    };

    const updateDescription = (description) => {
        setReportFormData(prevState => ({ ...prevState, description }));
    };

    const submitForm = async () => {
        try {
            const response = await axios.post(`http://localhost:3000/createReport`, reportFormData);
            console.log('Response data:', response.data);
        } catch (error) {
            console.error('Error posting data:', error);
        }
    };

    return (
        <SafeAreaView style={styles.background}>
            <ScrollView>
                <View style={styles.background}>
                    <Text style={styles.title}> Report A Problem </Text>
                    <Text style={styles.text}> Problem Title: </Text>
                    <ProblemTitleBox updateTitle={updateTitle}/>
                    <Text style={styles.text}> Location: </Text>
                    <DropdownComponent updateLocation={updateLocation} updateLocationSpec={updateLocationSpec}/>
                    <Text style={styles.text}> Describe Your Problem: </Text>
                    <ProblemDescBox updateDescription={updateDescription}/>
                    <SubmitProblem submitForm={submitForm}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const ProblemTitleBox = ({ updateTitle }) => {
    const [title, setTitle] = useState('');

    const handleTitleChange = (title) => {
        setTitle(title);
        updateTitle(title);
    };

    return (
        <SafeAreaView>
            <TextInput
                style={titleStyles.input}
                onChangeText={handleTitleChange}
                value={title}
            />
            <Button onPress={() => navigation.navigate('Camera/index')} title={"Add Photo"}/>
        </SafeAreaView>
    );
};

const DropdownComponent = ({ updateLocation, updateLocationSpec }) => {
    const locationData = [
        { label: 'Stephens', value: '1' },
    ];
    const locationSpecifics = [
        { label: 'STPHS101', value: '1' },
        { label: 'STPHS102', value: '2' },
        { label: 'STPHS103', value: '3' },
        { label: 'STPHS104', value: '4' },
        { label: 'Spartan Spot', value: '5' },
        { label: '1st Floor Hallway', value: '6' },
        { label: '2nd Floor Hallway', value: '7' },
    ];
    const [locationValue, setLocationValue] = useState(null);
    const [locationSpecValue, setLocationSpecValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const handleLocationChange = (location) => {
        setLocationValue(location); // Update local state
        updateLocation(location); // Update parent state
        setIsFocus(false);
    };

    const handleLocationSpecChange = (locationSpec) => {
        setLocationSpecValue(locationSpec); // Update local state
        updateLocationSpec(locationSpec); // Update parent state
        setIsFocus(false);
    };

    return (
        <View style={locationStyles.container}>
            <View style={{ backgroundColor: '#fff' }}>
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
                    valueField="value"
                    placeholder={!isFocus ? 'Select Building, Outside or Other' : '...'}
                    searchPlaceholder="Search"
                    value={locationValue} // Changed prop name to value
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={handleLocationChange} // Changed to direct function call
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
                    valueField="value"
                    placeholder={!isFocus ? 'Select Room, Nearest room or Parking lot' : '...'}
                    searchPlaceholder="Search"
                    value={locationSpecValue} // Changed prop name to value
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={handleLocationSpecChange} // Changed to direct function call
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

const ProblemDescBox = ({ updateDescription }) => {
    const [text, onChangeText] = useState('');

    const handleDescChange = (text) => {
        onChangeText(text);
        updateDescription(text);
    };

    return (
        <SafeAreaView>
            <TextInput
                style={descStyles.input}
                onChangeText={handleDescChange}
                value={text}
            />
        </SafeAreaView>
    );
};

const SubmitProblem = ({ submitForm }) => {
    return (
        <View>
            <Button onPress={submitForm} title={"Submit"}/>
        </View>
    );
};


const styles = StyleSheet.create({
    background: {
        backgroundColor: colors.main.background,
    },
    title: {
        fontSize: 40,
        color: '#ffffff',
        marginBottom: 20,
        paddingBottom: 20,
        paddingTop: 20,

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


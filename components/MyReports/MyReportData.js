import React, { useEffect, useState} from 'react';
import { View, Text, StyleSheet,SafeAreaView,ScrollView } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ReportsDisplay from './ReportsDisplay';
import portNumber from '../../Portnumber/portNumber';
import axios from "axios";


const MyReportData = () => {

      const [selectedValue, setSelectedValue] = useState('pending');
      const [reportData, setReportsData] = useState([{}]);
      useEffect(()=>{
        AsyncStorage.getItem("userid")
        .then(response =>{
            axios.get(`http://${portNumber}:3000/reporting/getReports`, { headers: {
                userID: response,
                status: selectedValue
              }
            })
            .then(res =>{
                console.log(res.data);
                setReportsData(res.data);
            } )
        })
        
        console.log(selectedValue);

      },[selectedValue]);
    
      return (

        <SafeAreaView style={styles.scrollViewTag}>
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="Pending" value="pending" />
            <Picker.Item label="Open" value="open" />
            <Picker.Item label="Complete" value="complete" />
            <Picker.Item label="Referred" value="referred" />

          </Picker>
          <ScrollView>

            {
              
              reportData.map( data =>{
                {
                
                  if(data.title){ 
                    return (
                      <View>
                        <ReportsDisplay title={data.title} location={data.location} status={data.status} />
                      </View>

                    )
                  
                      

                  }
                  
                  
                  
                  
                }})
            }
          </ScrollView>



        </SafeAreaView>
       


      );

    
};
const styles = StyleSheet.create( {

  scrollViewTag:{
    paddingBottom: 60
  }

})


export default MyReportData;
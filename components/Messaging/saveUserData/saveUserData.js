import axios from "axios"
import portNumber from "./../../../Portnumber/portNumber";
import AsyncStorage from "@react-native-async-storage/async-storage";

const userData = (userEmail) =>{
  console.log("is it getting here? ")
     axios.get(`http://${portNumber}:3000/messaging/getUserByEmail`, { headers: {
      userEmail: userEmail
    }
  })
            .then(response => {
              console.log("Here's the reponse data from getuser " + response.data[0].firstname);
              console.log("----------------------------------------------------------------------------------")
              AsyncStorage.setItem("email", userEmail);
              AsyncStorage.setItem("first", response.data[0].firstname);
              AsyncStorage.setItem("last",response.data[0].lastname );
              AsyncStorage.setItem("userid", response.data[0].userid);

            })
            .catch(error => {
              // Handle error
              console.error('Error getting user data:', error);
              // You can handle errors here, like displaying an error message to the user
            });
}

export default userData;
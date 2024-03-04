import {Button, View} from "react-native";
import {useState} from "react";
import axios from 'axios';


const SubmitProblem = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    return(
        <View>
            <Button
                onPress ={() => {
                    setIsSubmitted(true);
                    axios.post('http://localhost/3000/postreport', );

                }}
                disabled={isSubmitted}
                title={isSubmitted ? "Form Submitted! Thank You!" : "Submit"}
            />
        </View>

    );
}
export default SubmitProblem;

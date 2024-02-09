import {Button, View} from "react-native";
import {useState} from "react";


const SubmitProblem = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    return(
        <View>
            <Button
                onPress ={() => {
                    setIsSubmitted(true);
                }}
                disabled={isSubmitted}
                title={isSubmitted ? "Form Submitted! Thank You!" : "Submit"}
            />
        </View>

    );
}
export default SubmitProblem;

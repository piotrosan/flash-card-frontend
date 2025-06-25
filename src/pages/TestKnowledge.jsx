import React, { useState } from 'react';
import axios from "axios";
import Logging from "../helpers/logs/Logging";


function TestKnowledge(props) {

    const getTestKnowledge = "";
    const [flashCardSet, setFlashCardSet] = useState(null);
    const [error, setError] = useState(null);

    const onClickGettingFlashCardSet = async (event) => {
        try {
            axios.get(
                getTestKnowledge
            ).then(
                (result) => {
                    setFlashCardSet(result.data);
                });
        } catch (err) {
            await Logging({'app': props.appContext, 'level': 1, 'message': err.response?.data?.message});
            setError(err.response?.data?.message || 'Test Knowledge Error');
        }
    }

    return (
        <section className="test-konwledge">
        </section>
    );
}

export default TestKnowledge;

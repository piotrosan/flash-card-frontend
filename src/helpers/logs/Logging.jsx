import axios from 'axios';

const LOGGING_URL = '/logging'

// eslint-disable-next-line no-lone-blocks
{/*
     1. loggerObject
        "apps": "string",
        "level": 0,
        "message": "string"
*/}

async function send_error(loggerObject, setError){
    return await axios.post(LOGGING_URL, loggerObject);
}

async function Logging(props){
    return await send_error({"app": props.app, "level": props.level, 'message': props.message}).then(
        result => console.log(result.saved)
    ).catch( err => console.log(err));
}

export default Logging;

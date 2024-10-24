import React from 'react';
import {LOG_TYPE, LOG_FORM_OBJ} from './hookUseConstant.js'

const {useEffect, useState} = React;

// newLogFormData = {
//     scope : "",
//     type : LOG_TYPE.error,
//     message : ""
// }
function useConsole() {

    const GetLogMessage = (scope = "N/A", message = "N/A") =>{
        const now = new Date();
        return `[${scope}] [${now.toLocaleString()}] ${message}`;
    };

    const [logFormData, setLogFormData] = useState(LOG_FORM_OBJ);

    const recordLog = (newLogFormData)=>{
        setLogFormData(newLogFormData);
    }

    useEffect(()=>{

        // Set the new log data to console log
        // prevent the first render would log the empty string
        if (logFormData.message.length)
        {
            const logMessage = GetLogMessage(logFormData.scope, logFormData.message);

            switch (logFormData.type)
            {
                case LOG_TYPE.error:
                    console.error(logMessage);
                    break;
                case LOG_TYPE.warning:
                    console.warn(logMessage);
                    break;
                case LOG_TYPE.log:
                    console.log(logMessage);
                    break;
                case LOG_TYPE.debug:
                    console.debug(logMessage);
                    break;
                case LOG_TYPE.info:
                    console.info(logMessage);
                    break;
                default:
                    break;
            }
        }
    
    }, [logFormData]);

    return [logFormData, recordLog];
}

export default useConsole;

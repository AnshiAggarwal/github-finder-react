import React, { useContext } from 'react';
import AlertContext from './../context/alert/AlertContext'

const Alert=()=>{

    const alertContext = useContext(AlertContext);

    return(
        (alertContext.alert)!=null && (
                <div className="alert alert-danger">{alertContext.alert.msg}</div>

        )
    )
}
export default Alert;
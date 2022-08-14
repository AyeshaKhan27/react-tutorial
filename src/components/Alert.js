import React from 'react'

export default function alert(props) {
  return (
    
    props.alerts && <div className={`alert alert-${props.alerts.type} alert-dismissible fade show`} role="alert">
      <strong>{props.alerts.type}</strong> : {props.alerts.msg}
        
    </div>
    
  )
}


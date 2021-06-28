import React from "react";

export default function ProgressBar({session, breakDuration, focusDuration}){
  return (
    <div className="col">
      <div className="progress" style={{ height: "20px" }}>
        <div
            className="progress-bar"
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow={session?.label === "Focusing" ? (focusDuration*60-session?.timeRemaining)/(focusDuration*60)*100 : (breakDuration*60-session?.timeRemaining)/(breakDuration*60)*100} // TODO: Increase aria-valuenow as elapsed time increases
            style={{ width: session?.label === "Focusing" ? ((focusDuration*60-session?.timeRemaining)/(focusDuration*60)*100)+"%"  : (breakDuration*60-session?.timeRemaining)/(breakDuration*60)*100+"%"}} // TODO: Increase width % as elapsed time increases
        />
      </div>
    </div>
  )
}
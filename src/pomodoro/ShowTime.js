import React from "react";
import { minutesToDuration, secondsToDuration } from "../utils/duration";

export default function ShowTime({session, breakDuration, focusDuration}){
    return session === null ? (
        <div className="col">
          
        </div>
      ):(
        <div className="col">
          <h2 data-testid="session-title">
            {session?.label} for {session?.label === "Focusing" ? minutesToDuration(focusDuration): minutesToDuration(breakDuration)} minutes
          </h2>
          <p className="lead" data-testid="session-sub-title">
            {secondsToDuration(session?.timeRemaining)} remaining
          </p>
        </div>

      )
}
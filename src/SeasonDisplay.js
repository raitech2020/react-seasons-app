import React from "react"
import "./SeasonDisplay.css"

const seasonConfig = {
    summer: {
        text: 'Let\'s us hit the beach',
        iconName: 'sun'
    },
    winter: {
        text: 'it is chilly',
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        // northern
        return lat > 0 ? 'summer' : 'winter'
    } else {
        // southern
        return lat > 0 ? 'winter' : 'summer'
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth())
    const {text, iconName} = seasonConfig[season]

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`}></i>
            <h1>
                {text}
            </h1>
            <i className={`icon-right massive ${iconName} icon`}></i>
        </div>
    )
}

export default SeasonDisplay

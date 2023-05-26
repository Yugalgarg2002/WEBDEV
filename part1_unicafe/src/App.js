import { useState } from "react"

const Header = (props) => <h1>{props.text}</h1>

const Statistics = (props) => {
    if(props.value[3]===0){
        return(
            <>
            <p>No feedback given</p>
            </>
        )
    }
    return(
        <>
        <StatisticsLine text = {props.text[0]} value = {props.value[0]}/>
        <StatisticsLine text = {props.text[1]} value = {props.value[1]}/>
        <StatisticsLine text = {props.text[2]} value = {props.value[2]}/>
        <StatisticsLine text = {props.text[3]} value = {props.value[3]}/>
        <StatisticsLine text = {props.text[4]} value = {props.value[4]}/>
        <StatisticsLine text = {props.text[5]} value = {props.value[5]}/>
        </>
    )
}

const StatisticsLine = (props) => {
    return (
        <p>{props.text}: {props.value}</p>
    )
}

const Button = (props) => {
    return (
        <button onClick={props.handleElement}>{props.text}</button>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [total, setTotal] = useState(0)
    const [average, setAverage] = useState(0)
    const [positive, setPositive] = useState(0)

    const handleGood = () => {
        const updatedGood = good+1
        const updatedAverage = (updatedGood-bad)/(updatedGood+bad+neutral)
        const updatedPositive = (updatedGood*100)/(updatedGood+bad+neutral)
        setGood(updatedGood)
        setTotal(updatedGood+bad+neutral)
        setAverage(updatedAverage)
        setPositive(updatedPositive)
    }

    const handleBad = () => {
        const updatedBad = bad+1
        const updatedAverage = (good-updatedBad)/(good+updatedBad+neutral)
        const updatedPositive = (good*100)/(good+updatedBad+neutral)
        setBad(updatedBad)
        setTotal(good+updatedBad+neutral)
        setAverage(updatedAverage)
        setPositive(updatedPositive)
    }
    const handleNeutral = () => {
        const updatedNeutral  = neutral+1
        const updatedAverage = (good-bad)/(updatedNeutral+good+bad)
        const updatedPositive = (good*100)/(updatedNeutral+good+bad)
        setNeutral(updatedNeutral)
        setTotal(updatedNeutral+good+bad)
        setAverage(updatedAverage)
        setPositive(updatedPositive)
    }

    return (
        <>
        <Header text='Give Feedback' />
        <Button handleElement={handleGood} text='Good'/>
        <Button handleElement={handleNeutral} text='Neutral'/>
        <Button handleElement={handleBad} text='Bad'/>
        <Header text='Statistics' />
        <Statistics text={['Good', 'Bad', 'Neutral', 'All', 'Positive', 'Average']} value={[good, bad, neutral, total, positive, average]} />
        </>
    )
}

export default App
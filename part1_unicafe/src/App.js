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
        <p>{props.text[0]}: {props.value[0]}</p>
        <p>{props.text[1]}: {props.value[1]}</p>
        <p>{props.text[2]}: {props.value[2]}</p>
        <p>{props.text[3]}: {props.value[3]}</p>
        <p>{props.text[4]}: {props.value[4]}</p>
        <p>{props.text[5]}: {props.value[5]}</p>
        </>
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
        <button onClick={handleGood}>Good</button>
        <button onClick={handleNeutral}>Neutral</button>
        <button onClick={handleBad}>Bad</button>
        <Header text='Statistics' />
        <Statistics text={['Good', 'Bad', 'Neutral', 'All', 'Positive', 'Average']} value={[good, bad, neutral, total, positive, average]} />
        </>
    )
}

export default App
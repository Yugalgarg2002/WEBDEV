import { useState } from "react"

const Header = (props) => <h1>{props.text}</h1>

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)


    return (
        <>
        <Header text='Give Feedback' />
        <button onClick={() => setGood(good+1)}>Good</button>
        <button onClick={() => setNeutral(neutral+1)}>Neutral</button>
        <button onClick={() => setBad(bad+1)}>Bad</button>
        <Header text='Statistics' />
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        </>
    )
}

export default App
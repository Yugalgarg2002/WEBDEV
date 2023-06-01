import { useState } from 'react'

const Person = ({ person }) => {
  return (
    <p>{person.name}</p>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const newPerson = (event) => {
    event.preventDefault()
    var flag = false
    persons.forEach(person => {
      if (person.name === newName)
        flag = true
    })
    if (flag === true) {
      alert(`${newName} is already added to phonebook`)
      setNewName('')
    }
    else {

      const newObject = {
        name: newName,
      }
      setPersons(persons.concat(newObject))
      setNewName('')
    }
  }

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={newPerson}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <Person key={person.name} person={person} />)}
    </div>
  )
}

export default App
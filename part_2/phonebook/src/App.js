import { useState } from 'react'

const Person = ({ person }) => {
  return (
    <p>{person.name} {person.phone}</p>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      phone: '+91-9827382928'
    }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

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
        phone: newPhone,
      }
      setPersons(persons.concat(newObject))
      setNewName('')
      setNewPhone('')
    }
  }

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewPhone = (event) => {
    setNewPhone(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={newPerson}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          phone: <input value={newPhone} onChange={handleNewPhone} />
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
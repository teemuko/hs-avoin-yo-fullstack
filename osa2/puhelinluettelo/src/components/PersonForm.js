import React from 'react'

const PersonForm = ({
    onSubmit, nameValue, nameHandler,
    numberValue, numberHandler
  }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        nimi: <input
                value={nameValue}
                onChange={nameHandler}
              />
      </div>
      <div>numero: <input
                     value={numberValue}
                     onChange={numberHandler}
                   />
      </div>
      <div>
        <button type="submit">lisää</button>
      </div>
    </form>
  )
}

export default PersonForm

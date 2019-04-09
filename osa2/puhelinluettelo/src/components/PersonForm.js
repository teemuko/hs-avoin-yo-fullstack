import React from 'react'

const PersonForm = ({
    onSubmit, nameValue, nameHandler,
    phoneValue, phoneHandler
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
                     value={phoneValue}
                     onChange={phoneHandler}
                   />
      </div>
      <div>
        <button type="submit">lisää</button>
      </div>
    </form>
  )
}

export default PersonForm

import React from 'react'

const Notification = ({ message, type }) => {
  if (message === null) {
    return null
  }

  const successStyle = {
    color: 'green',
    fontSize: 20,
    background: 'lightgrey',
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }

  const errorStyle = {
    color: 'red',
    fontSize: 20,
    background: 'lightgrey',
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }

  const selectedStyle = () => {
    if (type === 'error') {
      return errorStyle
    } else if (type === 'normal') {
      return successStyle
    } else {
      return {}
    }
  }

  return (
    <div style={selectedStyle()}>
      {message}
    </div>
  )
}

export default Notification

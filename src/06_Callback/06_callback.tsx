import React from "react";



export const User = () => {
  
  const deleteUser = () => {
    alert('user should be deleted')
  }

  const addUser = () => {
    alert('user should be added')
  }

  const onNameChanged = () => {
    console.log('change')
  }
  
  return (
      <div>
        <textarea onChange={onNameChanged}>artem</textarea>
        <button onClick={addUser}>add</button>
        <button onClick={deleteUser}>delete</button>
      </div>
  )
}
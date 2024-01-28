/* eslint-disable react/prop-types */
const Notification = ({ message }) => {
  if (message.text === null) {
    return null
  }

  return (
    <div className={message.type}>
      {message.text}
    </div>
  )
}

export default Notification
import React from 'react'

export default function FormFooter({ showSignIn, toggleShowSignIn, footerText, footerButtonText }) {
  return (
    <div style={{ marginTop: 5 }}>
      {footerText}
      <button
        style={{ paddingTop: 4 }}
        type="button"
        className="btn btn-link"
        onClick={() => toggleShowSignIn(!showSignIn)}>
        {footerButtonText}
      </button>
    </div>
  )
}

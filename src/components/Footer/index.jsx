import React from 'react'

function index({ text }) {
  return (
    <div className="row">
        <div className="columns-1">
            <h2 className="font-bold text-center my-4 py-4">{text}</h2>
        </div>
    </div>
  )
}

export default index
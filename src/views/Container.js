import React from 'react'

const Container = ({ children }) => {
  return (
    <div className="container mt-3" style={{ backgroundColor: 'honeydew' }}>
      <div className="row border">
        <div className="col-12">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Container

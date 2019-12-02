import React from 'react'

const Heading = () => {
  return (
    <section>
      <h2 className="title"><strong>Headings</strong></h2>
      <div className="bd-example bd-example-type">
        <table className="table">
          <tbody>
          <tr>
            <td><h1>h1. Raleway</h1></td>
            <td className="type-info">Regular 46px / 64px</td>
          </tr>
          <tr>
            <td><h2>h2. Raleway</h2></td>
            <td className="type-info">Regular 36px / 52px</td>
          </tr>
          <tr>
            <td><h3>h3. Raleway</h3></td>
            <td className="type-info">Regular 26px / 36px</td>
          </tr>
          <tr>
            <td><h4>h4. Raleway</h4></td>
            <td className="type-info">Regular 22px / 30px</td>
          </tr>
          <tr>
            <td><h5>h5. Raleway</h5></td>
            <td className="type-info">Regular 18px / 26px</td>
          </tr>
          <tr>
            <td><h6>h6. Raleway</h6></td>
            <td className="type-info">Regular 15px / 20px</td>
          </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Heading

import '../styles/Form.css'
import React from 'react'

class Input extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }

    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.onSubmit(this.state)
  }

  render() {
    const { submitText, inputs } = this.props

    return (
      <form className="form">
        {
          inputs.map((input, index) => {
            return (
              <input
                key={index}
                name={input.name}
                className={`form-input ${input.className || ''}`}
                value={this.state[input.name] || ''}
                type={input.type || 'text'}
                onChange={(e) => this.setState({ [input.name]: e.target.value })}
                placeholder={input.placeholder}
              />
            )
          })
        }
        <button
          className="form-button"
          type="submit"
          onClick={this.onSubmit}>
          { submitText || 'Submit' }
        </button>
      </form>
    )
  }
}

export default Input
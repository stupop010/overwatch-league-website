import { useState } from "react"

const useForm = state => {
  const [inputs, setInputs] = useState(state)

  const handleSubmit = event => {
    if (event) event.preventDefault()
    console.log("Send Message!")
    setInputs(state)
  }

  const handleInputChange = event => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    })
  }

  return {
    handleSubmit,
    handleInputChange,
    inputs,
  }
}

export default useForm

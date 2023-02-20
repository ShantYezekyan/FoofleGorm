import React, { useState } from 'react'
import './Form.css'
import AnswerField from './AnswerField'

export default function Form({ id, removeFormField }) {
  const [formType, setFormType] = useState('shortAnswer')

  return (
    <div className='form'>
      <h2>{id}</h2>
      <input className='question' placeholder='Question' />

      <select
        className="answer-types"
        name="answerTypes"
        onChange={(e) => setFormType(e.target.value)}
      >
        <option value="shortAnswer">Short Answer</option>
        <option value="paragraph">Paragraph</option>
        <option value="multipleChoice">Multiple choice</option>
        <option value="dropdown">Dropdown</option>
        <option value="date">Date</option>
        <option value="time">Time</option>
      </select>

      <AnswerField type={formType} />

      <br />
      <hr />
      <br />
      <button onClick={() => removeFormField(id)}>Delete Form</button>

    </div >
  )
}


import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form.js'
import { v4 as uuidv4 } from 'uuid';



function App() {

  const [formFields, setFormFields] = useState([<Form key={uuidv4()} id={uuidv4()} removeFormField={removeFormField} />])

  function removeFormField(id) {
    console.log(formFields, 'when "delete form" is clicked')
    // const newFormFields = formFields.filter(form => {
    //   return form.props.id !== id
    // })


    // setFormFields(() => newFormFields)
    // console.log(newFormFields);
  }

  console.log(formFields, "app component rerenders")


  return (
    <div className="container">
      <div className="form-header">
        <h1>Untitled Form</h1>
        <p contentEditable={true} suppressContentEditableWarning={true}>Form description</p>
      </div>

      <button style={{ fontSize: "50px" }} onClick={() => console.log(formFields)}>Test</button>

      <button
        className='add-form'
        onClick={() => {
          setFormFields((prev) => [...prev, <Form key={uuidv4()} id={uuidv4()} removeFormField={removeFormField} />])
        }}
      >
        +
      </button>

      <div className="form-questions">
        {formFields}
      </div>
    </div >
  );
}

export default App;

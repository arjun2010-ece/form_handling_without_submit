import React, { useReducer } from "react";
import debounce from "lodash.debounce";
// import { useForm } from "react-hook-form";
import './App.css'

// debounce(handleChange, 500, { 'trailing': true })

const formInitialState = {
  fname: "",
  cards: '',
}

const formReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT':
    case 'SELECT':
      return {
        ...state,
        [action.field]: action.payload,
      }
    default: 
      return state
   }
}

const App = () => {
  const [state, dispatch] = useReducer(formReducer, formInitialState)
  // const methods = useForm();

  /*
    call the 'handleSubmit' fn from react-hook-form inside onChange event and 
    it serves our purpose.
    UseReducer is added for complex form states handling.
  */

  const {fname, cards} = state;
  // const onSubmit = data => console.log(data);

  const handleChange = (e) => {
    console.log(e.target.value);
    dispatch({
      type: 'INPUT',
      field: e.target.name,
      payload: e.target.value
    })
    // methods.handleSubmit(onSubmit)
  };
  return (
    <div className='App'>
      {JSON.stringify(fname)}
      {JSON.stringify(cards)}
      <form onChange={debounce(handleChange, 500, { 'trailing': true })}>
        <div className="form-control">
          <input type="text" name="fname" defaultValue={fname} />
          <br />
          <select name="cards" defaultValue={cards}>
            <option value="carA">Honda</option>
            <option value="carB">Maruti</option>
            <option value="carC">zenda</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default App;

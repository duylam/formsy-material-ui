const React = require('react')
const render = require('react-dom').render
const FormsyText = require('./lib/FormsyText')
const Form = require('formsy-react').Form

class MyForm extends React.Component {
  render() {
    return (
      <Form>
        <FormsyText name="mytext" />
      </Form>
    )
  }
}

render(
  <MyForm />,
  document.getElementById('app')
)

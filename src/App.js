import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      description: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
      img: '',
      rare: 'normal',
      trunfo: false,
      isSaveButtonDisabled: true,
      newCards: [],
    };
  }

  onSaveButtonClick = () => {
    const {
      name,
      description,
      attr1,
      attr2,
      attr3,
      img,
      rare,
      trunfo,
      newCards,
    } = this.state;

    const cards = {
      name,
      description,
      attr1,
      attr2,
      attr3,
      img,
      rare,
      trunfo,
    };

    this.setState({
      name: '',
      description: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
      img: '',
      rare: 'normal',
      trunfo,
      isSaveButtonDisabled: true,
      newCards: [...newCards, cards],
    });
  }

  validation = () => {
    const {
      name,
      description,
      attr1,
      attr2,
      attr3,
      img,
      rare,
    } = this.state;
    const attribute1 = parseInt(attr1, 10);
    const attribute2 = parseInt(attr2, 10);
    const attribute3 = parseInt(attr3, 10);
    const sumAtt = attribute1 + attribute2 + attribute3;
    const maxSum = 210;
    const maxAtt = 90;

    const textFields = [name, description, img, attr1, attr2, attr3, rare];
    const isNotEmptyFields = textFields.every((field) => field !== '');

    if (!isNotEmptyFields) {
      this.setState({
        isSaveButtonDisabled: true,
      });
      return;
    }
    const attrFields = [attribute1, attribute2, attribute3];
    const isGreaterThanZero = attrFields.every((field) => field >= 0);

    if (isGreaterThanZero
      && attribute1 <= maxAtt
      && attribute2 <= maxAtt
      && attribute3 <= maxAtt
      && sumAtt <= maxSum) {
      return this.setState({
        isSaveButtonDisabled: false,
      });
    }
    this.setState({
      isSaveButtonDisabled: true,
    });
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    // marca e desmarca o checkbox trunfo
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.validation());
    console.log(this.state);
  }

  render() {
    const {
      name,
      description,
      attr1,
      attr2,
      attr3,
      img,
      rare,
      trunfo,
      isSaveButtonDisabled,
    } = this.state;
    const { onInputChange } = this;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ img }
          cardRare={ rare }
          cardTrunfo={ trunfo }
          onInputChange={ onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ img }
          cardRare={ rare }
          cardTrunfo={ trunfo }
        />
      </div>
    );
  }
}

export default App;

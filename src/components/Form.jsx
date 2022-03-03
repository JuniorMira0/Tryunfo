import React from 'react';
import PropTypes from 'prop-types';
import './Form.css';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <div className="form">
        <form>
          <h1>Adicionar nova carta</h1>
          <div className="user-box">
            <label htmlFor="name">
              Name:
              <input
                id="name"
                name="name"
                type="text"
                data-testid="name-input"
                value={ cardName }
                onChange={ onInputChange }
              />
            </label>
          </div>

          <div className="user-box">
            <label htmlFor="description">
              description:
              <input
                id="description"
                name="description"
                type="textarea"
                data-testid="description-input"
                value={ cardDescription }
                onChange={ onInputChange }
              />
            </label>
          </div>

          <div className="user-box">
            <label htmlFor="attr1">
              Attribute 1:
              <input
                id="attr1"
                name="attr1"
                type="number"
                data-testid="attr1-input"
                value={ cardAttr1 }
                onChange={ onInputChange }
              />
            </label>
          </div>

          <div className="user-box">
            <label htmlFor="attr2">
              Attribute 2:
              <input
                id="attr2"
                name="attr2"
                type="number"
                data-testid="attr2-input"
                value={ cardAttr2 }
                onChange={ onInputChange }
              />
            </label>
          </div>

          <div className="user-box">
            <label htmlFor="attr3">
              Attribute 3:
              <input
                id="attr3"
                name="attr3"
                type="number"
                data-testid="attr3-input"
                value={ cardAttr3 }
                onChange={ onInputChange }
              />
            </label>
          </div>

          <div className="user-box">
            <label htmlFor="img">
              Image:
              <input
                id="img"
                name="img"
                type="text"
                data-testid="image-input"
                value={ cardImage }
                onChange={ onInputChange }
              />
            </label>
          </div>

          <label htmlFor="rare">
            Rarity:
            <select
              id="rare"
              name="rare"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">mormal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>

          <div className="user-box">
            <label htmlFor="trunfo">
              Trunfo:
              <input
                id="trunfo"
                name="trunfo"
                type="checkbox"
                data-testid="trunfo-input"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
            </label>
          </div>

          <div>
            <button
              data-testid="save-button"
              type="button"
              disabled={ isSaveButtonDisabled }
              onClick={ onSaveButtonClick }
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

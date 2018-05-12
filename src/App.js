import React, { Component } from 'react';

import { Dialog, RaisedButton, FlatButton, SelectField, MenuItem, IconButton, TextField } from 'material-ui';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import './App.css';

const buttonStyle = {
  borderRadius: '50%',
  backgroundColor: '#ff000036',
  alignSelf: 'center',
  width: '25px',
  height: '25px',
  padding: 0
};
const stylebtnAddLine = {
  margin: '10px 0',
  cursor: 'pointer'
};
const styleModalBtn = {
  marginRight: 10,
};
const stylesForm = {
  customSelect: {
    width: 150,
    marginRight: 15,
    textAlign: 'left'
  },
  customInput: {
    width: 50,
    marginRight: 15,
    textAlign: 'left'
  },
  btnDeleteLine: {
    padding: 5,
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 0, 0, 0.1)',
    cursor: 'pointer'
  },
  btnSaveLines: {
    margin: '0 5px',
  }
};

const data = [
  { id: 0, selectValue: 'Twin', inputNumber: '11' },
  { id: 1, selectValue: 'Tripple', inputNumber: '22' },
  { id: 2, selectValue: 'Quadro', inputNumber: '33' }
];


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      defaultSelectValue: '',
      defaultInputNumber: null,
      itemsList: [
        { id: 0, selectValue: 'Twin', inputNumber: '11' },
        { id: 1, selectValue: 'Tripple', inputNumber: '22' },
        { id: 2, selectValue: 'Quadro', inputNumber: '33' }
      ]
    };
  }

  handleChangeValue = (event, index) => {
    const { itemsList } = this.state;
    itemsList[index].selectValue = event.target.textContent;
    this.setState({ itemsList });
  };

  handleChangeNumber = (event, index) => {
    const { itemsList } = this.state;
    itemsList[index].inputNumber = event.target.value;
    this.setState({ itemsList });
  }

  saveHandler = () => {
    const { changedItemList } = this.state;
    this.setState({ itemsList: [...changedItemList] });
  }

  closeHandler = () => {
    const itemsList = [...data];
    this.setState({
      showModal: false,
      itemsList
    });
  }

  AddItem = () => {
    const newItem = {
      id: this.state.itemsList.length + 1,
      selectValue: this.state.defaultSelectValue,
      inputNumber: this.state.defaultInputNumber
    };
    this.setState({
      itemsList: [...this.state.itemsList, newItem]
    });
  }

  DeleteItem = (index) => {
    const { itemsList } = this.state;
    itemsList.splice(index, 1);
    this.setState({ itemsList });
  }

  render() {
    return (
      <div className="App">
        <RaisedButton label="Open modal" primary onClick={() => this.setState({ showModal: true })} />
        <Dialog
          modal={false}
          open={this.state.showModal}
          onRequestClose={this.closeHandler}
        >
          <div className="ModalContainer">
            <div className="ModalContainer-header">
              <h3>Структура номеров</h3>
              <IconButton ><NavigationClose onClick={this.closeHandler} /></IconButton>
            </div>
            <div>
              {this.state.itemsList.map((item, index) => (
                <div key={index}>
                  <div className="CustomForm">
                    <SelectField
                      value={item.selectValue}
                      style={stylesForm.customSelect}
                      onChange={event => this.handleChangeValue(event, index)}
                    >
                      <MenuItem value="Twin" primaryText="Twin" />
                      <MenuItem value="Tripple" primaryText="Tripple" />
                      <MenuItem value="Quadro" primaryText="Quadro" />
                    </SelectField>
                    <TextField
                      type="number"
                      name={`number${item.id}`}
                      value={item.inputNumber}
                      style={stylesForm.customInput}
                      onChange={event => this.handleChangeNumber(event, index)}
                    />
                    <IconButton style={buttonStyle} iconStyle={{ color: 'red' }}>
                      <NavigationClose onClick={() => this.DeleteItem(index)} />
                    </IconButton>
                  </div>
                </div>
              ))}
            </div>
            <FlatButton
              label="Add list"
              primary
              style={stylebtnAddLine}
              onClick={this.AddItem}
            />
            <div className="ModalButtons">
              <RaisedButton
                label="Save"
                primary
                style={styleModalBtn}
                disabled={this.state.itemsList.length === 0}
                onClick={this.saveHandler}
              />
              <FlatButton
                label="Cancel"
                style={styleModalBtn}
                onClick={this.closeHandler}
              />
            </div>
          </div>
        </Dialog>
      </div>
    );
  }
}


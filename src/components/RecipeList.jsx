import React, { Component } from 'react';
import RecipeListItem from './RecipeList_Item';
import AddItem from './AddItem';
import EditItem from './EditItem';

import '../stylesheets/_RecipeList.scss';

class RecipeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        {
          name: 'Baked Oysters',
          ingredients: ['Oysters', 'Hot Sauce', 'Lettuce', 'Moar Oysters'],
        },
        {
          name: 'Spag Bollo',
          ingredients: ['Spaghetti', 'Tomato Sauce', 'Minced Beef'],
        },
        {
          name: 'Roasted Piglet',
          ingredients: ['Piglet', 'Glaze', 'Potatoes'],
        },
      ],
      toggleAdd: false,
      toggleEdit: false,
      editIndex: null,
    };
    this.toggleAddState = this.toggleAddState.bind(this);
    this.toggleHideAdd = this.toggleHideAdd.bind(this);
    this.toggleHideEdit = this.toggleHideEdit.bind(this);
    this.toggleEditState = this.toggleEditState.bind(this);
    this.editRecipe = this.editRecipe.bind(this);
    this.submitRecipe = this.submitRecipe.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
  }

  componentWillMount() {
    const data = localStorage.getItem('recipes');
    const recipes = JSON.parse(data);
    if (recipes) {
      this.setState({
        list: recipes,
      });
    }
  }

  /* ===========================
   Add functions
   =========================== */

  toggleHideAdd() {
    return (this.state.toggleAdd) ? '' : 'hidden';
  }

  toggleAddState(bool) {
    this.setState({ toggleAdd: bool });
  }

  submitRecipe(name, ingredients) {
    if (name !== '' && ingredients !== '') {
      const ingredientsArray = ingredients.split(', ');
      const stateCopy = this.state.list.slice();
      stateCopy.push(
        {
          name,
          ingredients: ingredientsArray,
        },
    );
      this.setState({ list: stateCopy });
      this.saveToLocal(stateCopy);
    }
    this.toggleAddState(false);
  }

  /* ===========================
   Edit functions
   =========================== */

  toggleHideEdit() {
    return (this.state.toggleEdit) ? '' : 'hidden';
  }

  toggleEditState(bool, index) {
    this.setState({
      toggleEdit: bool,
      editIndex: index });
  }

  editRecipe(index, recipe) {
    const stateCopy = this.state.list.slice();
    stateCopy.splice(index, 1);
    stateCopy.splice(index, 0, recipe);
    this.setState({
      list: stateCopy,
      toggleEdit: false,
    });
    this.saveToLocal(stateCopy);
  }

  /* ===========================
   List item functions
   =========================== */

  saveToLocal(state) {
    const data = JSON.stringify(state);
    localStorage.setItem('recipes', data);
  }

  deleteRecipe(index) {
    const stateCopy = this.state.list.slice();
    stateCopy.splice(index, 1);
    this.setState({ list: stateCopy });
    this.saveToLocal(stateCopy);
  }

  listItems() {
    return this.state.list.map((recipe, index) => (
      <RecipeListItem
        key={index}
        recipe={recipe}
        delete={this.deleteRecipe}
        toggleEditState={this.toggleEditState}
        index={index}
      />
    ));
  }

  editItem() {
    if (this.state.toggleEdit) {
      return (
        <EditItem
          toggleHideEdit={this.toggleHideEdit}
          toggleEditState={this.toggleEditState}
          editRecipe={this.editRecipe}
          index={this.state.editIndex}
          recipe={this.state.list[this.state.editIndex]}
        />
      );
    }
  }

  render() {
    return (
      <div className="app">
        <AddItem
          toggleHideAdd={this.toggleHideAdd}
          toggleAddState={this.toggleAddState}
          submitRecipe={this.submitRecipe}
        />
        {this.editItem()}
        <div className="container">
          <div className="app-body">
            <div className="top">
              <p className="title">Recipe Box</p>
              <button
                className="add"
                onClick={() => this.toggleAddState(true, event)}
              ><p>+</p></button>
            </div>
            <div>
              <ul>
                {this.listItems()}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeList;

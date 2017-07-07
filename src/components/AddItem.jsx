import React from 'react';

import '../stylesheets/_AddItem.scss';

const AddItem = props => (
  <div
    className={`form-background ${props.toggleHideAdd()}`}
    onClick={() => props.toggleAddState(false)}
    role="presentation"
  >
    <div
      className="form-container"
      onClick={e => e.stopPropagation()}
      role="presentation"
    >
      <form>
        <div className="form-body">
          <p className="title2">Add Recipe</p>
          <hr />
          <p className="title3">RECIPE</p>
          <input type="text" name="recipe" />
          <p className="title3">INGREDIENTS</p>
          <input type="text" name="ingredients" />
        </div>
        <button
          className="close"
          onClick={() => props.toggleAddState(false)}
        >Close</button>
        <input
          type="submit"
          value="Add"
          className="add-recipe"
        />
      </form>
    </div>
  </div>
);

export default AddItem;

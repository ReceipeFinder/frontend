import React, {Component} from 'react';
import {connect} from 'react-redux';
import c from 'classnames';
import {ContextMenu, MenuFactory, MenuItemFactory, Dialog} from "@blueprintjs/core";
import {
  addToFavourites,
  removeFromFavourites,
  addToDone,
  removeFromDone,
  addToTodo,
  removeFromTodo
} from '../../RecipesList/actions'
import './styles.less'

class ListItem extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      recipeModalOpened: false
    }
    
    this.toggleRecipeModal = this.toggleRecipeModal.bind(this);
  }
  
  toggleRecipeModal() {
    this.setState({recipeModalOpened: !this.state.recipeModalOpened})
  }
  
  render() {
    let {recipe, index} = this.props;
    return (
      <div className="rf__list-item__wrapper clickable">
        <div className="block"
             style={{position: 'relative'}}
             onContextMenu={(e) => {
               e.preventDefault();
               let children = [
                 MenuItemFactory({
                   key: 1,
                   onClick: () => {
                     recipe.user_recipe.favourite
                       ? this.props.removeFromFavourites(recipe.id, index)
                       : this.props.addToFavourites(recipe.id, index)
                   },
                   text: recipe.user_recipe.favourite
                     ? "Remove from list: favourites"
                     : "Add to list: favourites"
                 }),
                 MenuItemFactory({
                   key: 2,
                   onClick: () => {
                     recipe.user_recipe.done
                       ? this.props.removeFromDone(recipe.id, index)
                       : this.props.addToDone(recipe.id, index)
                   },
                   text: recipe.user_recipe.done
                     ? "Remove from list: done"
                     : "Add to list: done"
                 }),
                 MenuItemFactory({
                   key: 3,
                   onClick: () => {
                     recipe.user_recipe.todo
                       ? this.props.removeFromTodo(recipe.id, index)
                       : this.props.addToTodo(recipe.id, index)
                   },
                   text: recipe.user_recipe.todo
                     ? "Remove from list: todo"
                     : "Add to list: to do"
                 })
               ]
          
               const menu = MenuFactory({
                 children: children
               });
               ContextMenu.show(menu, {left: e.clientX, top: e.clientY});
             }}>
          
          <div className="rf__list-item" onClick={this.toggleRecipeModal}>
            <div className="rf__list-item__img__wrapper">
              {recipe.image_url ? <img src={recipe.image_url}/> : null}
            </div>
            
            <p>{recipe.title}</p>
          </div>
          <div className="rf__icons">
            <div className={c({"pt-icon-star": true, "active": recipe.user_recipe.favourite})}
                 onClick={
                   recipe.user_recipe.favourite
                     ? () => this.props.removeFromFavourites(recipe.id, index)
                     : () => this.props.addToFavourites(recipe.id, index)}/>
            <div className={c({"pt-icon-bookmark": true, "active": recipe.user_recipe.todo})}
                 onClick={
                   recipe.user_recipe.todo
                     ? () => this.props.removeFromTodo(recipe.id, index)
                     : () => this.props.addToTodo(recipe.id, index)}/>
            <div className={c({"pt-icon-tick": true, "active": recipe.user_recipe.done})}
                 onClick={
                   recipe.user_recipe.done
                     ? () => this.props.removeFromDone(recipe.id, index)
                     : () => this.props.addToDone(recipe.id, index)}/>
          </div>
        
        </div>
        <Dialog isOpen={this.state.recipeModalOpened}
                onClose={this.toggleRecipeModal}>
          <div className="pt-dialog-body">
            <div className="recipe__image__wrapper">
              <img src={recipe.image_url} alt={recipe.image_url}/>
            </div>
            <div>
              <h3>{recipe.title}</h3>
            </div>
            <div><a href={recipe.source_url}>Source: {recipe.source_url}</a></div>
          </div>
          <div className="pt-dialog-footer">
            <div className="pt-dialog-footer-actions">
              <div className="recipe__icons__wrapper">
                <div className="recipe__icon clickable">
                  <div className={c({"pt-icon-star": true, "active": recipe.user_recipe.favourite})}/>
                </div>
                <div className="recipe__icon clickable">
                  <div className={c({"pt-icon-bookmark": true, "active": recipe.user_recipe.todo})}/>
                </div>
                <div className="recipe__icon clickable">
                  <div className={c({"pt-icon-tick": true, "active": recipe.user_recipe.done})}/>
                </div>
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    removeFromTodo: (id, index) => {
      dispatch(removeFromTodo(id, index))
    },
    removeFromFavourites: (id, index) => {
      dispatch(removeFromFavourites(id, index))
    },
    removeFromDone: (id, index) => {
      dispatch(removeFromDone(id, index))
    },
    addToTodo: (id, index) => {
      dispatch(addToTodo(id, index))
    },
    addToDone: (id, index) => {
      dispatch(addToDone(id, index))
    },
    addToFavourites: (id, index) => {
      dispatch(addToFavourites(id, index))
    }
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem)
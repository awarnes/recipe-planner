import React, { Component } from 'react';
import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Meal from './Meal'
import Recipe from './Recipe'

class Calendar extends Component {
  render() {
    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <Meal type="Breakfast"/>
        <Meal type="Lunch"/>
        <Meal type="Dinner"/>
        <br/>
        <br/>
        <Recipe name="Pancakes"/>
        <Recipe name="Sandwich"/>
        <Recipe name="Steak"/>
      </DragDropContextProvider>
    );
  }
}

export default Calendar;

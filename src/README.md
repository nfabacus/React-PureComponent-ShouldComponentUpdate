# Examples of React PureComponent and ShouldCompoentUpdate

- Normal Component

  - re-renders every time its parent Component re-renders.
  - re-renders regardless of whether you pass props or not, if its parent re-renders.

- Pure Component

  - re-renders only if its own state or passed-in props are changed.
  - When its parent component re-renders (parents state or props change), <br />
    if its passed-in props are not changed, the pure component will not rerender.
  - In case that the passed-in prop is an object (not a primitive like string or number):
    The Pure Component will always re-render unless the same exact object (not a copy) is reused and not mutated.
    Exception!:
    If the same prop object (not the copy) is passed into the pure component, it will only perform a shallow comparision (1st layer of the obejct only).
    Therefore, it will not detect any deep change in the object, and does not re-render even though the object is now mutated.

- Component With shouldComponentUpdate
  - shouldComponentUpdate will only re-render if the condition is met and true.
  - You can compare nextProps and nextState with the current props and (its own) state(this.props and this.state)

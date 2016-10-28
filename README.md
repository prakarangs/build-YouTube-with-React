# Learn React by building YouTube app
Simple application build with React. The example covers these basic topics:

1. props
2. State
3. Event handling
4. Function and Class base component
5. Import and Export of components.
6. Calling data via google API.

This is the exercise from this class: [Modern React with Redux](https://www.udemy.com/react-redux/learn/v4/overview)
## React Tips

#### Problem: Transferring Properties

In React we use 'props' to pass data between components. However, thing gets complicated when there are multiple layers of components.

Bad news:

* React enforces a chain of command where properties have to flow down from a parent component to an immediate child component.
* This means you can't skip a layer of children when sending a property.
* This also means your children can't send a property back up to a parent. All communication is one-way from the parent to the child.


[Read more](https://www.kirupa.com/react/transferring_properties.htm)

#### Solution: The Spread Operator
Definition - The spread operator allows you to unwrap an array into its individual elements.

```
<Display {...props}/>

```

#### How to start writing your component?
###### 1. Start with a mock
###### 2. Write static UI component with props based on your mock data.
###### 3. Indentify your UI State.

So this is the tricky part. Finding out which component should have state in it. Ask these 3 questions to find out:

1. Is it passed in from parent via props? If so, It probably is not state.
2. Does it remain unchanged over time? If so, It probably is not state.
3. Can you compute it based on any other state or props in your component? (Computable) If so, It probably is not state.

###### 4.1 Identify where your State should live.
Now we know minimal set of app state. Next, we need to identify which component mutates, or own, this state.
For Each piece of state in your app:


1. Identify every component that renders something based on that state.
2. Find a common owner component. (a single component that need the state in the hierachy)
3. If you can't find a component where it makes sense to own the state. Create a new component to hold this state.

###### 4.2 Initialize and setState
In React we initialize the sate in state owner component's constructor function. There we declare `this.state = {}` whatever state we will have and then we probabbly want to set the first value via `this.setState`


##### 5. Event handling & Add Inverse Data Flow

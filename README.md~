## Getting Started

To start off, clone the current repository in an easy to remember directory via your favourite terminal -
> git clone https://github.com/lawki/reindeer-times.git

Navigate to the Poject -
> cd reindeer-times

Install dependencies - 
> npm install

Serve the project
> npm start


## Introduction : Comparing two approaches for placing states in a React + React application
Consider a page in a React app that has multiple sub-components e.g. Students and Randoes, with a root component at the top of the heirarchy e.g. PageOne. Let's also say that both the child components are dealing with asynchronous data and this data is coming from a redux store.

What's the best way to connect our components to redux store so that we minimize re-rendering?

## 1. Passing the state from top-to-bottom 
If we connect redux store at top level, then for every state change in store, the root component and the children will get re-rendered, 
e.g.

* first render: PageOne, Students and Randoes get rendered,
* second render: fetchStudents and getRandoes gets called. When one of these succeeds then the redux store's state change causes it to re-render. Now it will display e.g. students if fetchStudents succeeded first.
* third render: the other one of the API calls succeeds e.g. getRandoes, which results in state change which results in re-render.

Total renders -

| Components    | Render amount |
| ------------- | ------------- |
| PageOne       | 3             |
| Students      | 3             |
| Randoes       | 3             |

## 2. Connecting the components directly
In previous approach, we pass down the redux state from top to bottom. We can also connect the same state directly to the concerned component - 

e.g. redux state for student gets bound directly to Students component and similarly for Randoes component.

In this case the rendering happens as below - 
 
 * first render: PageTwo, StudentsContainer, RandoesContainer get mounted.
 * second render: StudentsContainer and RandoesContainer request data with fetchStudents and getRandoes, one of the calls succeeds and that relevant Component gets re-rendered. Note only one component gets re-rendered, e.g. if API call for StudentsContainer succeeded then Student component will get re-rendered.
 * third render: same step as second, but this time the remaining component gets re-rendered, e.g. Randoes component gets re-rendered if getRandoes API succeeds.

Total renders -

| Components    | Render amount |
| ------------- | ------------- |
| PageTwo       | 1             |
| Students      | 3             |
| Randoes       | 3             |


## Observation -

Given the scenario in introduction, It can be concluded that if the sub-component count reaches 10 or more then the amount of re-renders from first approach might cause visible stuttering in the UI.

We can avoid extra re-rendering by simply plugging in the redux state only to relevant presentational component, as evidenced in approach #2.

### N.B.
This project serves as a visible representation of above described concepts.
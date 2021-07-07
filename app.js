// // basics
// const container = document.getElementById('react-container');
// ReactDOM.render("Hello! Welcome to React",container);


// // Functional component
// const Container = () =>{
//     return React.createElement(`div`,null,`Hey ProGrads! Welcome to React Learning`,
//        React.createElement(`div`,null,`Let's rock and roll`)
//        );
// }
// // Render the Container
// const container = document.getElementById('react-container');
// ReactDOM.render(React.createElement(Container),container);


// // class component
// class ReactContainer extends React.Component{
//     // constructor - to initialize the state 
  
//     // render method to render the react dom 
//     render(){
//         return React.createElement(`div`, null, `Hey Prograds`,
//         React.createElement(`div`, null, `Let's rock and roll`)
//         );
//     }
// }
// const container = document.getElementById('react-container');
// ReactDOM.render(React.createElement(ReactContainer),container);


// using babel
class ReactContainer extends React.Component {
    // JSX tags
    // JSX there should be one parent element
    render() {
        return (
            <div>
                <h1>Hey Prograds!</h1>
                <p>Let's rock and roll</p>
            </div>
        )
    };
}
const container = document.getElementById('react-container');
ReactDOM.render(<ReactContainer/>,container);
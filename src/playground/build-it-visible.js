class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          visibility: false  
        };
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    }

    handleToggleVisibility() {
       this.setState((prevState) => {
           return {
               visibility: !prevState.visibility
           };
       });
    }
    render() {
        return (
            <div>
                 <h1>Visibility Toggle</h1>
                 <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide details' : 'Show Details'}
                </button>
                {this.state.visibility && (
                    <div>
                        <p>Hey. These are some details you can now see!</p>
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


// const details = (e) => {
//     e.preventDefault();
//     show = !show;
//         renderToggleApp();
// };

// const renderToggleApp = () => {
//     const toggleApp = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={details}>{show ? 'Hide Details' : 'Show Details'}</button>
//     {show && (
//         <div>
//             <p>This is my build it toggle application for practice!</p>
//         </div>
//     )}
//         </div>
//     );

//     ReactDOM.render(toggleApp, appRoot);
// };

// const appRoot = document.getElementById('app');

// renderToggleApp();
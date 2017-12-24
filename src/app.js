const app = {
    title: "Indecision App",
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option);       
        e.target.elements.option.value = ' ';
        renderApp();
    }
};

const removeAll = () => {
    app.options = [];
    renderApp();
}

//create "Remove All" button above list
//on click -> wipe the array -> rerender

const numbers = [55, 101, 1000];

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <p>{app.subtitle}</p>
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <button onClick={removeAll}>Remove All</button>
            {/* {
                numbers.map((number) => {
                    return <p key={number}>number: {number}</p>;
                })
            } */}
            
            <ol>
            {
                app.options.map((option) => <li key="option">{option}</li>)
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
            
        </div>
    );

    ReactDOM.render(template,appRoot);
}


const appRoot = document.getElementById('app');

renderApp();

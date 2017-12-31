let show = false;

const details = (e) => {
    e.preventDefault();
    show = !show;
        renderToggleApp();
};

const renderToggleApp = () => {
    const toggleApp = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={details}>{show ? 'Hide Details' : 'Show Details'}</button>
    {show && (
        <div>
            <p>This is my build it toggle application for practice!</p>
        </div>
    )}
        </div>
    );

    ReactDOM.render(toggleApp, appRoot);
};

const appRoot = document.getElementById('app');

renderToggleApp();
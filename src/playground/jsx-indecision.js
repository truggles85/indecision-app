console.log('App.js is running');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of your computer!',
  options: []
};

const appRoot = document.getElementById('app');

const removeAll = () => {
  app.options = [];
  renderApp();
}

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  };
};

const makeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {true && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <button disabled={app.options.length === 0} onClick={makeDecision}>What should I do?</button>
      <button onClick={removeAll}>Remove All</button>
      <ol>
      {
        app.options.map((option) => {
          return <li key={option}>{option}</li>
        })
      }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type='text' name='option'></input>
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

renderApp();


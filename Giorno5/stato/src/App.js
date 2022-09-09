import './App.css';
import React from 'react';


const Button = ({ text, onClick, style }) => {
  return (<button style={style} onClick={onClick}>{text}</button>);
}

const buttonStyles = {
  backgroundColor: 'red',
  color: 'white',
  padding: '10px',
  margin: '10px',
  borderRadius: '5px',
  border: 'none',
  fontSize: '20px',
  cursor: 'pointer'
}



class Header extends React.Component {
  render() {
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data;

    return (
      <header>
        <div className="header-wrapper">
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>

          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
        </div>
      </header>
    );
  }
}

const Login = () => (
  <div>
    <h3>Please Login</h3>
  </div>
)

const Welcome = () => (
  <div>
    <h1>Welcome</h1>
    </div>
)


class App extends React.Component {

  state = {
    loggedIn: false,
  }

  handleLogin = () => {
    this.setState(
      { loggedIn: !this.state.loggedIn }
    )
  }

  render() {

    let status
    if (this.state.loggedIn) {
      status = <small>loggedIn</small>
    } else {
      status = <small>not logged in</small>
    }

    const data = {
      welcome: "Ciao",
      title: "Titolo",
      subtitle: "Test",
      author: {
        firstName: "Mario",
        lastName: "Rossi"
      },
      date: "2022-09-09"
    }


    return (
      <div>
        {this.state.loggedIn ? <Welcome /> : <Login />}
        <Header data={data} />
        {status}
        <Button text="Login" onClick={this.handleLogin} style={buttonStyles} />
      </div>
    );


  }




}

export default App;

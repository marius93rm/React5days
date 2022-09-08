const subscribeStyles = {
    backgroundColor: "#C2E6F4"
  }
  
  const inputStyles = {
    display: "flex"
  }
  
  const textStyles = {
    marginLeft: "10px",
    marginRight: "10px",
    backgroundColor: "white"
  }
  
  const buttonStyles = {
    marginTop: "10px",
    backgroundColor: "#F37475",
    border: "0px",
    borderRadius: "10px",
    width: "300px"
  }
  
  function Subscribe() {
    return (
      <div className="centro" style={subscribeStyles}>
        <h3>Subscribe</h3>
        <p>Sign up with your email address to receive news and updates.</p>
        <div style={inputStyles}>
          <input style={textStyles} type="text" name="firstName" placeholder='First name' />
          <input style={textStyles} type="text" name="lastName" placeholder='Last name' />
          <input style={textStyles} type="text" name="email" placeholder='Email' />
        </div>
        <input style={buttonStyles} type="submit" value="Subscribe" />
      </div>
    )
  }

  export default Subscribe
// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './styles/app.css';

export default function Account() {
  const [validCredentials, setValidCredentials] = useState(true);
  const [createAccount, setCreateAccount] = useState(false);
  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    const submitData = {
      username: e.target[0].value,
      password: createAccount ? e.target[2].value : e.target[1].value,
    };
    const headers = {
      "Content-Type": "application/json",
      Accept: "*/*",
      "create-account": createAccount ? "true" : "false",
    };
    fetch("http://localhost:8000/user", {
      method: "post",
      headers: headers,
      body: JSON.stringify(submitData),
    })
      .then((res) => {
        if (res.status == 401) {
          setValidCredentials(false);
        } else if (res.status == 200) {
          setValidCredentials(true);

          navigate("/");
        }
      })
      .catch((err) => console.error(err));
    console.log(e.target[0].value, e.target[1].value);
  };

  const handleCancel = () => {
    navigate("/");
  };
  
  if (createAccount) {
    return (
      <form className='account-form' onSubmit={(e) => {
        handleSubmit(e);
        }}
      >
        <h2>Account Creation</h2>
        <label htmlFor="username">username</label>
        <input
          type="username"
          firstname=""
          lastname=""
          id="verify_username"
          placeholder="username"
        />

        <label htmlFor="verify_username">Confirm Username</label>
        <input
          type="username"
          firstname=""
          lastname=""
          id="username"
          placeholder="username"
        />

        <br />
        <label htmlFor="password">password</label>
        <input type="password" name="" id="password" placeholder="password" />
        <label htmlFor="verify_password">Confirm Password</label>
        <input
            type="password"
            name=""
            id="verify_password"
            placeholder="confirm"
        />
        <br />
        <div>
        <button type="submit" value="login">
          Create Account
        </button>
        <button
          type="button"
          onClick={() => {
            handleCancel();
          }}
        >
          Cancel
        </button>
      </div>
      <p>
        Returning user? { " "}
        <a 
          onClick={() => {
            setCreateAccount(false);
          }}
        >
          login
        </a>
      </p>
      </form>
    );
  }

  return (
    <form
    className="account-form"
    onSubmit={(e) => {
      handleSubmit(e);
    }}
    >
    <h2>User Login</h2>
    <label htmlFor="username">
      UserName{" "}
      {validCredentials ? "" : <span>Invalid email/password</span>}
    </label>
    <input
      type="username"
      firstname=""
      lastname=""
      id="username"
      placeholder="username"
    />
    <br />
    <label htmlFor="password">Password</label>
    <input type="password" name="" id="password" placeholder="*********" />
    <br />
    <div>
      <button type="submit" value="login">
        Login
      </button>
      <br />
      <button
        type="button"
        onClick={() => {
          handleCancel();
        }}
      >
        Cancel
      </button>
    </div>
      <p>
        New user? {" "}
        <a
          onClick={() => {
            setCreateAccount(true);
          }}
        >
          create account
        </a>
      </p>
    </form>
  );
}

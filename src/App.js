import { useState } from "react";
import "./reset.css";
import "./App.css";
import logo from "./images/logo.svg";
import illustration from "./images/illustration-working.svg";
import brand from "./images/icon-brand-recognition.svg";
import detail from "./images/icon-detailed-records.svg";
import fully from "./images/icon-fully-customizable.svg";
import boost from "./images/bg-boost-desktop.svg";
import shorten from "./images/bg-shorten-desktop.svg";
import instagram from "./images/icon-instagram.svg";
import pinterest from "./images/icon-pinterest.svg";
import twitter from "./images/icon-twitter.svg";
import facebook from "./images/icon-facebook.svg";

function App() {
  const [errorMessage, setErrorMessage] = useState("");
  const [rawUrl, setrawUrl] = useState("");
  const [list, setList] = useState([]);
  const [copiedLink, setCopiedLink] = useState("");

  const onChangeHandler = (event) => {
    setrawUrl(event.target.value);
    if (event.target.value === "") {
      setErrorMessage("");
    }
  };

  const urlButtonClickHandler = () => {
    if (rawUrl) {
      fetch(`https://api.shrtco.de/v2/shorten?url=${rawUrl}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.ok) {
            setList([...list, data.result]);
            setErrorMessage("");
          } else {
            setErrorMessage(data.error);
          }
        });
    } else {
      setErrorMessage("Please write a url");
    }
  };

  const copyButtonClickHandler = (link) => {
    navigator.clipboard.writeText(link);
    setCopiedLink(link);
  };

  return (
    <div>
      <header>
        <div className="container">
          <div className="nav-bar">
            <div className="logo-area">
              <div className="logo">
                <img src={logo} alt="Logo" />
              </div>
              <nav>
                <div className="nav-item">
                  <a href="#">Features</a>
                  <a href="#">Pricing</a>
                  <a href="#">Resources</a>
                </div>
              </nav>
            </div>
            <div className="nav-buttons">
              <button>Login</button>
              <button>Sign Up</button>
            </div>
          </div>
          <div className="hero">
            <div className="hero-left">
              <h1>More than just shorter links</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consequatur vel eius sint repellat!
              </p>
              <button className="get-started-button">Get Started</button>
            </div>
            <div className="hero-right">
              <img src={illustration} alt="site-illustration" />
            </div>
          </div>
        </div>
      </header>
      <div className="content">
        <main>
          <div className="container">
            <div className="url-input-wrapper">
              <div className="input-button">
                <input
                  type="text"
                  placeholder="Shorten a link here.."
                  onChange={onChangeHandler}
                  value={rawUrl}
                  className={errorMessage ? "hasError" : ""}
                />
                <button onClick={urlButtonClickHandler}>Shorten it!</button>
              </div>

              {errorMessage && <p>{errorMessage}</p>}
            </div>

            {list.map((listItem) => {
              const isCopied = copiedLink === listItem.short_link;

              return (
                <div className="link-wrapper" key={listItem.short_link}>
                  <p className="raw-link">{listItem.original_link}</p>

                  <div className="result-area">
                    <p className="short-link">{listItem.short_link}</p>
                    <button
                      className={isCopied ? "copiedClass" : ""}
                      onClick={() =>
                        copyButtonClickHandler(listItem.short_link)
                      }
                    >
                      {isCopied ? "Copied" : "Copy"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </main>

        <section className="advanced-statistics">
          <div className="container">
            <div className="advanced-text">
              <h2>Advanced Statistics</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
                incidunt quis velit consectetur provident qui vero natus aut sit
                odio?
              </p>
            </div>
            <div className="statistics-table">
              <div className="table" id="table1">
                <div className="table-icon">
                  <img src={brand} alt="" />
                </div>
                <h4>Brand Recognition</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Molestiae reiciendis quos iusto delectus officia velit.
                </p>
              </div>
              <div className="table" id="table2">
                <div className="table-icon">
                  <img src={detail} alt="" />
                </div>
                <h4>Detail Record</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Molestiae reiciendis quos iusto delectus officia velit.
                </p>
              </div>
              <div className="table" id="table3">
                <div className="table-icon">
                  <img src={fully} alt="" />
                </div>
                <h4>Fully Customizable</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Molestiae reiciendis quos iusto delectus officia velit.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="boost-links">
        <div className="boost-banner">
          <h2>Boost your links today</h2>
          <button className="get-started-button">Get Started</button>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-nav-bar">
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
            <div className="footer-nav-links">
              <nav>
                <div className="footer-nav">
                  <h3>Features</h3>
                  <a href="#">Link Shortening</a>
                  <a href="#">Branded Links</a>
                  <a href="#">Analytics</a>
                </div>
                <div className="footer-nav">
                  <h3>Resources</h3>
                  <a href="#">Link Shortening</a>
                  <a href="#">Branded Links</a>
                  <a href="#">Analytics</a>
                </div>
                <div className="footer-nav">
                  <h3>Company</h3>
                  <a href="#">Link Shortening</a>
                  <a href="#">Branded Links</a>
                  <a href="#">Analytics</a>
                  <a href="#">Contact</a>
                </div>
              </nav>
              <div className="social-links">
                <a href="#">
                  <img src={facebook} alt="facebook" />
                </a>
                <a href="#">
                  <img src={twitter} alt="twitter" />
                </a>
                <a href="#">
                  <img src={pinterest} alt="pinterest" />
                </a>
                <a href="#">
                  <img src={instagram} alt="instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

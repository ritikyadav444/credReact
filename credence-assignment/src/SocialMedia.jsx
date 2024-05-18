import React, { useState, useEffect } from 'react';
import './SocialMedia.css'
import Down from './images/icon-down.svg';
import Facebook from './images/icon-facebook.svg'
import Instagram from './images/icon-instagram.svg'
import Twitter from './images/icon-twitter.svg'
import Up from './images/icon-up.svg'
import Youtube from './images/icon-youtube.svg'
const SocialMedia = () => {


   const [isDarkTheme, setIsDarkTheme] = useState(false);

    useEffect(() => {
        if (isDarkTheme) {
            document.body.classList.add('darkTheme');
            document.body.classList.remove('light');
        } else {
            document.body.classList.add('light');
            document.body.classList.remove('darkTheme');
        }
    }, [isDarkTheme]);

    const handleClick = () => {
        setIsDarkTheme(prevTheme => !prevTheme);
    };

  return (
    <div>
      <header>
      <div className="container">
        <div className="flex-header">
          <div className="content">
            <h1>Social Media Dashboard</h1>
            <p className="total-count">Total Followers: 23,004</p>
          </div>
          <hr />

           <div className="switch">
         <p> Switch to {isDarkTheme ? 'Light Mode' : 'Dark Mode'}</p>
            <div className={`switch-btn ${isDarkTheme ? 'off' : ''}`} id="mode" onClick={handleClick}>
                <div className="circle-btn"></div>
            </div>
        </div>
        </div>
      </div>
    </header>

    <main>
      <section className="overall">
        <div className="container">
          <div className="overall-cards">
            <div className="overall-card" id='card'>
              <div className="bar bar-facebook"></div>
              <div className="profile">
                <div className="icon">
                  <img src={Facebook} alt="Facebook" />
                </div>
                <p>@nathanf</p>
              </div>

              <p className="overall-number">1987</p>
              <p className="overall-unit text-regular">Followers</p>

              <div className="overall-today">
                <div className="icon">
                  <img src={Up} alt="Up" />
                </div>
                <p>12 Today</p>
              </div>
            </div>

            <div className="overall-card"  id='card'>
              <div className="bar bar-twitter"></div>
              <div className="profile">
                <div className="icon">
                  <img src= {Twitter} alt="Twitter" />
                </div>
                <p>@nathanf</p>
              </div>

              <p className="overall-number">1044</p>
              <p className="overall-unit text-regular">Followers</p>

              <div className="overall-today">
                <div className="icon">
                  <img src= {Up} alt="Up" />
                </div>
                <p>99 Today</p>
              </div>
            </div>

            <div className="overall-card"  id='card'>
              <div className="bar bar-instagram"></div>
              <div className="profile">
                <div className="icon">
                  <img src={Instagram} alt="Instagram" />
                </div>
                <p>@realnathanf</p>
              </div>

              <p className="overall-number">11k</p>
              <p className="overall-unit text-regular">Followers</p>

              <div className="overall-today">
                <div className="icon">
                  <img src={Up} alt="Up" />
                </div>
                <p>1099 Today</p>
              </div>
            </div>

            <div className="overall-card"  id='card'>
              <div className="bar bar-youtube"></div>
              <div className="profile">
                <div className="icon">
                  <img src={Youtube} alt="Youtube" />
                </div>
                <p>@Nathan F.</p>
              </div>

              <p className="overall-number">8239</p>
              <p className="overall-unit text-regular">SUBSCRIBERS</p>

              <div className="overall-today">
                <div className="icon">
                  <img src={Down} alt="Down" />
                </div>
                <p className="overall-down">144 Today</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overview">
        <div className="container">
          <h3>Overview - Today</h3>
          <div className="overview-cards">
            <div className="overview-card"  id='card'>
              <div className="overview-title">
                <p>Page Views</p>
                <div className="icon">
                  <img src={Facebook} alt="Facebook" />
                </div>
              </div>

              <div className="overview-stats">
                <p>87</p>
                <div className="overview-up">
                  <div className="icon">
                    <img src={Up} alt="Up" />
                  </div>
                  <p>3%</p>
                </div>
              </div>
            </div>

            <div className="overview-card"  id='card'>
              <div className="overview-title">
                <p>Likes</p>
                <div className="icon">
                  <img src={Facebook} alt="facebook.svg" />
                </div>
              </div>

              <div className="overview-stats">
                <p>52</p>
                <div className="overview-down">
                  <div className="icon">
                    <img src={Down} alt="down.svg" />
                  </div>
                  <p>2%</p>
                </div>
              </div>
            </div>

            <div className="overview-card"  id='card'>
              <div className="overview-title">
                <p>Likes</p>
                <div className="icon">
                  <img src={Instagram} alt="instagram.svg" />
                </div>
              </div>

              <div className="overview-stats">
                <p>5462</p>
                <div className="overview-up">
                  <div className="icon">
                    <img src={Up} alt="up.svg" />
                  </div>
                  <p>2257%</p>
                </div>
              </div>
            </div>

            <div className="overview-card"  id='card'>
              <div className="overview-title">
                <p>Profile Views</p>
                <div className="icon">
                  <img src={Instagram} alt="instagram.svg" />
                </div>
              </div>

              <div className="overview-stats">
                <p>52k</p>
                <div className="overview-up">
                  <div className="icon">
                    <img src={Up} alt="up.svg" />
                  </div>
                  <p>1375%</p>
                </div>
              </div>
            </div>

            <div className="overview-card"  id='card'>
              <div className="overview-title">
                <p>Retweets</p>
                <div className="icon">
                  <img src={Twitter} alt="twitter.svg" />
                </div>
              </div>

              <div className="overview-stats">
                <p>117</p>
                <div className="overview-up">
                  <div className="icon">
                    <img src={Up} alt="up.svg" />
                  </div>
                  <p>303%</p>
                </div>
              </div>
            </div>

            <div className="overview-card"  id='card'>
              <div className="overview-title">
                <p>Likes</p>
                <div className="icon">
                  <img src={Twitter} alt="twitter.svg" />
                </div>
              </div>

              <div className="overview-stats">
                <p>507</p>
                <div className="overview-up">
                  <div className="icon">
                    <img src={Up} alt="up.svg" />
                  </div>
                  <p>553%</p>
                </div>
              </div>
            </div>

            <div className="overview-card"  id='card'>
              <div className="overview-title">
                <p>Likes</p>
                <div className="icon">
                  <img src={Youtube} alt="youtube.svg" />
                </div>
              </div>

              <div className="overview-stats">
                <p>107</p>
                <div className="overview-down">
                  <div className="icon">
                    <img src={Down} alt="down.svg" />
                  </div>
                  <p>19%</p>
                </div>
              </div>
            </div>

            <div className="overview-card"  id='card'>
              <div className="overview-title">
                <p>Total Views</p>
                <div className="icon">
                  <img src={Youtube} alt="youtube.svg" />
                </div>
              </div>

              <div className="overview-stats">
                <p>1407</p>
                <div className="overview-down">
                  <div className="icon">
                    <img src={Down} alt="down.svg" />
                  </div>
                  <p>12%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    </div>
  )
}

export default SocialMedia
import { LitElement, html, css } from 'lit';

class AboutPage extends LitElement {
  static get tag() { return 'about-page'; }

  static get styles() {
    return css`
      :host { 
        display:block; 
        box-sizing:border-box; 
    }
      .container {  
        margin: 0 auto; 
        padding: 24px; 
    }
      h2 { 
        margin-top: 0; 
    }
      .about-content { 
        display: grid; 
        grid-template-columns: repeat(auto-fit); 
        gap: 18px; 
        margin-top: 12px; 
    }
      .about-section { 
        background: var(--ddd-theme-default-skyBlue); 
        padding: 14px; 
        border-radius: 8px; 
        box-shadow: 0 1px 6px var(--ddd-theme-default-potential50); 
    }
      .about-section h3 { 
        margin-top: 0; 
    }
    about-h2 {
        font-weight: var(--ddd-font-weight-bold);
    }
      @media (prefers-color-scheme: dark) {
        .about-section { 
            background: var(--ddd-theme-default-skyBlue); 
            color: var(--ddd-theme-default-slateMaxLight); 
            box-shadow: none; 
        }
      }
    `;
  }

  render() {
    return html`
      <div class="container">
        <h2>About Barnard Rugby</h2>
        <div class="about-content">
          <div class="about-section">
            <h3>Our History</h3>
            <p>Founded with a passion for the sport, Barnard Rugby has become a prime example of our athletics team. 
                We've built a legacy of sportsmanship, excellence, and dedication that continues to inspire our current players and future ones to come.</p>
          </div>

          <div class="about-section">
            <h3>Our Mission</h3>
            <p>We aim to provide a competetive and inclusive environment where athletes alike can develop skills, build 
                character, and represent what we at Barnard stand for with pride. We are committed to growing both on and 
                off the field as we focus to become better athletes and individuals.
            </p>
          </div>

          <div class="about-section">
            <h3>Practice & Training</h3>
            <p><about-h2>Practice Times:</about-h2> Tuesday & Thursday, 4:00 PM - 6:00 PM<br>
            <about-h2>Location:</about-h2> Barnard Athletic Field<br>
            <about-h2>Season:</about-h2> Fall & Spring</p>
          </div>

          <div class="about-section">
            <h3>Contact Us</h3>
            <p><about-h2>Email:</about-h2> <a href="mailto:barnardrugby@barnard.edu">barnardrugby@barnard.edu</a><br>
            <about-h2>Instagram:</about-h2> @barnardrugby<br>
            <about-h2>Captain:</about-h2> Contact through team email</p>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define(AboutPage.tag, AboutPage);

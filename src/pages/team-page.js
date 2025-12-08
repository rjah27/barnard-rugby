import { LitElement, html, css } from 'lit';

class TeamPage extends LitElement {
  static get tag() { return 'team-page'; }

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
        margin-top:0; 
      }
      
      .roster-grid { 
        display: grid; 
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); 
        gap: 14px;
        margin-top: 12px; 
      }

      .player-card {
        background: var(--ddd-theme-default-skyBlue);
        padding: 12px;
        border-radius: 8px;
        box-shadow: 0 1px 6px var(--ddd-theme-default-potential50);
        text-align: center;
        color: var(--ddd-theme-default-slateMaxLight);
      }

      .player-number {
        font-weight: 700;
        color: var(--ddd-theme-default-beaverBlue);
        font-size: 1.1rem;
        margin-bottom: 8px;
      }

      .player-card h3 { 
        margin: 6px 0 4px 0; 
      }
      .position { 
        color: var(--ddd-theme-default-slateMaxLight); 
        margin: 0; 
      }
      .year { 
        color: var(--ddd-theme-default-slateMaxLight); 
        margin-top: 6px; 
        font-size: 0.9rem; 
      }

      @media (prefers-color-scheme: dark) {
        .player-card { 
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
        <section id="roster" class="page">
          <h2>Team Roster</h2>
          <div class="roster-grid">
            <div class="player-card">
              <div class="player-number">#1</div>
              <h3>Sarah Johnson</h3>
              <p class="position">Prop</p>
              <p class="year">Senior</p>
            </div>
            <div class="player-card">
              <div class="player-number">#2</div>
              <h3>Maya Patel</h3>
              <p class="position">Hooker</p>
              <p class="year">Junior</p>
            </div>
            <div class="player-card">
              <div class="player-number">#3</div>
              <h3>Emily Chen</h3>
              <p class="position">Prop</p>
              <p class="year">Sophomore</p>
            </div>
            <div class="player-card">
              <div class="player-number">#4</div>
              <h3>Alex Rodriguez</h3>
              <p class="position">Lock</p>
              <p class="year">Senior</p>
            </div>
            <div class="player-card">
              <div class="player-number">#5</div>
              <h3>Jordan Williams</h3>
              <p class="position">Lock</p>
              <p class="year">Junior</p>
            </div>
            <div class="player-card">
              <div class="player-number">#6</div>
              <h3>Taylor Smith</h3>
              <p class="position">Flanker</p>
              <p class="year">Sophomore</p>
            </div>
            <div class="player-card">
              <div class="player-number">#7</div>
              <h3>Morgan Lee</h3>
              <p class="position">Flanker</p>
              <p class="year">Junior</p>
            </div>
            <div class="player-card">
              <div class="player-number">#8</div>
              <h3>Casey Brown</h3>
              <p class="position">Number 8</p>
              <p class="year">Senior</p>
            </div>
            <div class="player-card">
              <div class="player-number">#9</div>
              <h3>Riley Martinez</h3>
              <p class="position">Scrum-half</p>
              <p class="year">Sophomore</p>
            </div>
            <div class="player-card">
              <div class="player-number">#10</div>
              <h3>Avery Thompson</h3>
              <p class="position">Fly-half</p>
              <p class="year">Junior</p>
            </div>
            <div class="player-card">
              <div class="player-number">#11</div>
              <h3>Jamie Davis</h3>
              <p class="position">Wing</p>
              <p class="year">First Year</p>
            </div>
            <div class="player-card">
              <div class="player-number">#12</div>
              <h3>Sam Wilson</h3>
              <p class="position">Center</p>
              <p class="year">Senior</p>
            </div>
          </div>
        </section>
      </div>
    `;
  }
}

customElements.define(TeamPage.tag, TeamPage);

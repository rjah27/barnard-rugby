import { LitElement, html, css } from 'lit';
import "./barnard-game-card.js";

class SchedulePage extends LitElement {
  static get tag() { return 'schedule-page'; }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .container {
        max-width: 900px;
        margin: 0 auto;
      }

      .barnard-match-grid {
        display: grid;
        gap: 12px;
        /* saw online how minmax can set the size of the grid items to a fixed size but allow flexibility */
        grid-template-columns: repeat(auto-fit, minmax(220px));
        margin-top: 12px;
      }
    `;
  }
  constructor() {
    super();
    this.schedule = [
      { date: '2025-09-15', team: 'Calder Rugby', location: 'Home', time: '6:00 PM', result: 'W 25-10' },
      { date: '2025-09-28', team: 'Riverside Rugby', location: 'Away', time: '4:30 PM', result: 'L 30-35' },
      { date: '2025-10-12', team: 'PSU Club Rugby', location: 'Home', time: '11:00 AM', result: 'W 45-20' },
      { date: '2025-10-26', team: 'S Barnard Rugby', location: 'Away', time: '2:00 PM', result: 'W 20-15' },
      { date: '2025-11-09', team: 'Eastside RFC', location: 'Home', time: '1:00 PM', result: 'L 18-22' },
      { date: '2025-11-23', team: 'Downtown Rugby', location: 'Away', time: '3:30 PM', result: 'W 32-28' },
      { date: '2025-12-20', team: 'Ruggerfest Invitationals', location: 'TBD', time: 'TBD', result: 'TBD'},
      { date: '2026-01-11', team: 'Rugby Regionals', location: 'TBD', time: 'TBD', result: 'TBD' },
      { date: '2026-01-25', team: 'National Championships', location: 'TBD', time: 'TBD', result: 'TBD' }
    ];
  
  }

  static get properties() {
    return {
      ...super.properties,
      schedule: { type: Array }
    };
  }

  render() {
    return html`
      <div class="record-container">
        <h2>Schedule / Record</h2>
          <div class="barnard-match-grid">
            ${this.schedule.map(schedule => html`
              <barnard-game-card
                date="${schedule.date}"
                time="${schedule.time || ''}"
                team="${schedule.team}"
                location="${schedule.location}"
                result="${schedule.result}">
              </barnard-game-card>
            `)}
          </div>
      </div>
    `;
  }
}

customElements.define(SchedulePage.tag, SchedulePage);

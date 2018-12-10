import React from "react";
import { Route, Link } from "react-router-dom";
import Event from "../Event/Event";
import "./scss/style.scss";

class Events extends React.Component {
  render() {
    return (
      <section className="event">
        <div className="container">
          <ul className="row event__list">
            {this.props.eventsDatas.map(event => {
              return (
                <Link
                  to={`/event/${event.id}`}
                  className="col-md-4 event__item"
                  key={event.id}
                >
                  <li key={event.id}>
                    {event.logo ? (
                      <div
                        className="img__box"
                        style={{
                          backgroundImage: `url(
                  ${event.logo.url}
                  )`
                        }}
                      />
                    ) : (
                      <div className="dummy" />
                    )}
                    <div className="event__infos">
                      <h3 className="event__title">{event.name.text}</h3>
                      <p className="event__time">{event.start.local}</p>
                    </div>
                  </li>
                </Link>
              );
            })}
          </ul>
          <Route path={`/event/:id`} component={Event} />
        </div>
      </section>
    );
  }
}

export default Events;

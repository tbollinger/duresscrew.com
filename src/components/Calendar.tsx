import React from "react";

class Calendar extends React.Component {
  render() {
    // @ts-ignore
    return (
      <div>
        <Calendar apiKey={API_KEY} calendars={calendars} />
      </div>
    );
  }
}
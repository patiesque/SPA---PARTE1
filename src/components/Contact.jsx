import React, { Component } from 'react';

class Contact extends Component {

  formatDate = (date) => {
    let formatDate = new Date(date);

    let options = { year: "numeric", month: "2-digit", day: "2-digit" };

    return formatDate.toLocaleDateString("pt-BR", options);
};

  render() {
    return (
        <article className="contact" data-testid="contact">
          <span className="contact__avatar"><img src={this.props.data.avatar} alt="avatar" /></span>
          <span className="contact__data">{this.props.data.name}</span>
          <span className="contact__data">{this.props.data.phone}</span>
          <span className="contact__data">{this.props.data.country}</span>
          <span className="contact__data">{this.formatDate}</span>
          <span className="contact__data">{this.props.data.company}</span>
          <span className="contact__data">{this.props.data.department}</span>
        </article>
    );
  }
}

export default Contact;
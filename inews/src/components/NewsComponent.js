import React, { Component } from "react";
import ImageNotFound from "./ImageNotFound.png";

export class NewsComponent extends Component {
  render() {
    let {
      title,
      description,
      imageUrl,
      newsUrl,
      author,
      date,
      source = {},
    } = this.props;

    return (
      <div>
        <div className="card" style={{ marginBottom: "1rem" }}>
          <span
            className="position-absolute top-0  translate-middle badge rounded-pill bg-danger"
            style={{ left: "90%", zIndex: "1" }}
          >
            {source.name}
          </span>
          <img
            src={!imageUrl ? ImageNotFound : imageUrl}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>

            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toDateString()}
              </small>
            </p>
            <a href={newsUrl} target="blank" className="btn btn-sm btn-primary">
              Read More...
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsComponent;

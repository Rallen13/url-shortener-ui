import React from "react";
import "./UrlContainer.css";

const UrlContainer = ({ urls, deleteUrl }) => {
  const urlEls = urls.map((url) => {
    return (
      <div className="url" key={url.id} data-cy="url-card">
        <h3 data-cy="url-title">{url.title}</h3>
        <a data-cy="url-short" href={url.short_url} target="blank">
          {url.short_url}
        </a>
        <p data-cy="url-long">{url.long_url}</p>
        <button onClick={() => deleteUrl(url.id)} data-cy="url-cancel-button">
          Delete
        </button>
      </div>
    );
  });

  return (
    <section>
      {urlEls.length ? urlEls : <p>No urls yet! Find some to shorten!</p>}
    </section>
  );
};

export default UrlContainer;

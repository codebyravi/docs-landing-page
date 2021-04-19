import React from 'react';
import Highlight from './Highlight';
import PropTypes from 'prop-types';
import Snippet from './Snippet';

function HeaderLink(props) {
  const headerUrl = props.headerUrl;
  switch (headerUrl) {
    case headerUrl.includes('/docs/'):
      return (<a className="search-type-link" href="/docs/">Solution Docs</a>);
    case headerUrl.includes('/support/how-to/'):
      return (<a className="search-type-link" href="/support/how-to/">How-To</a>);
    case headerUrl.includes('/blog/'):
      return (<a className="search-type-link" href="/blog">Blog</a>);
    default:
      return (<span></span>)
  }
}
const Hit = ({ hit }) => {
  if (hit.title != null && hit.title != '' && hit.content != '' && hit.content != null && hit.url != null) {
    return (
      <div className="row">
        <div className="col-sm-12">
          <HeaderLink headerUrl={hit.url} />&nbsp;&gt;&nbsp;<a className="search-type-link">{hit.category}</a>
          <h2>
            <a className="search-title-link" href={`${hit.url}`}>
              <Highlight attribute="title" hit={hit} />
            </a>
          </h2>
          <a className="search-summary-link" href={`${hit.url}`}>
            <p className="search-summary"><Snippet hit={hit} attribute="content" tagName="mark"/></p>
          </a>
        </div>
      </div>
    );
  } else {
    return (<span></span>);
  }
};

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default Hit;

import React from 'react';
import Highlight from './Highlight';
import PropTypes from 'prop-types';
import Snippet from './Snippet';

function HeaderLink(props) {
  const type = props.type;
  if (type==="Guides") {
    return (<a className="search-type-link" href="/docs/">Guides</a>);
  } else if (type==="How-Tos") {
    return ( <a className="search-type-link" href="/support/how-to/">How-Tos</a>);
  } else if (type==="Insights") {
    return (<a className="search-type-link" href="/blog/">Expert Insights Blog</a>);
  } else {
    return (<a className="search-type-link" href="/">Developer Home</a>);
  }
}
function TitleTag(props) {
  const type = props.type;
  if (type==="Guides") {
    return (<a className="search-tag technical-tag" href="/docs/">GUIDES</a>);
  } else if (type==="How-Tos") {
    return ( <a className="search-tag article-tag" href="/support/how-to/">HOW-TOs</a>);
  } else if (type==="Insights") {
    return (<a className="search-tag post-tag" href="/blog/">INSIGHTS</a>);
  } else {
    return (<span></span>);
  }
}
function KeywordsLink(props) {
  const keywords = props.keywords;
  const type = props.type;
  if (keywords != '' && keywords != null) {
    if (Array.isArray(keywords) && type === "Insights") {
      return (<span>&nbsp;&gt;&nbsp;{keywords.map((keyword) => <a key={keyword} className="search-type-link">{keyword.replace(/[\[\]']+/g, '').replace(/\s/g, ', ')}</a>)}</span>);
    } else {
      return (<span>&nbsp;&gt;&nbsp;<a className="search-type-link">{keywords}</a></span>);
    }
  } else {
    return (<span></span>);
  }
  
  // if (categories != '' && categories != null) {
  //   if (Array.isArray(categories)) {
  //     categories = categories.flat();
  //     return (<span>&nbsp;&gt;&nbsp;{categories.map((category) => <a key={category} className="search-type-link">{category.replace(/ *\([^)]*\) */g, "")}{index < hit.categories.length - 1 ? ',\u00A0' : ''}</a>)}</span>)
  //   } else {
  //     return (<span>&nbsp;&gt;&nbsp;<a className="search-type-link">{categories}</a></span>);
  //   }
  // } else {
  //   return (<span></span>);
  // }
}
function HitDate(props) {
  const date = props.date;
  if (date != '' && date != null) {
    const hitDate = new Date(date * 1000);
    const createdDate = hitDate.toJSON().split('T')[0];
    return (<span className="search-date">{moment(createdDate).format('LL')}</span>);
  } else {
    return (<span></span>);
  }
}

function Authors(props) {
  const authors = props.authors;
  const type = props.type;
  if (authors != '' && authors != null) {
    if (Array.isArray(authors) && (type === "Insights" || type === "How-Tos") ) {
      return (<span>&nbsp;&gt;&nbsp;{authors.map((author) => <a key={author} className="search-type-link">{author.replace(/[\[\]']+/g, '').replace(/\s/g, ', ')}</a>)}</span>);
    } else {
      return (<span>&nbsp;&gt;&nbsp;<a className="search-type-link">{authors}</a></span>);
    }
  } else {
    return (<span></span>);
  }
}
const Hit = ({ hit }) => {
  if (hit.title != null && hit.title != '' && hit.content != '' && hit.content != null && hit.url != null && hit.keywords != null && hit.keywords != '' && hit.category != null && hit.category != '') {
    return (
      <div className="row">
        <div className="col-sm-12">
          <HeaderLink type={hit.category} />
          <KeywordsLink category={hit.keywords} type={hit.category} />
          <h2>
            <TitleTag type={hit.category} />
            <a className="search-title-link" href={`${hit.url}`}>
              <Highlight attribute="title" hit={hit} />
            </a>
          </h2>
          <a className="search-summary-link" href={`${hit.url}`}>
            <p className="search-summary">
              <Snippet hit={hit} attribute="content" tagName="mark" />
            </p>
          </a>
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <Authors authors={hit.author} type={hit.category} />
            </div>
            <div className="col-sm-12 col-md-6">
              <HitDate date={hit.date} />
            </div>
          </div>
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

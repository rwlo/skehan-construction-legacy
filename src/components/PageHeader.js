import React from "react";

function PageHeader(props) {
  return (
    <div className="mt-5 mb-3">
      {props.title && <h2 className="h4 font-weight-bold">{props.title}</h2>}
      {props.subTitle && <span className="lead">{props.subTitle}</span>}
    </div>
  );
}

export default PageHeader;

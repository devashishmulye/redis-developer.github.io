import React from "react";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "@theme/MDXComponents";
import useBaseUrl from "@docusaurus/useBaseUrl";

import "./styles.css";

const RoadmapItem = (props) => {
  const [displayLong, setDisplayLong] = React.useState(false);

  return (
    <a href={props.page} className="ri-container">
      {props.img && (
        <div
          style={{
            width: "100%",
            height: "55px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img src={props.img} style={{ width: "40px" }} />
        </div>
      )}
      <div className="ri-description-short">
        <div className="ri-icon">
          <span className="fe fe-zap" />
        </div>

        <div className="ri-detail">
          <div className="ri-title">
            <a href={props.page}>{props.title}</a>
          </div>
          <div className="ri-description">
            {props.description}
            {React.Children.count(props.children) > 0 && (
              <span
                className="ri-more fe fe-more-horizontal"
                onClick={() => setDisplayLong(!displayLong)}
              />
            )}
          </div>
        </div>
      </div>
      {displayLong && (
        <div className="ri-description-long">
          <MDXProvider components={MDXComponents}>{props.children}</MDXProvider>
        </div>
      )}
    </a>
  );
};

export default RoadmapItem;

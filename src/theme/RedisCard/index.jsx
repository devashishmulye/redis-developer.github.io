import React from "react";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "@theme/MDXComponents";
import useBaseUrl from "@docusaurus/useBaseUrl";

import "./styles.css";

const RoadmapItem = (props) => {
  const [displayLong, setDisplayLong] = React.useState(false);

  return (
    <a href={props.page} className="ri-container" style={{paddingBottom:"24px"}}>
      {props.img && (
        <div
          style={{
            width:"35%",
            height:"100%",
            display: "flex",
            alignItems: "center",
            marginLeft: "15px",
            marginRight: "0px"
          }}
        >
          <img src={props.img} style={{ width: "80%",maxWidth:"75%" }} />
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

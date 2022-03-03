import Disqus from "disqus-react";
import Markdown from "markdown-to-jsx";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";

function BlogDetails(props) {
  const params = useParams();
  const [content, setContent] = useState("");
  const blogId = params.id;
  const blogFile = params.title;
  const fileName = `${blogFile}.md`;

  useEffect(() => {
    import(`../blog/${fileName}`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setContent(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  });

  const disqusShortname = "";
  const disqusConfig = {
    url: "https://hermiloortega.com",
    identifier: blogId,
    title: blogFile,
  };

  return (
    <Layout>
      <Helmet>
        <title>Hermilo Ortega - My Blog</title>
        <meta name="description" content="Hermilo Ortega - Software Engineer bases on Vancouver BC - My Blog"/>
      </Helmet>
      <div className="mi-blog-details mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Markdown>{content}</Markdown>
          <div className="mi-blog-details-comments mt-30">
            <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BlogDetails;
import React, { useState, useEffect } from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
} from 'reactstrap';
import ModalInsertArticle from "./Components/ModalInsertArticle";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

// api
import { ArticleApi } from "../../api-lib/ArticleApi";

function ArticlePage() {
  // state
  const [artikel, setArtikel] = useState({ data: [] })

  useEffect(function() {
    ArticleApi().then(function(result) {
      if(result !== undefined) {
        setArtikel({ data: result.data })
      }
    });
  }, [])
  console.log(artikel.data)
  return (
    <div>
      {artikel.data.map(function(data) {
        return (
          <Card key={data.id} style={{width: '18rem'}}>
            <CardBody>
              <CardTitle tag="h5">
                {data.title}
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                {data.body}
              </CardSubtitle>
            </CardBody>
          </Card>
        )
      })}
      <ModalInsertArticle />
    </div>
  );
}

export default ArticlePage;
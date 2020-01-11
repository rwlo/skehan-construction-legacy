import React from "react";
import Container from "react-bootstrap/Container";
// import Tabs from "react-bootstrap/Tabs";
// import Tab from "react-bootstrap/Tab";
import PageHeader from "../components/PageHeader";
import RequestQuote from "../components/RequestQuote";
import GridGallery from "../components/GridGallery";

function GalleryPage(props) {
  return (
    <>
      <Container>
        <PageHeader title="Project Gallery" subTitle="Placeholder" />
        <GridGallery />
      </Container>
      <RequestQuote />
    </>
  );
}
//   <Tabs
//     defaultActiveKey="all"
//     transition={false}
//     id="noanim-tab-example"
//     variant="pills"
//   >
//     <Tab eventKey="all" title="Home">
//       <Example />
//     </Tab>
//     <Tab eventKey="bathroom" title="Bathroom">
//       <Example2 />
//     </Tab>
//     <Tab eventKey="kitchen" title="Kitchen">
//       <Example3 />
//     </Tab>
//   </Tabs>

export default GalleryPage;

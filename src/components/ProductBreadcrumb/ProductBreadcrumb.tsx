import { Breadcrumb, Container } from 'react-bootstrap';
import classes from './ProductBreadcrumb.module.scss';
const ProductBreadcrumb = () => {
  return (
    <>
      <Container className="p-3 pb-0">
        <Breadcrumb className={classes.productBreadcrumb}>
          <Breadcrumb.Item className="text-dark" href="#">
            Men
          </Breadcrumb.Item>
          <Breadcrumb.Item href="#">Clothing</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Tops</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Adidas</Breadcrumb.Item>
          <Breadcrumb.Item active>T-Shirt</Breadcrumb.Item>
        </Breadcrumb>
      </Container>
      <hr />
    </>
  );
};

export default ProductBreadcrumb;

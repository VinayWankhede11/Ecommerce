import Navbar from "../features/navbar/Navbar";
import ProductDetail from "../features/productlist/components/ProductDetail";
function ProductDetailPage() {
  return (
    <div>
      <Navbar>
        <ProductDetail></ProductDetail>
      </Navbar>
    </div>
  );
}

export default ProductDetailPage;

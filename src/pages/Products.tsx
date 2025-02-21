import { products } from "../data/productData";

const Products = () => {
  return (
    <div>
      <h1>商品一覧</h1>
      <table cellPadding="10">
        <thead>
          <tr>
            <th>商品ID</th>
            <th>商品名</th>
            <th>カテゴリー</th>
            <th>価格</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.price} 円</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;

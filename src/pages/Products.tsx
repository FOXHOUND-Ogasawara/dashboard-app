import React from 'react';
import { products } from '../data/productData'; // 商品データをインポート
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const ProductsPage: React.FC = () => {
  return (
    <div>
      {/* ページのタイトル */}
      <Typography variant="h4" component="h1" gutterBottom>
        商品一覧
      </Typography>

      {/* 商品データを表示するテーブル */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>商品ID</TableCell> {/* 商品ID列のヘッダー */}
              <TableCell>商品名</TableCell> {/* 商品名列のヘッダー */}
              <TableCell>カテゴリー</TableCell> {/* カテゴリー列のヘッダー */}
              <TableCell>価格</TableCell> {/* 価格列のヘッダー */}
            </TableRow>
          </TableHead>
          <TableBody>
            {/* products配列をループして各商品データを行として表示 */}
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell> {/* 商品IDを表示 */}
                <TableCell>{product.name}</TableCell> {/* 商品名を表示 */}
                <TableCell>{product.category}</TableCell> {/* カテゴリーを表示 */}
                <TableCell>¥{product.price.toLocaleString()}</TableCell> {/* 価格をカンマ区切りで表示 */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ProductsPage;
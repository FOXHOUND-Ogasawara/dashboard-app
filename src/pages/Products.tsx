import React from "react";
import { products } from "../data/productsData";
import {
  TableCell,
  TableHead,
  TableRow,
  Table,
  Typography,
  Box,
  TableBody,
} from "@mui/material";

const Products: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4">ダッシュボード</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>商品名</TableCell>
            <TableCell>カテゴリ</TableCell>
            <TableCell>価格</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => {
            return (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.price}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Box>
  );
};

export default Products;

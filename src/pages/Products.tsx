import React from "react";
import { products } from "../data/productData";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

const Products: React.FC = () =>{
 return(
    <>
    <Box>
    <Typography variant="h3" gutterBottom>
    商品一覧
    </Typography>
    <TableContainer>
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>商品名</TableCell>
                <TableCell>カテゴリー</TableCell>
                <TableCell>金額</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
    {products.map((product) => (
        <TableRow key={product.id}>
            <TableCell>{product.id}</TableCell>
            <TableCell>{product.name}</TableCell>
            <TableCell>{product.category}</TableCell>
            <TableCell>{product.price}</TableCell>
        </TableRow>
    )
    )}
        </TableBody>
    </Table>
    </TableContainer>
    </Box>
    </>
 )
}

export default Products;
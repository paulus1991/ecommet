"use client";
import { styled, Typography } from "@mui/material";
import Link from "next/link";

export const Navbar = () => {
  return (
    <Wrapper>
      <Link href="/">
        <Typography variant="h4">Home</Typography>
      </Link>
      <Link href="/products">
        <Typography variant="h4">Products</Typography>
      </Link>
      <Link href="about">
        <Typography variant="h4">About us</Typography>
      </Link>
      <Link href="contact">
        <Typography variant="h4">Contact</Typography>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled("div")(({ theme }) => {
  return {
    display: "flex",
    justifyContent: "space-around",
    gap: theme.spacing(3),
  };
});

"use client";

import React, { useEffect, useState } from "react";
import useSWR from "swr";

import styles from "./page.module.css";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Dashboard = () => {
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts/",
    fetcher
  );

  console.log(data);

  return <div>Blog</div>;
};

export default Dashboard;

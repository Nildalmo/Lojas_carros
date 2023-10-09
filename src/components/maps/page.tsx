"use client";

import React from "react";

const Maps = ({ iframe }: { iframe: string }) => {
  return <div dangerouslySetInnerHTML={{ __html: iframe }} />;
};

export default Maps;

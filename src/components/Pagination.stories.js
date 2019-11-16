import React from "react";
import Pagination from "./Pagination";
import { withKnobs, number } from "@storybook/addon-knobs";

export default { title: "Pagination", decorators: [withKnobs] };

export const withDefaultParams = () => (
  <div style={{ padding: 24 }}>
    <Pagination
      total={number("Total", 5)}
      current={number("Current", 1)}
      onSelect={() => {}}
    />
  </div>
);

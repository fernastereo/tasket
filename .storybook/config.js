import { configure } from "@storybook/react";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";

configure(require.context("../src", true, /\.stories\.js$/), module);

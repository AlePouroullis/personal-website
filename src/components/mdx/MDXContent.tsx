"use client";

import { useMDXComponent } from "next-contentlayer/hooks";
import { Image } from "./Image";

const components = {
  Image,
  // Add any custom components here that you want to use in MDX
};

export function MDXContent({ code }: { code: string }) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}

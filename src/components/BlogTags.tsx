"use client";

import { HStack, Tag, SpaceProps } from "@chakra-ui/react";

interface TagsProps {
  marginTop?: number | SpaceProps["marginTop"];
  tags: string[]; // タグは文字列の配列として型付け
}

const BlogTags = (props: TagsProps) => {
  const { marginTop = 0, tags } = props;
  return (
    <HStack spacing={2} marginTop={marginTop}>
      {tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

export default BlogTags;

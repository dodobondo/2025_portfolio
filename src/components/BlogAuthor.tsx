// src/components/BlogAuthor.tsx
"use client"; 

import { HStack, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react"; 

interface BlogAuthorProps {
  date: Date;
  name: string;
}

const BlogAuthor = (props: BlogAuthorProps) => {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    // コンポーネントがマウントされた後（クライアントサイドで）のみ日付をフォーマット
    setFormattedDate(props.date.toLocaleDateString());
  }, [props.date]); // date propが変更された場合に再フォーマット

  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{formattedDate}</Text> {/* フォーマット済みの日付を表示 */}
    </HStack>
  );
};

export default BlogAuthor;

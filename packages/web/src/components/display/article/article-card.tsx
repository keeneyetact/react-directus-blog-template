import React from "react";

import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Group,
  Image,
  Mark,
  Text,
} from "@mantine/core";

import { web_config } from "@lib/config";
import { Link } from "@components/core";
import { getDay, format } from "date-fns";

export type ArticleCardProps = {
  id: string;
  cover: string;
  cover_caption: string;
  heading: string;
  preview: string;
  body: string;
  date_created: string;
  user_created: {
    avatar: string;
    first_name: string;
    last_name: string;
    title: string;
  };
  user_updated: {
    avatar: string;
    first_name: string;
    last_name: string;
    title: string;
  };
};

export const ArticleCard = ({
  id,
  cover,
  cover_caption,
  heading,
  preview,
  date_created,
  user_created,
}: ArticleCardProps) => {
  const date = new Date(date_created);
  const date_string = format(date, "MMMM d, yyyy");

  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "stretch",
      }}
    >
      <Card.Section>
        <Link href={`/articles/${id}`}>
          <Image
            src={`https://${web_config.cms_host}/assets/${cover}?key=small-cover`}
            height={172}
            alt="Norway"
          />
        </Link>
      </Card.Section>

      <Box mt={8} mb={4} sx={{ flexGrow: 1 }}>
        <Text size="sm" lineClamp={4}>
          {preview}
        </Text>
      </Box>

      <Box mt={4} mb={8}>
        <Box sx={{ display: "flex", flexDirection: "row", gap: 4 }}>
          <Avatar
            src={`https://${web_config.cms_host}/assets/${user_created.avatar}?key=avatar`}
            alt={`${user_created.first_name} ${user_created.last_name}`}
          />
          <Box>
            <Text size="xs" fs="italic" c="brand-green">
              By. {user_created.first_name} {user_created.last_name}
            </Text>
            <Text size="xs" fs="italic" c="brand-green">
              {date_string}
            </Text>
          </Box>
        </Box>
      </Box>

      <Card.Section>
        <Link href={`/articles/${id}`}>
          <Button variant="subtle" c="brand-red" fullWidth>
            Read now
          </Button>
        </Link>
      </Card.Section>
    </Card>
  );
};

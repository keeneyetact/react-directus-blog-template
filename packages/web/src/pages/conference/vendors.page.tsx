import React from "react";

import { Container, Divider, Text, Title } from "@mantine/core";

import { BasePage } from "@lib/shared";

import { LayoutDefault } from "@components/layouts";
import { FeatureItem, FeatureList } from "@components/display/list";

type PageProps = {
  page_data: BasePage;
  vendor_list: FeatureItem[];
};

export const Page = ({ page_data, vendor_list }: PageProps) => {
  return (
    <>
      <Container>
        <Title color="brand-red">{page_data.heading}</Title>
      </Container>
      <Container>
        <Text dangerouslySetInnerHTML={{ __html: page_data.content }} />
        <Divider sx={{ margin: "8px 0px" }} />
        <FeatureList items={vendor_list} />
      </Container>
    </>
  );
};

export const query = {
  page_data: { model: "items/conference_vendors" },
  vendor_list: { model: "items/conference_vendor_list" },
};

Page.getLayout = (page: React.ReactNode) => {
  return <LayoutDefault>{page}</LayoutDefault>;
};

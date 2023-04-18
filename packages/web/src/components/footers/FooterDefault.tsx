import React from "react";
import { Box } from "@mantine/core";

import { MdCopyright } from "react-icons/md/index.js";
import { FiFacebook, FiInstagram, FiMail } from "react-icons/fi/index.js";

import { web_config } from "@lib/config";

import { Link } from "@components/core";
import { social_links } from "@data";

export type FooterDefaultProps = {
  children?: React.ReactNode;
};

export const FooterDefault = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      <Box
        my={24}
        sx={{
          display: "flex",
          flexDirection: "column",
          "@media (max-width: 920px)": {
            flexDirection: "column-reverse",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
            "@media (max-width: 920px)": {
              flexDirection: "column-reverse",
              gap: 0,
            },
          }}
        >
          <Box
            sx={{ display: "flex", alignItems: "center", gap: 2 }}
            aria-label="instagram link"
          >
            <FiInstagram />
            <Link href={social_links.instagram.link}>
              @ssyofcanada
              {/* instagram */}
            </Link>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", gap: 2 }}
            aria-label="facebook link"
          >
            <FiFacebook />
            <Link href={social_links.facebook.link}>facebook</Link>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", gap: 2 }}
            aria-label="email link"
          >
            <FiMail />
            <Link href={`mailto:${web_config.app_email}`}>
              {web_config.app_email}
            </Link>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <MdCopyright />
          {web_config.app_title} {new Date().getFullYear()}
        </Box>
        {children}
      </Box>
    </Box>
  );
};

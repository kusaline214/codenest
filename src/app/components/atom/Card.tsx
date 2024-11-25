import { Box, Card, Inset, Strong, Text } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";

interface BusinessProps {
  name: string;
  title: string;
  icon: string;
}

const Business: React.FC<BusinessProps> = ({ name, title, icon }) => {
  return (
    <div>
      <Box maxWidth="240px">
        <Card size="2">
          <Inset clip="padding-box" side="top" pb="current">
            <Image
              src={icon}
              alt="Bold typography"
              style={{
                display: "block",
                objectFit: "cover",
                width: "100%",
                height: 140,
                backgroundColor: "var(--gray-5)",
              }}
              width={200}
              height={150}
            />
          </Inset>
          <Text as="p" size="3">
            <Strong>{name}</Strong>
            <br />
            {title}
          </Text>
        </Card>
      </Box>
    </div>
  );
};

export default Business;

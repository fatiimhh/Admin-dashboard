// chakra imports
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

export function ItemContent(props) {
  const textColor = useColorModeValue("navy.700", "white");
  return (
    <>
      <Flex
        justify='center'
        align='center'
        borderRadius='16px'
        minH={{ base: "60px", md: "70px" }}
        h={{ base: "60px", md: "70px" }}
        minW={{ base: "60px", md: "70px" }}
        w={{ base: "60px", md: "70px" }}
        me='14px'
       >
      </Flex>
      <Flex flexDirection='column'>
        <Text
          mb='5px'
          fontWeight='bold'
          color={textColor}
          fontSize={{ base: "md", md: "md" }}>
          New Notification: {props.info}
        </Text>
        <Flex alignItems='center'>
          <Text
            fontSize={{ base: "sm", md: "sm" }}
            lineHeight='100%'
            color={textColor}>
            A new notification!
          </Text>
        </Flex>
      </Flex>
    </>
  );
}

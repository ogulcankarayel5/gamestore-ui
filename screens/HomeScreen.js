import React from "react";
import { Platform } from "react-native";
import styled from "styled-components";
import { StatusBar } from "expo-status-bar";
import Text from "../components/Text";
export default HomeScreen = () => {
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Header>
        <Text large>
          Hello{" "}
          <Text large bold>
            Oğulcan,
          </Text>
          {"\n"}
          <Text large bold>
            Best games for today
          </Text>
        </Text>
        <Avatar source={require("../assets/favicon.png")} />
      </Header>
    </Container>
  );
};
const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #343434;
  padding-top: ${(props) => (Platform.OS === "android" ? "25px" : 0)};
`;
const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 16px 32px 0 32px;
`;

const Avatar = styled.Image`
  width: 40px;
  height: 40px;
`;

import { View, Text } from "react-native";
import styled from "styled-components/native";
import React, { useEffect, useState } from "react";
import Button from "./../../components/common/Button/Button";
import theme from "../../theme";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import OpeningList from "../../components/JobOpening/OpeningList";
import { getData } from './../../firebase/database';

const JobOpeningList = ({ navigation }) => {
  // 기본으로 불러와야하는 내용들
  const [lists, setLists] = useState({});

  useEffect(() => {
    getData("jobOpening", "", setLists);
  }, []);

  useEffect(() => {
    console.log("setLists: ", lists);
  }, [lists]);

  return (
    <Styled.container>
      <Styled.topBar>
        <Styled.title>구인</Styled.title>
        <Button
          shape={"Text"}
          title={"글쓰기"}
          onPress={() => navigation.push("JobOpeningPostCreate")}
        />
      </Styled.topBar>
      <KeyboardAwareScrollView extraScrollHeight={10}>
        <OpeningList item={lists}/>
      </KeyboardAwareScrollView>
    </Styled.container>
  );
};
const Styled = {
  container: styled.View`
    background-color: ${theme.colors.white};
    flex: 1;
  `,
  title: styled.Text`
    font-size: 28px;
    color: black;
    font-weight: 800;
    margin-top: 20px;
    margin-left: 20px;
  `,
  topBar: styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 18px;
  `,
};
export default JobOpeningList;

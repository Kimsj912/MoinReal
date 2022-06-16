import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import React from "react";
import theme from '../../theme';
import {nanoid} from 'nanoid';
import styled from "styled-components/native";

const dataList = [
    {id : '1', title:'KAKAO 독일 베를린 지사 (test: 남이쓴 글)', detail:'독일 베를린 지사 KAKAO DATA 분야 전문가를 모집합니다.', income : '5000만원'},
    {id : '2', title:'NAVER 독일 뮌헨 지사', detail:'detail2....', income : '200만원'},
    {id : '3', title:'구인3', detail:'detail3....', income : '4000만원'},
    {id : '4', title:'구인4', detail:'detail4....', income : '3000만원'},
    {id : '5', title:'구인5', detail:'detail5....', income : '3000만원'},
    {id : '6', title:'구인6', detail:'detail6....', income : '3000만원'},
];

  
  const OpeningList = ({item}) => {  
    const dataList = Object.values(item);
    return (
      <Styled.container>
        {dataList.map(item=> (
          <Styled.listItem key={item.id}>
            <Styled.title>{item.title}</Styled.title>
            <Styled.detail>{item.detail}</Styled.detail>
            <Styled.income>{item.salary}</Styled.income>
            <Styled.border></Styled.border>
          </Styled.listItem>
        ))}
      </Styled.container>
    );
  };
  
  const Styled = {
    container: styled.View`
      flex: 1;
      display : flex;
      flex-direction : column;
    `,
    border : styled.View`
      margin-top :30px;
      width : 100%;
      height : 1.5px;
      background-color : ${theme.colors.gray};
    `,
    listItem : styled.View`
      width : 100%;
      padding :13px;
    `,
    title : styled.Text`
      font-size : 19px;
      font-weight: 550;
    `, 
    detail : styled.Text`
      font-size : 16px;
    `,
    income : styled.Text`
      font-size : 13px;
    `,

  };
  
  export default OpeningList;




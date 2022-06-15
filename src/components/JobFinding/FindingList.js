import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import React from "react";
import theme from '../../theme';
import {nanoid} from 'nanoid';
import styled from "styled-components/native";

const dataList = [
    {id : '1', title:'그래픽, 영상 편집을 전공한 인재입니다.', detail:'웹, 모바일 디자인, 그래픽 영상, 편집 디자인 등 경력 있습니다.', name : 'David'},
    {id : '2', title:'NAVER 독일 뮌헨 지사', detail:'detail2....', name : 'Julia'},
    {id : '3', title:'구직3', detail:'detail3....', name : 'Choi'},
    {id : '4', title:'구직4', detail:'detail4....', name : 'David'},
    {id : '5', title:'구직5', detail:'detail5....', name : 'David'},
    {id : '6', title:'구직6', detail:'detail6....', name : 'David'},
];

  
  const Item = ({ title, detail, name}) => (
    <Styled.item>
      <Styled.title>{title}</Styled.title>
      <Styled.detail>{detail}</Styled.detail>
      <Styled.name>{name}</Styled.name>
    </Styled.item>
  );
  
  const FindingList = () => {
    const renderItem = ({ item }) => (
      <Item title={item.title} detail = {item.detail} name = {item.name}/>
    );
  
    return (
      <Styled.container>
        <FlatList
          data={dataList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </Styled.container>
    );
  }
  
  const Styled = {
    container : styled(SafeAreaView)`
        display: flex ;
        margin-top : 20px;
    `,
    item : styled.View`
        background-color : ${theme.colors.white};
        padding : 20px;
        margin-top : 6px;
        margin-left : 10px;
    `,
    title : styled.Text`
        font-size : 20px;
        font-weight: 550;
    `, 
    detail : styled.Text`
        font-size : 15px;
    `,
    name : styled.Text`
        font-size : 9px;
    `,
  };


  export default FindingList;



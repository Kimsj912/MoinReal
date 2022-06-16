import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Alert } from 'react-native';
import React, { useEffect, useState } from "react";
import theme from '../../theme';
import {nanoid} from 'nanoid';
import styled from "styled-components/native";
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { getData } from './../../firebase/database';

const dataList = [
    {id : '1', title:'그래픽, 영상 편집을 전공한 인재입니다.', detail:'웹, 모바일 디자인, 그래픽 영상, 편집 디자인 등 경력 있습니다.', name : 'David'},
    {id : '2', title:'NAVER 독일 뮌헨 지사', detail:'detail2....', name : 'Julia'},
    {id : '3', title:'구직3', detail:'detail3....', name : 'Choi'},
    {id : '4', title:'구직4', detail:'detail4....', name : 'David'},
    {id : '5', title:'구직5', detail:'detail5....', name : 'David'},
    {id : '6', title:'구직6', detail:'detail6....', name : 'David'},
];

  
  const FindingList = ({navigation, item}) => {
    const dataList = Object.values(item);

      // 유저 정보 가져옴
      const auth = getAuth();
      const [userData, setUserData] = useState({
        uid: "",
        username: "",
        imageUrl: "",
      });
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          let uid = user.uid;
          getData("users", uid, setUserData);
        } else {
          // User is signed out (로그아웃되면 자동으로 signin가도록 설정)
          navigation.push("Signin");
        }
      });
    }, []);


    return (
      <Styled.container>
        {dataList.map(item=> (
          <Styled.listItem key={item.title}>
            <Styled.title>{item.title}</Styled.title>
            <Styled.detail>{item.detail}</Styled.detail>
            {/* <Styled.name>{item.name}</Styled.name> */}
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
    name : styled.Text`
      font-size : 13px;
    `,

  };


  export default FindingList;



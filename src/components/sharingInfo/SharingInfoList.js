import { View, Text, Image, ScrollView} from 'react-native';
// import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import React, {Component} from'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import theme from '../../theme';

const SharingInfoList = ({route, navigation} ) => {
    console.log(route.params);
    return (
        <KeyboardAwareScrollView extraScrollHeight={10}>
            <Styled.Title>생활꿀팁</Styled.Title>
            <Styled.Subtitle>꿀팁! 공유해봐요~</Styled.Subtitle>
            <Styled.Container>
                    <Styled.ItemsLayout>
                            <Styled.Item>
                                <Styled.Cover>
                                    <Styled.ImageBox></Styled.ImageBox>
                                </Styled.Cover>
                                <Styled.Content>
                                    <Styled.Description>집 인테리어 꿀팁 소개합니다~</Styled.Description>
                                </Styled.Content>
                            </Styled.Item>
                            <Styled.Item>
                                <Styled.Cover>
                                    <Styled.ImageBox></Styled.ImageBox>
                                </Styled.Cover>
                                <Styled.Content>
                                    <Styled.Description>화장실 청소 꿀팁, 깨끗하게 청소해요~</Styled.Description>
                                </Styled.Content>
                            </Styled.Item>
                            <Styled.Item>
                                <Styled.Cover>
                                    <Styled.ImageBox></Styled.ImageBox>
                                </Styled.Cover>
                                <Styled.Content>
                                    <Styled.Description>펜과 노트만 있나면 누구나 할 수 있는 생활꿀팁! </Styled.Description>
                                </Styled.Content>
                            </Styled.Item>

                        <Styled.Item>
                            <Styled.Cover>
                                <Styled.ImageBox></Styled.ImageBox>
                            </Styled.Cover>
                            <Styled.Content>
                                <Styled.Description>벽 인테리어 고민이 되시나요? 이렇게 한번 해보세요!</Styled.Description>
                            </Styled.Content>
                        </Styled.Item>
                        <Styled.Item>
                            <Styled.Cover>
                                <Styled.ImageBox></Styled.ImageBox>
                            </Styled.Cover>
                            <Styled.Content>
                                <Styled.Description>펜과 노트만 있나면 누구나 할 수 있는 생활꿀팁! </Styled.Description>
                            </Styled.Content>
                        </Styled.Item>
                        <Styled.Item>
                            <Styled.Cover>
                                <Styled.ImageBox></Styled.ImageBox>
                            </Styled.Cover>
                            <Styled.Content>
                                <Styled.Description>벽 인테리어 고민이 되시나요? 이렇게 한번 해보세요!</Styled.Description>
                            </Styled.Content>
                        </Styled.Item>
                    </Styled.ItemsLayout>
            </Styled.Container>
    </KeyboardAwareScrollView>

    )
}

const Styled = {
    Container : styled.View``
, 
    Item : styled.View`
    background: white;
    border-radius: 18px;
    margin: 10px;
    margin-top: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
    width : 150px;   
`,
    Cover : styled.View`
    width: 100%;
    height: 150px;
    border-top-left-radius: 18px;
    border-top-right-radius: 18px;
    overflow: hidden;
`, 
    ImageBox : styled.View`
    width: 100%;
    height: 100%;
`,
    Content : styled.View`
    flex-direction: column;
    align-items: center;
    height: 60px;
`, 
    Description : styled.Text`
    color: black;
    font-size: 13px;
    font-weight: 550;
`, 
    ItemsLayout : styled.View`
    // flex-wrap : wrap;
    display : flex;
    align-content : flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    flex: 1;
    justifyContent : center;
`, 
    Subtitle : styled.Text`
    font-size: 16px;
    color: black;
    font-weight: 400;
    margin-top: 10px;
    margin-left: 40px;
`,
    Title : styled.Text`
    font-size: 30px;
    color: black;
    font-weight: 600;
    margin-top: 20px;
    margin-left: 25px;
`,

}

export default SharingInfoList;

//theme처리도 해야하고. 

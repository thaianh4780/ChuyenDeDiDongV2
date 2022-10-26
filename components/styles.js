import styled from "styled-components";
import { Constants } from "expo-constants";
import { View, Text, Image, TextInput, TouchableOpacity, Button,Icon, } from "react-native";

// const StatusBarHeight = Constants.StatusBarHeight;

//color
export const Colors = {
  primary: "#ffffff",
  secondary: "#E5E7EB",
  tertiary: "#1F2937",
  darkLight: "#9CA3AF",
  brand: "#a85b3c",
  green: "#10B981",
  red: "#EF4444",
};

const { primary, secondary, tertiary, darkLight, brand, green, red } = Colors;

export const StyledContainer = styled.View`
  flex: 1;
  padding: 25px;
  background-color: ${primary};
`;
export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
   align-items: center;
`;

export const WelcomeContainer = styled(InnerContainer)`
  padding-top:10px;
  justify-content: center;
`

export const PageLogo = styled.Image`
  width: 300px;
  height: 200px;
  margin-top: -20px;
  margin-bottom: 10px;
`;

export const HomePageLogo = styled.Image`
  width: 450px;
  height: 200px;
  border-width: 2px;
  border-color: ${secondary};
  margin-bottom: 10px;
  margin-top: -20px;
`

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  margin: auto;
  border-radius : 50px;

`

export const PageTitle = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: ${brand};
  padding: 10px;
  margin-bottom: 5px;
`;

export const SubTittle = styled.Text`
  font-size: 20px;
  text-align: center;
  margin-bottom: 10px;
  font-weight: bold;
  color: ${tertiary};
  letter-spacing: 1px;
`
export const StyledFormArea = styled.View`
  width: 100%;
`
export const StyledFormHome = styled.View`
  flex: 1;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
  width: 100%;
`
export const StyledTextInput = styled.TextInput`
  background: ${secondary};
  padding: 10px;
  padding-left: 65px;
  padding-right: 55px;
  border-radius: 5px;
  font-size: 16px;
  height: 60px;
  margin-bottom: 10px;
  color: ${tertiary};
  margin-vertical: 8px;

`
export const StyledInputLabel = styled.Text`
  color: ${tertiary};
  font-size: 13px;
  text-align:left; 
`
export const LeftIcon = styled.View`
  left: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`

export const RightIcon = styled.TouchableOpacity`
  right: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`
export const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  background-color:${brand} ;
  justify-content: center;
  align-items: center;
  border-radius :5px;
  height: 60px;
  margin-vertical: 5px; 

`
export const ButtonText = styled.Text`
  color: ${primary};
  font-size: 20px;
  font-weight: bold;
`

export const MsgBox = styled.Text`
  text-align: center;
  font-size: 13px;
`

export const Line = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${darkLight};
  margin-vertical: 15px; 

`
export const StyledTouchable = styled.TouchableOpacity`
  padding: 15px;
  justify-content: center;
  align-items: center;
  border-radius :10px;
  height: 180px;
  width: 150px;
  margin-vertical: 10px; 
  margin-horizontal: 18px;
`
export const StyledTouchableImage = styled.Image`
  position: absolute;
  height: 120px;
  width: 150px;
  z-index: 1;
  top: 0;
  border-radius :8px;
  background-color: ${primary};
`
export const StyledTouchableText = styled.Text`
  position: absolute;
  bottom:0;
  color: ${brand};
  font-size: 20px;
  height: 60px;
  width: 150px;
  padding-vertical: 15px;
  font-weight: bold;
  text-align: center;
`
export const WhiteZone = styled.View`
  background-color: ${primary};
  border-radius: 10px;
  width: 90%;
  height: 50px;
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
`
export const WZText = styled.Text`
  padding-vertical:15px;
  padding-horizontal:10px;
  font-size: 18px;
  color: ${brand};
  font-weight: bold;
`

// css DC styles

export const StyledDrinkTouchable = styled.TouchableOpacity`
  background-color: ${primary};
  border-radius: 25px;
  width: 350px;
  height: 100px;
  margin-top: 5px;
  margin-vertical: 20px; 
  margin-horizontal: 15px;
`

export const StyledDrinkTouchableImage = styled.Image`
  position: absolute;
  height: 120px;
  width: 120px;
  z-index: 1;
  bottom: 0;
  left:-30px;
  border-radius: 35px;
  /* background-color: ${brand}; */
`
export const StyledDrinkTouchableText = styled.Text`
  position: absolute;
  top: -5px;
  left: 70px;
  color: ${brand};
  font-size: 18px;
  height: 60px;
  width: 150px;
  padding-vertical: 15px;
  margin-horizontal : 5px;
  font-weight: 500;
  text-align: left;
  z-index: 1;
`
export const StyledDrinkTouchableSmallText = styled.Text`
  position: absolute;
  top: 35px;
  left: 80px;
  color:#000000;
  font-size: 11px;
  height: 80px;
  width: 170px;
  text-align: left;
  padding-vertical: 10px;
  font-weight: bold;
  text-align: center;
`
export const StyledDrinkTouchablePrice = styled.Text`
  position: absolute;
  top: 20px;
  left: 210px;
  color:#000000;
  font-size: 22px;
  height: 60px;
  width: 150px;
  padding-vertical: 15px;
  font-weight: bold;
  text-align: center;
 `

export const StyledDrinkTouchableBtn = styled.TouchableOpacity`
position: absolute;
top: 25px;
left: 320px;
height: 50px;
width: 50px;
padding-vertical: 15px;
font-weight: bold;
text-align: center;
background-color: ${brand};
border-radius: 15px;
` 


// Home Admin Style
export const StyledHomeBrownZone = styled.View`
  background-color: ${brand};
  width: 100%;
  border-bottom-right-radius: 10px;
  overflow: hidden;
`
export const StyledHomeBrownText = styled.Text`
  padding-vertical:25px;
  color: ${primary};
  font-size: 25px;
`
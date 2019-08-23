import styled from "styled-components"
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Header = styled.View`
flex:1;
flexDirection: row;
alignContent: space-between;
alignItems: center;
`;

export const MenuItem = styled(TouchableOpacity)`
flexGrow: 1;
backgroundColor: #2196f3;
flex: 1;
justifyContent: center;
`;

export const MenuItemInput = styled.View`
flexGrow: 2;
flex: 1;
flexDirection: row;
alignItems: center;
borderBottomColor: #fff;
borderBottomWidth: 1;
`;

export const IconStyled = styled(Icon)`
color: #fff8;
`;
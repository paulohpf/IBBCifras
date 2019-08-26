import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const TabListItem = styled.View`
flex: 1;
flexDirection: row;
justifyContent: space-between;    
alignItems: center;
padding: 10px;
border-bottom-width: 1;
border-bottom-color: #f4f4f4;
`;

export const TabTitle = styled(TouchableOpacity)`
flex: 1;
flexDirection: row;
alignItems: center;
alignContent: space-around;
`;

export const StyledText = styled.Text`
`

export const IconStyled = styled(Icon)`
flexGrow: 1;
color: #2196f3;
font-size: 25;
`;
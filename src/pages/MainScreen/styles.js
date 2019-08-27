import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const TabListItem = styled.View`
flexGrow: 1;
flexDirection: row;
flexWrap: nowrap;
`;

//Separador de items
export const renderItemSeparator = styled.View`
height: 1;
width: 100%;
backgroundColor: #f4f4f4;
`;

//Loading icon
export const Loading = styled.ActivityIndicator.attrs({
    size: 'small',
    color: '#999',
})`
flex:1;
justifyContent: space-around;
margin: 30px;
padding: 10px;
`;


export const ViewTitle = styled.View`
flexGrow: 2;
padding: 5px 0;
flexShrink: 1;
`;

export const TouchableOpacityStyled = styled(TouchableOpacity)`
flexDirection: row;
flexGrow: 1;
alignItems: center;
padding: 10px 0;
`;

export const StyledText = styled.Text`
alignItems: center;
`

export const ViewIcon = styled(TouchableOpacity)`
alignItems: center;
padding: 10px 0;
`;

export const IconStyled = styled(Icon)`
font-size: 25;
color: #2196f3;
justifyContent: center;
`;

export const IconBookmarkStyled = styled(Icon).attrs({
    size: 25,
    name: "bookmark"

})`
color: ${props => props.bookmarked === true ? '#2196f3' : '#00000042'};
padding: 5px 10px;
`
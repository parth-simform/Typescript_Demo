import {ImageSourcePropType, ImageStyle, ViewStyle} from 'react-native';

export type DefaultProps = {
  children?: React.ReactNode;
  BackgroundStyle?: ViewStyle;
  imageURL?: ImageSourcePropType;
  imageStyle?: ImageStyle;
};

// With Omit in type we can remove key
export type WithoutImgProps = Omit<DefaultProps, 'imageURL' | 'imageStyle'>;

import React from 'react';
import DefaultMode from './DefaultMode';
import type {DefaultProps, WithoutImgProps} from './type';
import WithImage from './WithImage';

//conditional types
type variant =
  | ({
      variant?: 'default';
    } & WithoutImgProps)
  | ({
      variant: 'withImage';
    } & DefaultProps);

const BackGroundMode = (props: variant) => {
  return props?.variant === 'default' ? (
    <DefaultMode {...props} />
  ) : (
    <WithImage {...props} />
  );
};

export default BackGroundMode;

import React from 'react';
import { AutoLayout } from '@zesty-io/react-autolayout';
import Example from 'components/Example';
import { Typography, Box, Tabs, Tab, Divider } from '@mui/material';
import PropTypes from 'prop-types';

export default function Homepage({ content }) {
  return (
    <>
      <Box sx={{ mt: 4 }}>
        <Example />
      </Box>
      {/* <Divider/>
            <ZestyTutorial contnet={content}></ZestyTutorial> */}
    </>
  );
}

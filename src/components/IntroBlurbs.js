import React from 'react';
import { Grid } from 'semantic-ui-react';
import PreviewCompatibleImage from './PreviewCompatibleImage';

function IntroBlurbs({ introBlurbs }) {
  return (
    <Grid container stackable verticalAlign="middle">
      {introBlurbs.map((blurb, index) => (
        <Grid.Row
          key={index}
          reversed={index % 2 === 0 ? 'computer tablet' : null}
        >
          <Grid.Column floated={index % 2 === 0 ? 'right' : null} width={6}>
            <PreviewCompatibleImage imageInfo={blurb} />
          </Grid.Column>
          <Grid.Column width={8}>
            <p style={{ fontSize: '1.33em' }}>{blurb.text}</p>
          </Grid.Column>
        </Grid.Row>
      ))}
    </Grid>
  );
}
export default IntroBlurbs;

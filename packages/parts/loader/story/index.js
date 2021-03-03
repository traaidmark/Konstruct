// PART [ LOADER > STORY ] #####################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React from 'react';
import dedent from 'ts-dedent';
import { Source } from '@storybook/addon-docs/blocks';

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import mdx from './doc.mdx';

import props from '../test/props';

import Section from '../../../buckets/section/src';
import Grid from '../../../buckets/grid/src';

import Loader from '../src/';

import '../src/stylesheet.css';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default {
  title: 'Parts/Loader',
  parameters: {
    docs: {
      page: mdx,
    },
  },
  component: Loader,
};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. STORIES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.1. REACT VERSION ..........................................................

export const inReact = (args) => (
  <>
    <Section>
      <Loader { ...args } />
    </Section>
    <Section 
      headerTitle="Usage Information"
    >
      <Source
        code={dedent`
        <Loader text="Loading stuff.." />
        `}
      />
    </Section>
  </>
);

inReact.args = props;

// 3.1. END ....................................................................

// 3.2. VARIATIONS .............................................................

export const Variations = (args) => (
  <>
    <Section noLeft noRight noTop>
      <Grid>
        <aside>
          <h5>Inline</h5>
          <Loader { ...args } className="p-loader--inline" />
          <Source
            code={dedent`
            <Loader className="p-loader--inline" />
            `}
          />
        </aside>
      </Grid>
    </Section>
    <Section noLeft noRight noTop>
      <Grid>
        <aside>
          <h5>small</h5>
          <Loader { ...args } className="p-loader--small" />
          <Source
            code={dedent`
            <Loader className="p-loader--small" />
            `}
          />
        </aside>
        <aside>
          <h5>large</h5>
          <Loader { ...args } className="p-loader--large" />
          <Source
            code={dedent`
            <Loader className="p-loader--large" />
            `}
          />
        </aside>
      </Grid>
    </Section>
    <Section noLeft noRight noTop>
      <h3>Horizontal Orientation</h3>
      <Grid>
        <aside>
          <h5><code>part-sticker--left</code></h5>
          <div className="p-sticker p-sticker--left">
            <small>Sticker Label</small>
            <div className="p-data">
              <i>USD</i>
              <strong>300.00</strong>
            </div>
          </div>
          <Source
            code={dedent`
            <div className="p-sticker p-sticker--left">
              <small>Sticker Label</small>
              <div className="p-data">
                <i>USD</i>
                <strong>300.00</strong>
              </div>
            </div>
            `}
          />
        </aside>
        <aside>
          <h5><code>part-sticker--center</code></h5>
          <div className="p-sticker p-sticker--center">
            <small>Sticker Label</small>
            <div className="p-data">
              <i>USD</i>
              <strong>300.00</strong>
            </div>
          </div>
          <Source
            code={dedent`
            <div className="p-sticker p-data--center">
              <small>Sticker Label</small>
              <div className="p-data">
                <i>USD</i>
                <strong>300.00</strong>
              </div>
            </div>
            `}
          />
        </aside>
        <aside>
          <h5><code>part-sticker--right</code></h5>
          <div className="p-sticker p-sticker--right">
            <small>Sticker Label</small>
            <div className="p-data">
              <i>USD</i>
              <strong>300.00</strong>
            </div>
          </div>
          <Source
            code={dedent`
            <div className="p-sticker p-data--right">
              <small>Sticker Label</small>
              <div className="p-data">
                <i>USD</i>
                <strong>300.00</strong>
              </div>
            </div>
            `}
          />
        </aside>
      </Grid>
    </Section>
  </>
);

Variations.args = props;

// 3.2. END ....................................................................

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################

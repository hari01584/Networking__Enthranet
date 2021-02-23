/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

'use strict';
import Colors from './Colors';
import type {Node} from 'react';
import {Text, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';

const Header = (): Node => (
  <ImageBackground
    accessibilityRole={'image'}
    source={require('./logobanner.jpg')}
    style={styles.background}
    imageStyle={styles.logo}>
    <Text style={styles.text}>Enthranet Network Protocol Client</Text>
    <Text style={styles.sub}>Made By Agent_Orange#9852(Discord IGN)</Text>
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    paddingBottom: 40,
    paddingTop: 40,
    paddingHorizontal: 32,
    backgroundColor: Colors.darg,
  },
  logo: {
    opacity: 0.2,
    overflow: 'visible',
    resizeMode: 'cover',
    /*
     * These negative margins allow the image to be offset similarly across screen sizes and component sizes.
     *
     * The source logo.png image is 512x512px, so as such, these margins attempt to be relative to the
     * source image's size.
     */
    marginLeft: -128,
    marginBottom: -192,
  },
  text: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    color: Colors.black,
  },
  sub: {
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
    color: Colors.black,
  },
});

export default Header;

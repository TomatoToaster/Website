import React, { Component, Fragment } from 'react';
import { Label, Icon, Image } from 'semantic-ui-react';

const ICON_SIZE = 'big';

class Contact extends Component {
  render() {
    return (
      <Fragment>
        <h2>Contact Info</h2>
        <Label as='a'>
          <Image spaced='right' src='/TomatoToaster.ico' />
          Amal Nazeem
        </Label>
        <Label as='a' href='mailto:amalnazeem@gmail.com'>
          <Icon name='mail' size={ICON_SIZE} />
          amalnazeem@gmail.com
        </Label>
        <Label as='a' href='https://github.com/TomatoToaster' target='_blank'>
          <Icon name='github alternate' size={ICON_SIZE} />
          TomatoToaster
        </Label>
        <Label as='a' href='/Resume.pdf' target='_blank'>
          <Icon name='file alternate' size={ICON_SIZE} />
          Resume
        </Label>
      </Fragment>
    );
  }
}

export default Contact;
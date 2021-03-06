import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'
import {
  Card,
  FloatingButton,
  Form,
  PhoneInput,
  ReadMore,
  SimpleLayout,
  Text,
  TextInput,
  ThemeProvider,
} from '../src'
import Button from '../src/Button'
import Icon, { Icons } from '../src/Icon'
import Input from '../src/Input'
import List from '../src/List'
import ListItem from '../src/ListItem'
import ResourceProvider from '../src/ResourceProvider'
import ButtonStory from './ButtonStory'
import ChatStory from './ChatStory'
import CheckboxStory from './CheckboxStory'
import CollapsibleStory from './CollapsibleStory'
import ConfirmStory from './ConfirmStory'
import createViewportDecorator from './createViewportDecorator'
import DropdownStory from './DropdownStory'
import EditableTextStory from './EditableTextStory'
import FilterStory from './FilterStory'
import FormStory from './FormStory'
import HorizontalView from './HorizontalView'
import PillStory from './PillStory'
import ProfileImageStackStory from './ProfileImageStackStory'
import RadioButtonStory from './RadioButtonStory'
import SearchableDropdownStory from './SearchableDropdownStory'
import SimpleLayoutStory from './SimpleLayoutStory'
import TypeaheadStory from './TypeaheadStory'

storiesOf('Containers', module)
  .addDecorator(createViewportDecorator())
  .add('Collapsible', CollapsibleStory)
  .add('Filters', () => <FilterStory />)
  .add('Chat with ExpandingTextarea', () => <ChatStory />)

storiesOf('Information', module)
  .addDecorator(createViewportDecorator())
  .add('Pill', () => <PillStory />)

storiesOf('ProfleImage', module)
  .addDecorator(createViewportDecorator())
  .add('Profile Image Stack / Profile Image List ', () => (
    <ProfileImageStackStory />
  ))

storiesOf('Animations', module)
  .addDecorator(createViewportDecorator())
  .add('HorizontalView', () => <HorizontalView />)
  .add('SimpleLayout', () => <SimpleLayoutStory />)

storiesOf('Forms', module)
  .addDecorator(createViewportDecorator())
  .add('Full form', () => <FormStory />)
  .add('Confirm', () => <ConfirmStory />)
  .add('RadioButton', () => <RadioButtonStory />)
  .add('Checkbox', () => <CheckboxStory />)
  .add('PhoneInput', () => {
    return (
      <ThemeProvider>
        <PhoneInput
          placeholder="hello, this is a placeholder"
          defaultValue="49017632"
          name="phone"
          id="phone"
        />
      </ThemeProvider>
    )
  })
  .add('Typeahead', () => <TypeaheadStory />)
  .add('Dropdown', () => <DropdownStory />)
  .add('SearchableDropdown', () => <SearchableDropdownStory />)
  .add('Button', () => <ButtonStory />)

storiesOf('Button', module)
  .addDecorator(createViewportDecorator())
  .add('with text', () => (
    <ThemeProvider>
      <Button>Hello</Button>
    </ThemeProvider>
  ))
storiesOf('FloatingButton', module)
  .addDecorator(createViewportDecorator())
  .add('with text', () => (
    <ThemeProvider>
      <Form onSubmit={_ => _}>
        <FloatingButton type="submit" onClick={action('clicked')}>
          <Text weight="semi-bold" size="s" color="white">
            Hello Button
          </Text>
        </FloatingButton>
        <TextInput
          name="email"
          type="email"
          placeholder="Your email"
          required
        />
      </Form>
    </ThemeProvider>
  ))
  .add('disabled', () => (
    <ThemeProvider>
      <Form onSubmit={_ => _}>
        <FloatingButton disabled type="submit" onClick={action('clicked')}>
          <Text weight="semi-bold" size="s" color="white">
            Hello Button
          </Text>
        </FloatingButton>
        <TextInput
          name="email"
          type="email"
          placeholder="Your email"
          required
        />
      </Form>
    </ThemeProvider>
  ))
  .add('in progress', () => (
    <ThemeProvider>
      <SimpleLayout>
        <Form onSubmit={_ => _}>
          {new Array(50).fill(1).map(() => (
            <Text
              key={Math.random()}
              align="center"
              weight="semi-bold"
              size="xxl"
            >
              Scroll Down!
            </Text>
          ))}
          <FloatingButton inProgress type="submit" onClick={action('clicked')}>
            <Text weight="semi-bold" size="s" color="white">
              Hello Button
            </Text>
          </FloatingButton>
        </Form>
      </SimpleLayout>
    </ThemeProvider>
  ))

storiesOf('Icons', module)
  .addDecorator(createViewportDecorator())
  .add('List', () => (
    <ThemeProvider>
      <ResourceProvider>
        <List>
          {Icons.map(icon => (
            <ListItem key={icon} direction="row">
              <Icon size="m" name={icon} />
              <Input
                name="x[]"
                onFocus={e => e.target.select()}
                type="text"
                value={icon}
                readOnly
                style={{ cursor: 'pointer', outline: 'none', flex: 1 }}
              />
            </ListItem>
          ))}
        </List>
      </ResourceProvider>
    </ThemeProvider>
  ))

storiesOf('Text', module)
  .addDecorator(createViewportDecorator())
  .add('EditableText', () => <EditableTextStory />)

storiesOf('ReadMore', module)
  .addDecorator(createViewportDecorator())
  .add('read more...', () => {
    return (
      <ThemeProvider>
        <SimpleLayout>
          <Card>
            <ListItem>
              <ReadMore>
                <Text>Testing a short text...</Text>
              </ReadMore>
            </ListItem>
            <ListItem>
              <ReadMore cropAtHeight={10}>
                <Text>Testing a short text with a cropAtHeight 10px!...</Text>
              </ReadMore>
            </ListItem>
            <ListItem>
              <ReadMore cropAtHeight="80vw">
                <Text>
                  Testing a longer text with a cropAtHeight 80vw! Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Maecenas
                  dignissim sem in elit mollis consequat. Suspendisse potenti.
                  Maecenas a velit vel dolor mollis viverra. Praesent ex diam,
                  ultricies ac ultricies ut, efficitur sit amet leo. Vivamus ex
                  ante, dapibus a elementum vel, ultrices in erat. Vestibulum
                  eget ante turpis. Donec dapibus, purus vel euismod egestas,
                  arcu ipsum.
                </Text>
              </ReadMore>
            </ListItem>
            <ListItem>
              <ReadMore>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas dignissim sem in elit mollis consequat. Suspendisse
                  potenti. Maecenas a velit vel dolor mollis viverra. Praesent
                  ex diam, ultricies ac ultricies ut, efficitur sit amet leo.
                  Vivamus ex ante, dapibus a elementum vel, ultrices in erat.
                  Vestibulum eget ante turpis. Donec dapibus, purus vel euismod
                  egestas, arcu ipsum.
                </Text>
              </ReadMore>
            </ListItem>
            <ListItem>
              <ReadMore>
                <Text weight="semi-bold">
                  Works also with content blocks...
                </Text>
                <img
                  src="https://picsum.photos/200/300"
                  style={{ width: '100%' }}
                />
              </ReadMore>
            </ListItem>
            <ListItem>
              <ReadMore>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas dignissim sem in elit mollis consequat. Suspendisse
                  potenti. Maecenas a velit vel dolor mollis viverra. Praesent
                  ex diam, ultricies ac ultricies ut, efficitur sit amet leo.
                  Vivamus ex ante, dapibus a elementum vel, ultrices in erat.
                  Vestibulum eget ante turpis. Donec dapibus, purus vel euismod
                  egestas, arcu ipsum gravida nunc, sed porta justo ipsum in
                  eros. Maecenas tristique sollicitudin interdum. Duis arcu
                  justo, pretium quis nunc nec, lacinia vehicula sapien. Aenean
                  bibendum volutpat magna, sit amet ultricies dolor viverra eu.
                  Proin massa ex, interdum id porta sed, placerat ac dui.
                  Aliquam erat volutpat. Quisque at facilisis erat. Mauris
                  sodales odio felis, sed malesuada neque faucibus et. Vivamus
                  convallis tellus in nunc feugiat egestas. Cras mattis tempus
                  felis sed tristique. Nullam purus nisi, tristique eu tempus
                  quis, tristique eget enim. Nulla tincidunt nulla sit amet nunc
                  lacinia, maximus posuere quam pharetra. Ut sit amet posuere
                  metus. Vestibulum vehicula nulla non nibh dictum bibendum.
                  Phasellus arcu nibh, cursus sit amet interdum sit amet,
                  maximus vel massa. Aliquam porta urna non orci porttitor
                  varius. Donec et scelerisque odio. Sed quis condimentum nisl,
                  id facilisis urna. Curabitur id erat a mauris placerat
                  sodales. Cras in elementum lacus. Morbi eget varius ex. Nulla
                  commodo sem odio, vel tempus nunc imperdiet quis. Maecenas eu
                  pharetra quam, id fermentum turpis. Curabitur consectetur
                  commodo vestibulum. Nunc imperdiet dolor sit amet lacinia
                  varius. Praesent consequat nisl elit, et euismod nisi posuere
                  vel. Maecenas ullamcorper, ante et consequat convallis, dolor
                  neque elementum ante, consectetur egestas sapien eros
                  elementum arcu. Nulla metus erat, congue eget nibh sed,
                  efficitur venenatis velit. Ut nec sagittis sapien. Fusce eu
                  ligula sed metus tempus vulputate ac vel lacus. Aenean ut
                  libero sem.
                </Text>
              </ReadMore>
            </ListItem>
          </Card>
        </SimpleLayout>
      </ThemeProvider>
    )
  })

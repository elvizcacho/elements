import React, { Component } from 'react'
import {
  Button,
  Card,
  Form,
  List,
  ListItem,
  RadioButton,
  RadioButtonSet,
  ResourceProvider,
  SimpleLayout,
  SquareIconButton,
  Text,
  TextInput,
  ThemeProvider,
  TitleBar,
  View,
} from '../src'

export default class RadioButtonStory extends Component {
  render() {
    return (
      <ResourceProvider>
        <ThemeProvider theme={{ primary: '#bada55' }}>
          <View direction="column" flex="flex">
            <TitleBar>
              <SquareIconButton icon="login-key" iconColor="white" />
              <Text weight="semi-bold" color="white">
                Create new account
              </Text>
            </TitleBar>
            <SimpleLayout>
              <Form onSubmit={() => {}}>
                <Card>
                  <List>
                    <TextInput
                      label="First- and last name"
                      name="name"
                      placeholder="What's your first name?"
                      required
                    />
                    <ListItem>
                      <RadioButtonSet
                        name="eat"
                        label="What do you like to eat?"
                      >
                        <RadioButton value="honey">Honey</RadioButton>
                        <RadioButton value="milk">Milk</RadioButton>
                      </RadioButtonSet>
                    </ListItem>
                    <ListItem>
                      <RadioButtonSet
                        defaultValue="tee"
                        direction="horizontal"
                        label="What do you like to drink?"
                        name="drink"
                        required
                      >
                        <RadioButton value="coffee">Coffee</RadioButton>
                        <RadioButton value="tee">Tee</RadioButton>
                        <RadioButton value="beer">Beer</RadioButton>
                      </RadioButtonSet>
                    </ListItem>
                    <ListItem>
                      <RadioButtonSet name="Ok">
                        <RadioButton value="rot" id="rot">
                          Blue
                        </RadioButton>
                        <RadioButton value="blau" id="blau">
                          Red
                        </RadioButton>
                      </RadioButtonSet>
                    </ListItem>
                    <ListItem>
                      <RadioButtonSet
                        name="Ok"
                        direction="vertical"
                        label="Which statement is your favourite?"
                      >
                        <RadioButton value="shakespeare">
                          <Text>To be or not to be</Text>
                          <Text size="xs">(Shakespeare)</Text>
                        </RadioButton>
                        <RadioButton value="sinatra">
                          <Text>Doo be doo be doo</Text>
                          <Text size="xs">(Sinatra)</Text>
                        </RadioButton>
                      </RadioButtonSet>
                    </ListItem>
                    <ListItem alignH="center">
                      <Button type="submit">Create my account</Button>
                    </ListItem>
                  </List>
                </Card>
              </Form>
            </SimpleLayout>
          </View>
        </ThemeProvider>
      </ResourceProvider>
    )
  }
}

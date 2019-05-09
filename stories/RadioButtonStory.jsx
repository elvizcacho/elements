import React from 'react'
import ResourceProvider from '../src/behaviour/ResourceProvider'
import ThemeProvider from '../src/behaviour/ThemeProvider'
import View from '../src/atoms/View'
import Text from '../src/atoms/Text'
import List from '../src/molecules/List/List'
import ListItem from '../src/molecules/List/ListItem'
import TitleBar from '../src/organisms/TitleBar'
import SquareIconButton from '../src/molecules/SquareIconButton'
import SimpleLayout from '../src/layouts/SimpleLayout'
import Form from '../src/molecules/Form/Form'
import Card from '../src/molecules/Card/Card'
import TextInput from '../src/molecules/TextInput'
import RadioButtonSet from '../src/molecules/RadioButtonSet'
import RadioButton from '../src/molecules/RadioButton'
import Button from '../src/molecules/Button'

export default class FormStory extends React.Component {
  render() {
    return (
      <ResourceProvider>
        <ThemeProvider theme={{ primary: '#bada55' }}>
          <View direction="column" flex="flex">
            <TitleBar>
              <SquareIconButton icon="login-key" iconColor="white" />
              <Text strong color="white">
                Create new account
              </Text>
            </TitleBar>
            <SimpleLayout>
              <Form>
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
                        <RadioButton value="coffe">Coffe</RadioButton>
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

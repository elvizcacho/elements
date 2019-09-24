import React, { useState } from 'react'
import Button from '../src/Button'
import FormCheckbox from '../src/FormCheckbox'
import Inset from '../src/Inset'
import ResourceProvider from '../src/ResourceProvider'
import Spacer from '../src/Spacer'
import Text from '../src/Text'

export default function CheckboxStory() {
  const [checked, setChecked] = useState(false)
  const [blocked, setBlocked] = useState(false)

  return (
    <ResourceProvider>
      <>
        <Inset horizontal vertical>
          Controlled:
          <FormCheckbox
            name="abc"
            label={
              <>
                Toggle me!
                {blocked && (
                  <Text block={false} italic>
                    &nbsp;(blocked)
                  </Text>
                )}
              </>
            }
            checked={checked}
            onChange={() => !blocked && setChecked(!checked)}
          />
          <Inset direction="row" vertical horizontal>
            <Button onClick={() => setChecked(!checked)}>
              Toggle from outside
            </Button>
            <Spacer width="20" />
            <Button onClick={() => setBlocked(!blocked)}>
              {blocked ? 'Unblock' : 'Block'} direct toggle
            </Button>
          </Inset>
          Uncontrolled:
          <FormCheckbox name="123" />
        </Inset>
        I like to live in a Form:
        <FormCheckbox name="asd" label="Toggle me!" />
      </>
    </ResourceProvider>
  )
}

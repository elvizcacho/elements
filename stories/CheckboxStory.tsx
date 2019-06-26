import React, { useState } from 'react'
import ResourceProvider from '../src/behaviour/ResourceProvider'
import Inset from '../src/atoms/Inset'
import Checkbox from '../src/molecules/Checkbox'
import { Text } from '../src'
import Button from '../src/molecules/Button'
import Spacer from '../src/atoms/Spacer'

export default function CheckboxStory() {
  const [checked, setChecked] = useState(false)
  const [blocked, setBlocked] = useState(false)

  return (
    <ResourceProvider>
      <Inset horizontal vertical>
        Controlled:
        <Checkbox
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
        <Inset direction="row" vertical={10} horizontal={0}>
          <Button onClick={() => setChecked(!checked)}>
            Toggle from outside
          </Button>
          <Spacer width="20" />
          <Button onClick={() => setBlocked(!blocked)}>
            {blocked ? 'Unblock' : 'Block'} direct toggle
          </Button>
        </Inset>
        Uncontrolled:
        <Checkbox name="abcde" label="Toggle me!" />
      </Inset>
    </ResourceProvider>
  )
}

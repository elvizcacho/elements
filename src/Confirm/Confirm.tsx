import * as React from 'react'
import * as ReactDOM from 'react-dom'
import ConfirmDialog, { IConfirmDialogProps } from '../ConfirmDialog'
import ThemeProvider from '../ThemeProvider'

const confirm = (props: Omit<IConfirmDialogProps, 'onCancel' | 'onSuccess'>) =>
  new Promise(resolve => {
    const div = document.createElement('div')
    document.body.appendChild(div)

    const resolveAndClean = (response: boolean) => {
      ReactDOM.unmountComponentAtNode(div)
      document.body.removeChild(div)
      resolve(response)
    }

    ReactDOM.render(
      <ThemeProvider>
        <ConfirmDialog
          {...props}
          onCancel={() => resolveAndClean(false)}
          onSuccess={() => resolveAndClean(true)}
        />
      </ThemeProvider>,
      div,
    )
  })

export default confirm

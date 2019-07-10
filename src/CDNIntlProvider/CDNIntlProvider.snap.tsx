// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[
  `Check the CDNIntlProvider component should fetch the corresponding locales 1`
] = `
Array [
  <span
    data-state="{\\"test\\":\\"Hallo Welt\\"}"
    id="__ELEMENTS_INTL__"
    style={
      Object {
        "display": "none",
      }
    }
  />,
  <span>
    Hallo Welt
  </span>,
]
`

exports[
  `Check the CDNIntlProvider component should fetch the corresponding locales 2`
] = `
Array [
  <span
    data-state="{\\"test\\":\\"Hello World\\"}"
    id="__ELEMENTS_INTL__"
    style={
      Object {
        "display": "none",
      }
    }
  />,
  <span>
    Hello World
  </span>,
]
`

exports[
  `Check the CDNIntlProvider component should pick up if hyrdated 1`
] = `"<span id=\\"__ELEMENTS_INTL__\\" style=\\"display:none\\" data-state=\\"{&quot;test&quot;:&quot;Bonjour tout le monde et ala&quot;}\\"></span><span>Bonjour tout le monde et ala</span>"`

exports[
  `Check the CDNIntlProvider component should use the provided locale and do no fetch 1`
] = `
Array [
  <span
    data-state="{\\"test\\":\\"Bonjour tout le monde\\"}"
    id="__ELEMENTS_INTL__"
    style={
      Object {
        "display": "none",
      }
    }
  />,
  <span>
    Bonjour tout le monde
  </span>,
]
`

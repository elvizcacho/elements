const insertCSS = (cssStyles: string) => {
  if (typeof window !== 'undefined') {
    const style = document.createElement('style')
    style.type = 'text/css'
    style.textContent = cssStyles
    document.head.appendChild(style)
  }
}

export default insertCSS

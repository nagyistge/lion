marked.setOptions
  highlight: (code) ->
    hljs.highlightAuto(code).value

markdown = (text) ->
  marked(text).htmlSafe()

`export default markdown`

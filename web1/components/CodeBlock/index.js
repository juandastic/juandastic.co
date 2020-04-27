
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';

hljs.registerLanguage('javascript', javascript);

const CodeBlock = ({language, value, children}) => {
  const codeData = hljs.highlightAuto(value)
  const codeClass = `hljs ${codeData.language}`

  return (
  <pre>
    <code className={codeClass} dangerouslySetInnerHTML={{__html: codeData.value}}>
    </code>
  </pre>)
}

export default CodeBlock
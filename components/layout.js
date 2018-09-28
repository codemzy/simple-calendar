
import Link from 'next/link'
import Head from 'next/head'

export default ({ children, title = 'Simple Calendar' }) => (
  <div className="container pt-3">
    <Head>
      <title>{ title }</title>
      <link rel="shortcut icon" href="./static/favicon.ico" type="image/x-icon"/>
      <link rel="icon" href="./static/favicon.ico" type="image/x-icon"/>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
      <link rel="stylesheet" href="./static/style.css" />
    </Head>

    { children }
  
    <div className="text-center text-muted mt-5"><small>Made by <a href="https://github.com/codemzy/simple-calendar">codemzy</a></small></div>

  </div>
);
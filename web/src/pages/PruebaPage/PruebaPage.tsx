// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const PruebaPage = () => {
  return (
    <>
      <Metadata title="Prueba" description="Prueba page" />

      <h1>PruebaPage</h1>
      <p>
        Find me in <code>./web/src/pages/PruebaPage/PruebaPage.tsx</code>
      </p>
      {/*
          My default route is named `prueba`, link to me with:
          `<Link to={routes.prueba()}>Prueba</Link>`
      */}
    </>
  )
}

export default PruebaPage

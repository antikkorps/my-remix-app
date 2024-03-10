import type { LinksFunction } from "@remix-run/node"

import { Outlet, Links } from "@remix-run/react"

import stylesUrl from "~/styles/jokes.css"

export const links: LinksFunction = () => [{ rel: "stylesheet", href: stylesUrl }]

export default function JokesRoute() {
  return (
    <>
      <Links />
      <div>
        <h1>J🤪KES</h1>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  )
}

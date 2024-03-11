import type { ActionFunctionArgs } from "@remix-run/node"
import { redirect } from "@remix-run/node"

import { logout } from "~/utils/sessions.server"

export const action = async ({ request }: ActionFunctionArgs) => logout(request)

export const loader = async () => redirect("/")

import { existsSync, mkdirSync } from 'node:fs'
import { betterAuth } from 'better-auth'
import Database from 'better-sqlite3'
import { admin } from 'better-auth/plugins'

let _auth: ReturnType<typeof betterAuth>
export function serverAuth() {
  if (!_auth) {
    const folderName = '.data'
    if (!existsSync(folderName)) {
      mkdirSync(folderName)
    }
    const _db = new Database(`./${folderName}/database.sqlite`)
    _db.pragma('journal_mode = WAL')
    _auth = betterAuth({
      database: _db,
      baseURL: getBaseURL(),
      emailAndPassword: {
        enabled: true,
      },
      account: {
        accountLinking: {
          enabled: true,
        },
      },
      plugins: [admin()],
    })
  }
  return _auth
}

function getBaseURL() {
  let baseURL = process.env.BETTER_AUTH_URL
  if (!baseURL) {
    try {
      baseURL = getRequestURL(useEvent()).origin
    }
    catch { /* empty */ }
  }
  return baseURL
}

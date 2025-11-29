import { AuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'

// Initialize providers
const providers: AuthOptions['providers'] = []

// Add GoogleProvider only if environment variables are present
if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
  providers.push(
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  )
} else if (process.env.NODE_ENV === 'production') {
  throw new Error(
    'Google OAuth is required in production. Please set GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET environment variables.'
  )
}

// Add Credentials Provider with real authentication flow
providers.push(
  CredentialsProvider({
    name: 'Email & Password',
    credentials: {
      email: { label: 'Email', type: 'email' },
      password: { label: 'Password', type: 'password' }
    },
    async authorize(credentials) {
      // Guard against missing credentials
      if (!credentials?.email || !credentials?.password) {
        return null
      }

      try {
        // TODO: Replace with real authentication flow
        // - Database lookup: query user from database with email
        // - Validate password: compare password hash with bcrypt or similar
        // - Return user object if valid, null otherwise
        // Example:
        // const user = await db.user.findUnique({ where: { email: credentials.email } })
        // if (!user) return null
        // const passwordValid = await bcrypt.compare(credentials.password, user.passwordHash)
        // if (!passwordValid) return null
        // return { id: user.id, email: user.email, name: user.name }

        // Placeholder implementation - should be replaced with real auth logic
        return null
      } catch {
        // Return null on any error instead of throwing
        return null
      }
    }
  })
)

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers,
  pages: {
    signIn: '/auth/signin'
  }
}

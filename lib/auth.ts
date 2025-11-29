import { AuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ''
    }),
    CredentialsProvider({
      name: 'Email & Password',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        //TODO: Remove this example---
        const dummy = {
          id: '1',
          email: 'jsm@example.com',
          password: '1712@Tram'
        }
        if (dummy.email === credentials?.email && dummy.password === credentials.password) {
          return {
            id: dummy.id,
            name: 'John Smith',
            email: 'jsm@example.com'
          }
        } else {
          throw new Error('Invalid credential')
        }
        //!---
      }
    })
  ]
}

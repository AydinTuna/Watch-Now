import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from "next-auth/providers/credentials"

export const options = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "username123"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "password123"
                }
            },
            async authorize(credentials) {
                const user = { id: 42, name: "John", password: "Doe" }

                if (credentials?.username === user.name && credentials?.password === user.password) {
                    return user
                } else return null
            }
        })
    ],
};

'use client'

import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/ui/card"
import { Input } from "@/ui/input"
import { Button } from "@/ui/button"
import { useForm } from "react-hook-form"
import { signIn } from "next-auth/react"
import { toast } from "@/ui/use-toast"
import Link from "next/link"

export function AuthForm() {

    const form = useForm()
  
    const handleSubmit = form.handleSubmit(async (data) => {
      try {
        await signIn('email', { email: data.email, redirect: false })
        
        toast({
          title: 'Magic Link Sent',
          description: 'Check your email for the magic link to login'
        })
      } catch (error) {
        toast({
          title: 'Error',
          description: 'An error occurred. Please try again.'
        })
      }
    })
  
    return <Card className="mx-auto max-w-sm space-y-4 my-auto">
    <CardHeader className="text-center space-y-2">
      <CardTitle className="text-3xl font-bold">Login</CardTitle>
      <CardDescription>Enter your email below to login to your account</CardDescription>
    </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
    
            <Input className="w-full" id="email" placeholder="Email" type="email" {...form.register('email')}/>
            {/* <Input className="w-full" id="password" placeholder="Password" type="password" {...form.register('password')}/> */}
            <Button className="w-full" type="submit">
            Sign In
            </Button>
    
        <Link className="text-sm w-full" href="#">
            Forgot your password?
        </Link>
        </CardContent>  
      </form>
    <CardFooter className="text-sm">
      Don't have an account?
      <Link className="underline" href="#">
        Create Account
      </Link>
    </CardFooter>
  </Card>
  }
  
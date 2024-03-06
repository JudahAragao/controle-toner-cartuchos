import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/ui/card"
import { Input } from "@/ui/input"
import { Button } from "@/ui/button"
import Link from "next/link"

export default function Home() {
  return <div className="min-h-screen flex">
    <Card className="mx-auto max-w-sm space-y-4 my-auto">
  <CardHeader className="text-center space-y-2">
    <CardTitle className="text-3xl font-bold">Login</CardTitle>
    <CardDescription>Enter your email below to login to your account</CardDescription>
  </CardHeader>
  <CardContent className="space-y-4">
    <Input className="w-full" id="email" placeholder="Email" type="email" />
    <Input className="w-full" id="password" placeholder="Password" type="password" />
    <Button className="w-full" type="submit">
      Sign In
    </Button>
    <Link className="text-sm w-full" href="#">
      Forgot your password?
    </Link>
  </CardContent>
  <CardFooter className="text-sm">
    Don't have an account?
    <Link className="underline" href="#">
      Create Account
    </Link>
  </CardFooter>
</Card>
  </div>
}

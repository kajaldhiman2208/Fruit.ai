import { Input } from "./components/ui/Input";
import { Button } from "./components/ui/Button.js"
import { CardDescription, Card, CardContent, CardFooter, CardHeader, CardTitle } from "./components/ui/Card";
import { Label } from "./components/ui/Label.js";
import { useNavigate } from 'react-router-dom';


export const description =
  "A simple login form with email and password. The submit button says 'Sign in'."

export function LoginForm() {
  const navigate = useNavigate();
  const handleSignIn = () => {
    navigate("/home");
  };
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" required />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleSignIn}>Sign in</Button>
      </CardFooter>
    </Card>
  )
}

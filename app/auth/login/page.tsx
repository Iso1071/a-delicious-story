import { login, signup } from './actions'

export default function LoginPage() {
  return (
    <form>
      <div className="flex flex-col items-center gap-4">
        <div className="w-80 flex justify-between">
          <label htmlFor="email">Email:</label>
          <input className="text-black" id="email" name="email" type="email" required />
        </div>
        <div className="w-80 flex justify-between">
          <label htmlFor="password">Password:</label>
          <input className="text-black" id="password" name="password" type="password" required />
        </div>
        <div className="w-80 flex justify-between">
          <button className="w-full border rounded py-1" formAction={login}>Log in</button>
        </div>
        <div className="w-80 flex justify-between">
          <button className="w-full border rounded py-1" formAction={signup}>Sign up</button>
        </div>
      </div>
    </form>
  )
}

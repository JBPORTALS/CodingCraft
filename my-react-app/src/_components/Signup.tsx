import Button from "./Button";
import Input from "./Input";

export default function Signup() {
  return (
    <div className="flex justify-center py-20">
      <form className="flex flex-col w-1/4 gap-5">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-extrabold">Create Account</h1>
          <p className="text-base text-neutral-600">to explore our shop</p>
        </div>
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <Button className="py-3">Continue with Credentials</Button>
      </form>
    </div>
  );
}

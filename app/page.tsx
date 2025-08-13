export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col space-y-6 h-screen bg-neutral-100">
      <h1 className="text-3xl font-bold text-brand">Hello</h1>
      <div className="flex space-x-4">
        <a href="/sign-in" className="hover:underline">Sign In</a>
        <a href="/sign-up" className="hover:underline">Sign Up</a>
      </div>
    </div>
  );
}

import LoginForm from "./LoginForm";
export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-emerald-50 dark:bg-stone-600 py-8">
      <div className="max-w-[1368px] flex-1">
        <div className="container grid items-center gap-8 lg:grid-cols-2">
          <div>
            <div>
              <h1 className="mb-3 text-4xl font-bold text-emerald-600 dark:text-stone-50 lg:text-[40px]">
                FakeStore
              </h1>
              <p className="max-w-[452px] text-emerald-500 dark:text-stone-100 lg:text-lg">
                Find the product suitable for you.
              </p>
            </div>
          </div>
          <div className="bg-white dark:bg-stone-800 rounded-lg shadow-md p-6">
            <LoginForm />
          </div>
        </div>
      </div>
    </main>
  );
}

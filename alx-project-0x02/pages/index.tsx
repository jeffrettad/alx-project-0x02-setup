import Head from 'next/head'

const Home = () => {
  return (
    <>
      <Head>
        <title>Welcome</title>
      </Head>
      <main className="flex h-screen items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to ALX Project 2</h1>
      </main>
    </>
  )
}

export default Home

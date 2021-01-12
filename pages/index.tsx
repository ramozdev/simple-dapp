import Head from 'next/head'
import Layout from '../components/Layout'
import Nav from '../components/Nav'
// import Main from '../components/Main'
import { useEffect, useState } from 'react'
// import Footer from '../components/Footer'
import Web3 from 'web3'

export default function index() {
  const [accounts, setAccounts] = useState([''])

  async function startWeb3() {
    const web3 = new Web3('http://localhost:9545')
    const account = await web3.eth.getAccounts()
    setAccounts(account)
  }

  useEffect(() => {
    startWeb3()
  }, [])

  return (
    <Layout>
      <Head>
        <title>Simple Dapp</title>
      </Head>
      <Nav />
      {accounts.map((account) => {
        return <p key={account}>{account}</p>
      })}
      {/* <Main /> */}
      {/* <Footer /> */}
    </Layout>
  )
}

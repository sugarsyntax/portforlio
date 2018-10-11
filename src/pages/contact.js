import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const ForthPage = () => (
  <Layout>
    <h1 style={{ width: '100%' }}>
      <span style={{ color:"#fb9999" }}>J</span>
      <span style={{ color:"#fc9ca7" }}>a</span>
      <span style={{ color:"#fc9fb4" }}>c</span>
      <span style={{ color:"#fda2c2" }}>q</span>
      <span style={{ color:"#b3b177" }}>u</span>
      <span style={{ color:"#68bf2b" }}>e</span>
      <span style={{ color:"#59d11d" }}>l</span>
      <span style={{ color:"#49e40f" }}>l</span>
      <span style={{ color:"#3af601" }}>i</span>
      <span style={{ color:"#72eb74" }}>n</span>
      <span style={{ color:"#aadfe7" }}>e</span>
    </h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ForthPage
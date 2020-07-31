import Head from 'next/head'
import Link from 'next/link'
import {
  HeaderMenuItem,
} from "carbon-components-react/lib/components/UIShell";
import { NavItem } from '@carbon/ibm-security/lib/components/Nav';


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ul>
          <li>
            <Link href="/posts/first-post"><a>Next Link Component</a></Link>
          </li>

          <li>
             <NavItem element={Link} href="/posts/first-post" id="testLink" className="test">Test</NavItem> 
          </li>

          <li>
            <HeaderMenuItem element={Link}  href="/posts/first-post"><a href="/posts/first-post">Next Link using Carbon HeaderMenuItem</a></HeaderMenuItem>
          </li>
        </ul>
      </main>
    </div>
  )
}

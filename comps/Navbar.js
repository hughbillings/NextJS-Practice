import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/NAME.png" alt="site logo" width={180} height={80} />
      </div>
      <Link href="/"><a>About me</a></Link>
      <Link href="/experience/"><a>Experience</a></Link>
    </nav>
);
}
 
export default Navbar;
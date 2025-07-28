import Image from 'next/image'
import Link from 'next/link'

const Logo: React.FC = () => {
  return (
    <Link href='/'>
      <div>
        <Image
          src={'/logo.png'}
          alt='optima-logo'
          width={120}
          height={24}
        />
      </div>
    </Link>
  )
}

export default Logo

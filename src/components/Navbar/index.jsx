import React from 'react'

const Navbar = ({data}) => {
  return (
    <div>Navbar</div>
  )
}

export default Navbar;

export async function getServerSideProps() {
  // örnek fetch
  const res = await fetch(`https://.../data`)
  const data = await res.json()

  // örnek
  return { props: { data } }
}

// getStaticProps yapısı da incelenecek 
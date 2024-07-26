import React from 'react'


type Props = {
    children: React.ReactNode;
}

const AuthLayout = ({
    children
}: Props) => {
  return (
    <div className='min-h-screen flex items-center justify-center flex-col'>
      { children }
    </div>
  )
}

export default AuthLayout

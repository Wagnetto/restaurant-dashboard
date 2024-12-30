import { HandPlatter } from 'lucide-react'
import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div className='grid min-h-screen grid-cols-2 antialiased'>
      <div className='flex h-full flex-col justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground'>
        <div className='flex items-center gap-3 text-lg font-medium text-foreground'>
          <HandPlatter className='h-5 w-5' />

          {/* <Pizza className='h5 w5' /> */}
          <span className='font-semibold'>Restaurant Dashboard</span>
        </div>
        <footer className='text-sm'>
          Painel do Parceiro &copy; Restaurant Dashboard -{' '}
          {new Date().getFullYear()}
        </footer>
      </div>
      <div className='relative flex flex-col items-center justify-center'>
        <Outlet />
      </div>
    </div>
  )
}

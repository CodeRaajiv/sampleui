import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import mobile from '/src/assets/download.png'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className='Heading'>Login</h1>
        <p className='Heading_subheading'>
          Enjoy Cinefiled and Effertless Banking,Where Ever you are,<br />
          When ever you it,all
        </p>
        <form action="">
          <div className='form'>
            <table>
              <tr>
                <td>
                  <button className='button_one'>
                    <p>
                      Sign in with Google
                    </p>
                  </button>
                </td>
              </tr>
              <tr className='button_two'>
                <td>
                  <h1>Email</h1>
                  <input type="text" placeholder='Entery your email' />
                </td>
              </tr>
              <tr className='button_three'>
                <td>
                  <h1>Password</h1>
                  <input type="text" placeholder='Type your Password' />
                </td>
              </tr>
              <tr className='button_four'>
                <td className='button_four-one'>
                  <input type='checkbox' />
                  <p>Rember me</p>
                </td>
                <td className='button_four_section2'>
                  <p>Forget Password</p>
                </td>
              </tr>
              <tr className='button_five'>
                <td>
                  <button>
                      <p>Login</p>
                  </button>
                </td>
              </tr>
            </table>
          </div>
          <div className='image'> 
             <img src={mobile} alt="Mobile-image" srcset=""/>
          </div>
        </form>
      </div>
    </>
  )
}
export default App

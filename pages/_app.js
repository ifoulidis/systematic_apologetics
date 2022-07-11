import '../styles/globals.css'
import {motion} from 'framer-motion'
import {useState} from 'react'

function MyApp({ Component, pageProps, router }) {
  const [isDark, setIsDark] = useState(false)
  return (
    <>
    <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
      pageInitial: {
        opacity: 0
      },
      pageAnimate: {
        opacity: 1,
      }
    }}>  
      <Component {...pageProps} />
      {/* <footer>
        <div>
          <p>&#169; 2022 Isaiah Foulidis</p>
        </div>
        <button className ='themebtn'
        onClick={() => {if (isDark === false){
          setIsDark(true);
        }
          else{
            setIsDark(false);
          }
        }}>Change Theme</button>
      </footer> */}
    </motion.div>  
    </>
  )
}

export default MyApp

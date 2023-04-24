import React from 'react'
const Success = ({data}) => {
  const value = data
  return (
    <div>
      <main className='pb-32 lg:px-10 gap-y-[300px] bg-no-repeat bg-contain md:bg-[url("./assets/bg-main-desktop.png")] bg-[url("./assets/bg-main-mobile.png")] w-full relative bg-top px-3  md:bg-left flex flex-col md:flex-row justify-between'>
    <section className='lg:w-[45%] flex flex-col lg:justify-center lg:items-center h-[50%] md:h-[80%] md:gap-5 md:mt-24 md:w-[60%]'>
      <div className='lg:w-[80%] md:w-[70%] md:relative md:ml-5 w-[80%]  absolute z-10 md:top-0 sm:top-[20%] top-[16%]'>
          <div className=' text-White font-medium text-[20px]'>
            <div className='md:w-[23%] absolute top-[10%]  left-[10%]'>
              <img src="../assets/card-logo.svg" className='object-cover w-full '/>
            </div>
                <p className=' font-medium lg:text-[20px] absolute top-[55%] left-[10%] md:text-sm text-[16px]'>{value.name}</p>
                <p className=' text-sm absolute top-[75%] bottom-[25%] left-[10%]'>{value.card}</p>
                <p className=' text-sm  absolute top-[75%] bottom-[25%] right-[10%]'>{value.month} /{value.year}</p>
          </div>
          <img src="../assets/bg-card-front.png" className='object-cover w-full'/>
      </div>
      <div className='lg:w-[80%] lg:ml-52 md:w-[70%] md:ml-20 md:relative w-[80%] absolute top-[4%] right-[4%] md:right-0'>
          <p className='absolute text-sm bottom-[58%] top-[43%]  right-[10%] text-White font-medium '>{value.cvc}</p>
          <img src= "../assets/bg-card-back.png" alt="card" className='object-cover w-full' />
      </div>
    </section >
    <section className=' md:mt-0 md:pr-10 px-6 py-10  mt-[80px] sm:mt-[200px] md:pt-[160px] bg-White lg:w-[40%] md:w-[40%] '>
        <div className='flex flex-col justify-center items-center gap-6'>
            <img src="../assets/icon-complete.svg" alt="response"/>
            <h1 className='uppercase text-Verydarkviolet text-center font-medium text-lg  tracking-[6px]'>thank you</h1>
            <p className='text-Darkgrayishviolet text-sm text-center'>we've added your card details</p>
            <button type="button" className='w-[60%] text-white bg-Verydarkviolet text-White p-2 rounded md:w-[70%] text-md'>Continue</button>
        </div>
    </section>
  </main>
    </div>
  // <section>
  //   <div className='md:bg-[url("./assets/bg-main-desktop.png")] bg-[url("./assets/bg-main-mobile.png")] absolute top-[0%] md:bottom-[0%] left-0 h-[280px] md:h-[120vh] bg-cover bg-no-repeat w-[100%] md:w-[300px]'></div>
  //   <div className='md:flex md:flex-row flex-col'>
  //   <section className='flex flex-col  md:gap-5 md:mt-24 md:flex-1 lg:flex-[0.70]'>
  //     <div className='lg:w-[80%] md:w-[70%] md:relative md:ml-5 w-[80%]  absolute z-10 md:top-0 sm:top-[30%] top-[25%] left-[4%]'>
  //         <div className=' text-White font-medium text-[20px]'>
  //           <div className='md:w-[23%] absolute top-[10%]  left-[10%]'>
  //             <img src="../assets/card-logo.svg" className='object-cover w-full '/>
  //           </div>
  //               <p className=' font-medium lg:text-[20px] absolute top-[55%] left-[10%] md:text-sm text-[16px]'>{value.name}</p>
  //               <p className=' text-sm absolute top-[75%] bottom-[25%] left-[10%]'>{value.card}</p>
  //               <p className=' text-sm  absolute top-[75%] bottom-[25%] right-[10%]'>{value.month} /{value.year}</p>
  //         </div>
  //         <img src="../assets/bg-card-front.png" className='object-contain w-full'/>
  //     </div>
  //     <div className='lg:w-[80%] lg:ml-52 md:w-[70%] md:ml-20 md:relative w-[80%] absolute top-[4%] right-[4%] md:right-0'>
  //         <p className='absolute text-sm bottom-[58%] top-[43%]  right-[10%] text-White font-medium '>{value.cvc}</p>
  //         <img src= "../assets/bg-card-back.png" alt="card" className='object-contain w-full' />
  //     </div>
  //   </section >
  //     <section className='md:mt-0 md:pr-10 px-6 py-10  mt-[400px] md:pt-[160px] bg-White justify-center items-center lg:w-[40%] md:w-[40%]flex flex-col md:flex-[0.50] lg:flex-1 '>
  //       <div className='flex flex-col justify-center items-center gap-6'>
  //          <img src="../assets/icon-complete.svg" alt="response"/>
  //          <h1 className='uppercase text-Verydarkviolet text-center font-medium text-lg  tracking-[6px]'>thank you</h1>
  //          <p className='text-Darkgrayishviolet text-sm text-center'>we've added your card details</p>
  //          <button type="button" className=' bg-Verydarkviolet text-White p-2 rounded text-md w-[70%] md:w-[50%]'>Continue</button>
  //       </div>
  //     </section>
     
  //   </div>
  // </section>
  )
}

export default Success
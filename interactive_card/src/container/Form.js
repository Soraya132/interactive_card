
import { useFormik } from 'formik'
import * as Yup from "yup"
import "../App.css"
import cardBack from "../assets/bg-card-back.png"
import cardFront from "../assets/bg-card-front.png"
import { useNavigate } from 'react-router-dom'


export default function Form({setData}) {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues:{
      name:"",
      card:"",
      year:"",
      month:"",
      cvc:"",
    },
    validationSchema:Yup.object({
      name:Yup.string().max(30,"can not be more than 30").required("can't be blank"),
      card:Yup.number().required("can't be blank").typeError("wrong format, only numbers"),
      year:Yup.number().required("can't be blank").min(23," year can't be less than 23").typeError("wrong format, only numbers"),
      cvc:Yup.number().required("can't be blank").typeError("wrong format, only numbers"),
      month:Yup.number().required("can't be blank").max(12," month can't be more than 12").min(1," month can't be less than 1").typeError("wrong format, only numbers"),
    }),
    onSubmit:(values)=>{
      setData(values)
      navigate("/success")
    }
  })

  return (
    <div className='max-w-7xl flex justify-center items-center'>
      <main className='pb-32 lg:px-10 gap-y-[280px] md:bg-[url("./assets/bg-main-desktop.png")] bg-[url("./assets/bg-main-mobile.png")] bg-no-repeat  bg-contain w-full relative bg-top px-3  md:bg-left flex flex-col md:flex-row justify-between'>
      <section className='lg:w-[40%] flex flex-col lg:justify-center lg:items-center h-[50%] md:h-[80%] md:gap-5 md:mt-24 md:w-[60%]'>
      <div className='lg:w-[80%] md:w-[70%] md:relative md:ml-5 w-[80%]  absolute z-10 md:top-0 top-[16%] sm:top[20%]'>
          <div className=' text-White font-medium text-[20px]'>
            <div className='w-[25%] absolute top-[10%]  left-[10%]'>
              <img src='../assets/card-logo.svg' className='object-cover w-full '/>
            </div>
                <p className=' font-medium lg:text-[20px] absolute top-[55%] left-[10%] md:text-sm text-[16px]'>{formik.values.card ?formik.values.card:"0000 0000 0000 0000"}</p>
                <p className=' text-sm absolute top-[75%] bottom-[25%] left-[10%]'>{formik.values.name ? formik.values.name:"Jane Appleseed"}</p>
                <p className=' text-sm  absolute top-[75%] bottom-[25%] right-[10%]'>{formik.values.year || formik.values.month ? `${formik.values.month} / ${formik.values.year}`:"00 / 00"}</p>
          </div>
          <img src={cardFront} className='object-cover w-full'/>
      </div>
      <div className='lg:w-[80%] lg:ml-52 md:w-[70%] md:ml-20 md:relative w-[80%] absolute top-[4%] right-[4%] md:right-0'>
          <p className='absolute text-sm bottom-[58%] top-[43%]  right-[10%] text-White font-medium '>{formik.values.cvc?formik.values.cvc:"000"}</p>
          <img src={cardBack} alt="card" className='object-cover w-full' />
      </div>
    </section >
    <section className=' md:mt-0 md:pr-6 px-6 py-10  mt-[80px] sm:mt-[200px] md:pt-[160px] bg-White lg:w-[40%] md:w-[40%]'>
    <form className='grid md:gap-5 lg:gap-7 gap-6 font-semibold text-sm uppercase' onSubmit={formik.handleSubmit}>
           <div className='lg:w-[90%] '>
           <label className='block pb-1 text-Verydarkviolet uppercase' htmlFor='name'>
             Cardholder Name
             </label>
             <input  onBlur={formik.handleBlur} type='text' id="name" name='name' value={formik.values.name} onChange={formik.handleChange}
              className={ formik.touched.name && formik.errors.name?"border-Red(inputerrors) border-[1px] p-2 rounded-md w-full focus:outline-none ": "border-[1px] p-2 rounded-md w-full focus:outline-none border-Lightgrayishviolet "}
             placeholder='e.g. Jane Appleseed'/>
             <p className={formik.touched.name && formik.errors.name?"text-Red(inputerrors) normal-case font-[500] pt-2":""}>{ formik.touched.name && formik.errors.name?formik.errors.name:""}</p>
           </div>
           <div className='lg:w-[90%]' >
           <label className='block pb-1 text-Verydarkviolet uppercase' htmlFor='card'>
             Card Number
             </label>
             <input  onBlur={formik.handleBlur} id="card" name="card" value={formik.values.card} onChange={formik.handleChange}
            className={formik.touched.card && formik.errors.card?"border-Red(inputerrors) border-[1px] p-2 rounded-md w-full focus:outline-none ": "border-[1px] p-2 rounded-md w-full focus:outline-none border-Lightgrayishviolet "}
             placeholder=' e.g. 1234 5678 9123 0000'/>
             <p className={formik.touched.card && formik.errors.card?"text-Red(inputerrors) normal-case font-[500] pt-2":""}>{formik.touched.card && formik.errors.card?formik.errors.card:""}</p>
           </div>
            <div className='grid grid-cols-2  pb-10 md:pb-0 lg:w-[90%] gap-2 '>
              <div className=''>
                <label className='block py-1 text-Verydarkviolet text-[11px] uppercase' htmlFor='year'>
                      Exp.Date(MM/YY)
                </label>
                <div className='flex gap-1'>
                  <div className='flex flex-col'>
                  <input placeholder='YY' onBlur={formik.handleBlur} name="year" id='year' value={formik.values.year} onChange={formik.handleChange}
                  className={ formik.touched.year && formik.errors.year?"border-Red(inputerrors) border-[1px] p-2 rounded-md w-full focus:outline-none ": "border-[1px] p-2 rounded-md w-full focus:outline-none border-Lightgrayishviolet "}/>
                  <p className={ formik.touched.year && formik.errors.year?"text-Red(inputerrors) font-[500] pt-2 normal-case":""}>
                  { formik.touched.year && formik.errors.year ? formik.errors.year  :""}</p>
                  </div>
                  <div className='flex flex-col'>
                  <label htmlFor="month"></label>
                  <input placeholder='MM' onBlur={formik.handleBlur} name="month" id='month' value={formik.values.month} onChange={formik.handleChange}
                  className={formik.touched.month && formik.errors.month?"border-Red(inputerrors) border-[1px] p-2 rounded-md w-full focus:outline-none ": "border-[1px] p-2 rounded-md w-full focus:outline-none border-Lightgrayishviolet "}/>
                  <p className={formik.touched.month && formik.errors.month?"text-Red(inputerrors) font-[500] pt-2 normal-case":""}>{formik.touched.month && formik.errors.month ?  formik.errors.month :""}</p>
                  </div>
              </div>
              </div>
              <div className=''>
               <label className='block py-1 text-[11px] uppercase' htmlFor="cvc" > CVC</label>
               <input onBlur={formik.handleBlur} id="cvc" name='cvc'  value={formik.values.cvc} onChange={formik.handleChange} placeholder='e.g. 123'  className={ formik.touched.cvc && formik.errors.cvc?"border-Red(inputerrors) border-[1px] p-2 rounded-md w-full focus:outline-none ": "border-[1px] p-2 rounded-md w-full focus:outline-none border-Lightgrayishviolet "}/>
               <p className={formik.touched.cvc && formik.errors.cvc?"text-Red(inputerrors) font-[500] pt-2 normal-case":""}> {formik.touched.cvc && formik.errors.cvc?formik.errors.cvc:""}</p>
              </div>
            </div>
             <button type="submit" className='w-full  bg-Verydarkviolet text-white p-2 rounded lg:w-[90%] text-md '>Confirm</button>
           </form>
    </section>
  </main>
  </div>
  )
}


import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react';
import { mediaDataObj } from '../../constant';



export default function AboutModal({open,setOpen,boss}) {
//   const [open, setOpen] = useState(true)
    const {BossPictureHover1, closeButton} = mediaDataObj;

  const cancelButtonRef = useRef(null);
  console.log(boss);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-silver-500 bg-opacity-30 backdrop-blur-sm transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg text-left transition-all ">
                <div className='backdrop-blur-lg inline-flex justify-between   ' >
                    <div  >
                    <img className='backdrop-blur-xl border-2 p-10 w-3/4 ml-12 rounded-xl m-8 border-red-50' src={boss.picture} alt="Boss" />
                    </div>
                    <div className=' rounded-xl p-12  m-4 '>
                    <div className='flex justify-between'>  
                     <h3 className="text-5xl font-bold text-gray-600 underline decoration-red-600 hover:decoration-gray-400">Description</h3>   
                     <img onClick={()=>setOpen(false)} className='w-10 mr-5' src={closeButton} alt="closeButton"/>
                     </div>
                    <p className=' text-red-500 font-bold text-lg py-10 '>{boss.description}</p>
                    </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
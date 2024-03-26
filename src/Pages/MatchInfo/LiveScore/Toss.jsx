import React from 'react'
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import { AiOutlineClose } from "react-icons/ai";
import { RiInboxArchiveFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import Bowler from '../../../assets/Batsman.png'
import Batsman from '../../../assets/Bowler.png'
import SelectStriker from './SelectStriker';

const Toss = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <React.Fragment>
                <button onClick={() => setOpen(true)} className='text-white bg-emerald-500 text-lg font-Outfit items-center flex  justify-center p-1 rounded-lg w-28 '>NEXT(Toss)</button>
                <Modal open={open} >
                    <ModalDialog sx={{ width: '30%', height: '67%', padding: '0', '@media(max-width:680px)': { height: '45%' }, '@media(max-width:420px)': { height: '55%' } }}>
                        <div className='h-14 flex justify-between '>
                            <div className='flex  h-full items-center ml-3 text-black text-xl font-Jost'>
                                Who won the toss?
                            </div>
                            <div className='flex items-center mr-3 cursor-pointer'>
                                <AiOutlineClose color='black' size={25} onClick={(event) => {
                                    event.preventDefault();
                                    setOpen(false);
                                }} />
                            </div>
                        </div>
                        <div className='flex h-80 flex-col w-[95%] ml-2 gap-y-2 '>
                            <div className='w-full flex justify-evenly'>
                                <button className=' text-black bg-slate-300 text-lg  font-Outfit items-center flex  justify-center p-2 rounded-lg w-36 h-24 font-semibold '>
                                    CSPIT-CE
                                </button>
                                <button className=' text-black bg-slate-300 text-lg font-Outfit items-center flex  justify-center p-2 rounded-lg w-36 h-24 font-semibold '>
                                    CSPIT-IT
                                </button>
                            </div>
                            <div className='w-full'>
                                <div className='flex  h-14 items-center ml-1 text-black text-xl font-Jost'>
                                    Winner of the toss elected to?
                                </div>
                                <div className='w-full flex justify-evenly'>
                                    <button className=' text-black bg-slate-300 text-lg  font-Outfit items-center flex flex-col  justify-center p-2 rounded-lg w-36 h-32  font-semibold'>
                                        <img src={Batsman} alt='No' className='h-20 w-20 rounded-md' />
                                        BAT
                                    </button>
                                    <button className=' text-black bg-slate-300 text-lg font-Outfit items-center flex flex-col  justify-center p-2 rounded-lg w-36 h-32 font-semibold '>
                                        <img src={Bowler} alt='No' className='h-20 w-20 rounded-md' />
                                        BOWL
                                    </button>
                                </div>
                                <div className='w-full mt-3 flex justify-end'>
                                    <SelectStriker />
                                </div>
                            </div>



                        </div>
                    </ModalDialog>
                </Modal>
            </React.Fragment>
        </>
    )
}

export default Toss

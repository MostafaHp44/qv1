import './MP.css'
import { UilPlusCircle,UilSync,UilTrash } from '@iconscout/react-unicons'
import {useState,useEffect} from 'react'
import AdminPanel from './AddProducat/AddProducat'
import SlideShowProducat from '../../../SharedComponents/SlideShowProducat/SlidShowProducat'

const MP = () => {
    const [isAdd,setisAdd]=useState(false)
    const [isUpdate,setisUpdate]=useState(false)
    const [isDelete,setisDelete]=useState(false)

    const handelAddProducat=()=>{
        setisAdd(curr=>!curr)
    }
    const handelUpdateProducat=()=>{
        setisUpdate(curr=>!curr)
    }
    const handelDeleteProducat=()=>{
        setisDelete(curr=>!curr)
    }

    return (
    <div className='MainManageProducat'>

        <div className='FirstRow'>
                   <div className='Admin'>
                    
                    <div className='AdminName'><span className='hello'>Hello </span> <span className='Name'></span></div>
                    <div className='AdminPic'><img src='' alt='' className='picofadmin'></img></div>
                    <div className='MenuAdmin'></div>

                </div>
        </div>

        <div className='SecRow'>
        <div className='First-Manage'>
            <div className='Menu-ManageProducat'>
                <div className='Row-1P'>
                    <div className='AddProducat'><button className='btnmanage' onClick={handelAddProducat}>Add Producat <UilPlusCircle/> </button></div>
                </div>
                <div className='Row-2P'>
                    <div className='UpdateProducat'><button className='btnmanage'onClick={handelUpdateProducat}>Update Producat<UilSync/></button></div>
                </div>
                <div className='Row-3P'>
                    <div className='DeleteProducat'><button className='btnmanage'onClick={handelDeleteProducat}>Delete Producat <UilTrash /></button></div>
                </div>

            </div>
        </div>

        <div className='Sec-Manage'>
            {
                isAdd?
                <AdminPanel/>
                :
               <SlideShowProducat/>
            }
        </div>
        </div>
       

    </div>
    );
}
 
export default MP;
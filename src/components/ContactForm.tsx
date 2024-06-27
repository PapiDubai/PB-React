import Input from "./Input"
import Button from "./Button"

import { useForm } from "react-hook-form"
import { server_calls } from "../api/server"
import { useDispatch, useStore } from 'react-redux'
import { chooseName, chooseEmail, choosePhoneNumber, chooseAddress } from "../redux/slices/RootSlice"

// Interfaces 

interface ContactFormProps {
  id?: string[]
}

const ContactForm = (props:ContactFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data:any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data } ${ props.id }`)
      setTimeout(() => {window.location.reload()},5000);
      event.target.reset()
    }else {
      // Use dispatch to update opur state in out store
      dispatch(chooseName(data.name));
      dispatch(chooseEmail(data.email));
      dispatch(choosePhoneNumber(data.phone_number));
      dispatch(chooseAddress(data.address));
      
      
      server_calls.create(store.getState())
      setTimeout( () => {window.location.reload()},1000);
    }

  }

  return (
    
    //TODO - finish handle *(handleSubmit)* function - passes all the {...register} to the {...}(spread Operator) on the input tab
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Contact Name</label>
          <Input {...register('name)')} name='name' placeholder='Name'/> 
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Input {...register('email')} name='email' placeholder='Email'/> 
        </div>
        <div>
          <label htmlFor="phone_number">Phone Number</label>
          <Input {...register('phone_number')} name='phone_number' placeholder='Phone_number'/> 
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <Input {...register('address')} name='address' placeholder='Address'/> 
        </div>
        <div className="flex p-1">
          <Button
            className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white">
              Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
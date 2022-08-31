import React,{useState} from "react";
import {Formik, Form, Field, ErrorMessage} from "formik"
import { HiOutlineCheckCircle, HiOutlineExclamationCircle } from 'react-icons/hi';
import {
  Flex,
  useToast,
}from '@chakra-ui/react'
import ModalInfo from "./Modal"

function Formulario() {
  const toast = useToast()
  const [showModal, setShowModal] = useState(false)
  const [info, setInfo] = useState({})

  return (
    <Flex flexDirection="column">
      <Flex fontSize={35} marginTop={30} mb={-50} ml={3} fontWeight={400}>
        <h1>Form</h1>
      </Flex>
      <Formik

        initialValues ={{
          name:"",
          email:"",
          password:"",
          textArea:""
        }}

        validate = {(valores) => {
          let errores={};
          
          //validacion name
          if(!valores.name){
            errores.name="Required"
          }else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)){
            errores.name="Invalid name"
          }

          //validacion email
          if(!valores.email){
            errores.email="Required"
          }else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){
            errores.email="Invalid mail"
          }

          //validacion contraseña
          if(!valores.password){
            errores.password="Required"
          }

          return errores;
        }}

        onSubmit={( valores, {resetForm} ) =>{
          setInfo(valores)
          setShowModal(true)
          resetForm();
          console.log(valores)
          toast({
            title: 'Success',
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        }}
        >

        {({errors,handleBlur,touched}) => (
          <Form className="formulario">
            <div>
              <label htmlFor="name">Name</label>
              <Flex>
                {
                  !errors.name && touched.name?
                  <>
                    <Field
                    className="check-input"
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Woody Allen"
                      onBlur={handleBlur}
                    />
                    <HiOutlineCheckCircle className="check-icon"/>
                  </>
                  : touched.name?
                  <>
                  <Field
                    className="error-input"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Woody Allen"
                    onBlur={handleBlur}
                  />
                  <HiOutlineExclamationCircle className="error-icon"/>
                </>
                :
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Woody Allen"
                    onBlur={handleBlur}
                  />
                }
                
              </Flex> 
             <ErrorMessage name="name" component={() => (<div className="error">{errors.name}</div>)}/>
            
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Flex>
                {
                   !errors.email && touched.email?
                   <>
                     <Field
                        className="check-input"
                        type="text"
                        id="email"
                        name="email"
                        placeholder="contoso@domain.com"
                        onBlur={handleBlur}
                     />
                     <HiOutlineCheckCircle className="check-icon"/>
                   </>
                   : touched.email?
                   <>
                   <Field
                     className="error-input"
                     type="text"
                     id="email"
                     name="email"
                     placeholder="contoso@domain.com"
                     onBlur={handleBlur}
                   />
                   <HiOutlineExclamationCircle className="error-icon"/>
                 </>
                 :
                   <Field
                     type="text"
                     id="email"
                     name="email"
                     placeholder="contoso@domain.com"
                     onBlur={handleBlur}
                   />
                }
                </Flex>
                <ErrorMessage name="email" component={() => (<div className="error">{errors.email}</div>)}/>
            </div>
            <div>
              <label htmlFor="email">Password</label>
              <Flex>
                {
                   !errors.password && touched.password?
                   <>
                     <Field
                        className="check-input"
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Provide a password"
                        onBlur={handleBlur}
                     />
                     <HiOutlineCheckCircle className="check-icon"/>
                   </>
                   : touched.password?
                   <>
                   <Field
                     className="error-input"
                     type="password"
                     id="password"
                     name="password"
                     placeholder="Provide a password"
                     onBlur={handleBlur}
                   />
                   <HiOutlineExclamationCircle className="error-icon"/>
                 </>
                 :
                   <Field
                     type="password"
                     id="password"
                     name="password"
                     placeholder="Provide a password"
                     onBlur={handleBlur}
                   />
                }
                </Flex>
              <ErrorMessage name="password" component={() => (<div className="error">{errors.password}</div>)}/>
            </div>
            <div>
              <label htmlFor="textArea">Text Area</label>
              <Field
                name="textArea"
                as="textarea"
                placeholder="Text"
              />
            </div>
            {
              !errors.password &&
              !errors.email &&
              touched.name &&
              touched.email &&
              touched.password &&
              !errors.name?
              
              <button className="buttonOk" type="submit">Submit</button>:

              <button className="buttonNo" type="submit" disabled>Submit</button>

            }
          </Form>
        )}
      </Formik>
      <ModalInfo
          showModal={showModal}
          setShowModal={setShowModal}
          info={info}
      />
    </Flex>
  
  );
}

export default Formulario;

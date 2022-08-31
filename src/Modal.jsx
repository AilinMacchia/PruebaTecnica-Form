import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Center
} from '@chakra-ui/react'
  
import './Modal.css';

export default function ModalInfo({ showModal, setShowModal, info }) {
  return(
    <Modal isOpen={showModal} onClose={()=> setShowModal(false)}>
      <ModalOverlay />
      <ModalContent>
        <Center className="header">
        <ModalHeader fontSize={35}>Information</ModalHeader>
        </Center>
        <ModalCloseButton />
        <ModalBody>
          {
            <div className='font'>
              <h1>{"{"}</h1>
              <h1 className='info'>name: {info.name},</h1>
              <h1 className='info'>email: {info.email},</h1>
              <h1 className='info'>password: {info.password},</h1>
              {
                info.textArea?
                <h1 className='info'>textArea: {info.textArea},</h1>:null
              }
              <h1>{"}"}</h1>
            </div>
          }
        </ModalBody>
        <ModalFooter>
          <Button className="button" mr={3} onClick={()=> setShowModal(false)}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
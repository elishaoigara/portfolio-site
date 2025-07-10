// src/components/ReachMeModal.js
import React, { useState } from 'react';
import { Modal, Button, Form, Toast, ToastContainer } from 'react-bootstrap';
import { FaEnvelope } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';


const ReachMeModal = () => {
  const [show, setShow] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', variant: 'success' });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const showToast = (message, variant = 'success') => {
    setToast({ show: true, message, variant });
    setTimeout(() => setToast({ show: false, message: '', variant: 'success' }), 4000);
  };

  return (
    <>
      {/* Floating Contact Button */}
      <button
        onClick={handleShow}
        className="btn btn-danger rounded-circle shadow"
        title="Quick Contact"
        aria-label="Reach Me"
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          zIndex: 9999,
          width: '60px',
          height: '60px',
          fontSize: '20px',
        }}
      >
        <FaEnvelope />
      </button>

      {/* Modal with Animation */}
      <AnimatePresence>
        {show && (
          <Modal
            show={show}
            onHide={handleClose}
            centered
            backdrop="static"
            keyboard={false}
            dialogClassName="modal-blur"
            as={motion.div}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <Modal.Header closeButton className="bg-dark text-light border-secondary">
              <Modal.Title>Contact Me</Modal.Title>
            </Modal.Header>

            <Modal.Body className="bg-dark text-light">
              <Form
                action="https://formspree.io/f/xanjryon"
                method="POST"
                target="_blank"
                onSubmit={() => {
                  handleClose();
                  showToast('✅ Message sent!');
                }}
              >
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="bg-dark text-light border-light"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="bg-dark text-light border-light"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Subject</Form.Label>
                  <Form.Select
                    name="subject"
                    required
                    className="bg-dark text-light border-light"
                  >
                    <option value="">-- Select Subject --</option>
                    <option value="Web Design">Web Design</option>
                    <option value="Portfolio Review">Portfolio Review</option>
                    <option value="Project Request">Project Request</option>
                    <option value="Just Saying Hi">Just Saying Hi</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows={3}
                    required
                    placeholder="Write your message..."
                    className="bg-dark text-light border-light"
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Send Message
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
        )}
      </AnimatePresence>

      {/* Toast Notification */}
      <ToastContainer className="p-3 position-fixed bottom-0 end-0" style={{ zIndex: 9999 }}>
        <Toast
          show={toast.show}
          bg={toast.variant}
          onClose={() => setToast({ ...toast, show: false })}
          autohide
          delay={4000}
        >
          <Toast.Body className="text-white">{toast.message}</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};

export default ReachMeModal;

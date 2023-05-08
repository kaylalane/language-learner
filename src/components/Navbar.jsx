import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { init, sendForm } from "emailjs-com";
import { useForm } from "react-hook-form";
init("Oz4Q-rOGmPUD7nUq-");

function MyModal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    closeModal();
    sendForm("default_service", "template_ncz93v9", "#contact-form").then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  };

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-primaryButton px-4 py-2 text-sm font-medium text-white"
        >
          Suggestions?
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Submit Your Feedback
                  </Dialog.Title>
                  <div className="mt-2">
                    <form id="contact-form" onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-4">
                      {/* include validation with required or other standard HTML validation rules */}
                      <input
                        className="bg-white border-black border-2 p-2  rounded-md focus-visible:outline-[#c5c6c8]"
                        style={
                          errors.nameRequired && { border: "2px solid red" }
                        }
                        placeholder="Name"
                        {...register("nameRequired", { required: true })}
                      />
                      
                      {/* errors will return when field validation fails  */}
                      <input
                        className="bg-white border-black border-2 p-2 rounded-md focus:border-[#c5c6c8] focus-visible:border=[#c5c6c8] focus-visible:outline-[#c5c6c8]"
                        style={errors.mail && { border: "2px solid red" }}
                        placeholder="Email"
                        {...register("mail", {
                          required: "Email Address is required",
                        })}
                        aria-invalid={errors.mail ? "true" : "false"}
                      />
                      
                      <textarea
                        className="bg-white border-black border-2 h-32 p-2 rounded-md focus:ring-0 focus:border-[#c5c6c8] focus-visible:border-[#c5c6c8] focus:outline focus-visible:outline-offset-0"
                        style={
                          errors.messageRequired && { border: "2px solid red" }
                        }
                        placeholder="Send me a message!"
                        {...register("messageRequired", { required: true })}
                        aria-invalid={errors.mail ? "true" : "false"}
                      />

                      <input
                        type="submit"
                        role="button"
                        className="button w-full p-2 text-white border-none bg-primaryButton rounded-md focus-visible:outline-primaryButton"
                        aria-label="Submit feedback form"
                      />
                    </form>
                  </div>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default function Navbar() {
  return (
    <nav className="flex py-4 justify-between">
      <h1 className="text-2xl">Polyglot Resources</h1>
      <MyModal />
    </nav>
  );
}

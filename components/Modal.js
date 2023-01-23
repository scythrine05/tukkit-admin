import React from "react";

//Components
import Button from "./Button";
import TextField, { TextArea } from "./TextField";

//Icons
import { CROSS } from "../utils/Icons";

export default function Modal({ show, onSetShow }) {
  return (
    <>
      {show ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#d8d8d8] outline-none focus:outline-none">
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="my-4 text-slate-500 text-lg leading-relaxed">
                    <p className="text-sm text-center">
                      All Fields are Mandatory. Write the Description in less
                      than 40 words along with proper sense related to the
                      actual news
                    </p>
                    <form>
                      <TextField
                        id="title"
                        label="Title"
                        type="text"
                        placeholder="Title"
                        full
                      />
                      <TextArea
                        id="desc"
                        label="Description"
                        placeholder="Write your Description"
                        full
                      />
                      <TextField
                        id="source"
                        label="Source"
                        type="text"
                        placeholder="Source"
                        full
                      />
                      <TextField
                        id="url"
                        label="URL"
                        type="text"
                        placeholder="URL"
                        full
                      />
                      <TextField
                        id="durl"
                        label="Display URL"
                        type="text"
                        placeholder="Display URL"
                        full
                      />
                    </form>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <Button type="button" onClick={onSetShow} label={<CROSS />} />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

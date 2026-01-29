import { useState } from "react";
import { ClientInfoItems, ContactAddressItems } from "../../config";
import { AddressInfo, Button, Title } from "../atoms";
import { Input } from "../molecules";

export default function ContactSection() {
  const [boxState, setBoxState] = useState(true);
  return (
    <div className="px-50 py-150 max-md:px-15 max-md:py-40 flex max-xl:flex-col-reverse gap-40 max-md:gap-20">
      <div className="flex flex-col gap-20 flex-none">
        <img src="/image/map.png" alt="city-map.png" className="rounded-10" />
        <div className="bg-main rounded-10 p-35 max-md:p-20 grid grid-cols-1 content-between h-224 max-md:h-auto max-md:gap-24">
          {ContactAddressItems.map((value, index) => (
            <AddressInfo key={index} icon={value.icon} content={value.content} />
          ))}
        </div>
      </div>
      <div className="px-50 pt-50 pb-60 max-md:px-0 max-md:pb-30 grow">
        <Title content="Contact Us" className="mb-40 text-left" />
        <div className="flex flex-col gap-16">
          {ClientInfoItems.map((value, index) => (
            <Input key={index} type={value.type} placeholder={value.placeholder} />
          ))}
        </div>
        <div className="flex gap-10 mt-32">
          {boxState ?
            <img src="/image/origin.png" alt="" className="flex-none size-22 " onClick={() => setBoxState(!boxState)} />
            :
            <img src="/image/checked.png" alt="" className="flex-none size-22" onClick={() => setBoxState(!boxState)} />
          }
          <div className="text-14">
            I agree to be contacted by The Bay States Home Group via call, email, and text. To opt-out, you can reply "stop" at any time or click the unsubscribe link in the emails. Message and data rates may apply
          </div>
        </div>
        <Button content="submit" className="mt-30"/>
      </div>
    </div>
  );
}

import {Spinner as SpinnerBase} from "@nextui-org/react";

export default function Spinner(props: any) {
  return(
    <div className="flex flex-1 items-center justify-center">
      <SpinnerBase {...props} />
    </div>
  )
}
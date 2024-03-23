import {Spinner as SpinnerBase} from "@nextui-org/react";

export default function Spinner(props: any) {
  return(
    <div className="flex flex-1 min-h-screen items-center justify-center">
      <SpinnerBase {...props} />
    </div>
  )
}
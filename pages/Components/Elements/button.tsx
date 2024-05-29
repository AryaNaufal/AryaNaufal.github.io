import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export default function Button({ className, text}: Params) {
  return <button className={`${className} text-white font-bold py-1 px-2 rounded`}>{text}</button >
}
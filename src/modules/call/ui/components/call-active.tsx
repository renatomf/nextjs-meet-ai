import Link from "next/link";
import Image from "next/image";

import { CallControls, SpeakerLayout } from "@stream-io/video-react-sdk"

interface Props {
  meetingName: string;
  onLeave: () => void;
};

export const CallActive = ({ meetingName, onLeave }: Props) => {
  return ( 
    <div className="flex flex-col justify-between p-4 h-full text-white">
      <div className="bg-[#101213] rounded-full p-4 flex items-center gap-4">
        <Link href="/">
          <Image src="/logo.svg" width={22} height={22} alt="Logo" />
        </Link>
        <h4 className="text-base">
          {meetingName}
        </h4>
      </div>
      <SpeakerLayout />
      <div className="bg-[#101213] rounded-full px-4">
        <CallControls onLeave={onLeave} />
      </div>
    </div>
   );
};

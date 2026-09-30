import React from "react";
import Navbar from "@theme-original/Navbar";
import Link from "@docusaurus/Link";

import TwitterIcon from "../../components/icons/TwitterIcon";
import DiscordIcon from "../../components/icons/DiscordIcon";
import MediumIcon from "../../components/icons/MediumIcon";
import TelegramIcon from "../../components/icons/TelegramIcon";
import { APP_URL, SOCIAL_MEDIA_LINKS } from "../../constants";

const iconsClassNames =
  "h-7 hover:text-indigo-300 cursor-pointer transition-all duration-200 block";

const SocialIcons = () => {
  return (
    <div className="hidden lg:flex gap-x-8 px-8">
      <a href={SOCIAL_MEDIA_LINKS.twitter} target="_blank">
        <TwitterIcon className={iconsClassNames} />
      </a>
      <a href={SOCIAL_MEDIA_LINKS.telegram} target="_blank">
        <TelegramIcon className={iconsClassNames} />
      </a>
      <a href={SOCIAL_MEDIA_LINKS.discord} target="_blank">
        <DiscordIcon className={iconsClassNames} />
      </a>
      <a href={SOCIAL_MEDIA_LINKS.medium} target="_blank">
        <MediumIcon className={iconsClassNames} />
      </a>
    </div>
  );
};

export default function NavbarWrapper(props) {
  return (
    <>
      <div className="hidden md:flex justify-end items-center h-[90px] px-4 md:px-6 z-10">
        <Link href="/" className="h-[32px] mr-auto pl-[1rem]">
          <img src="/img/logo.svg" alt="logo" />
        </Link>
        <div className="flex gap-16 items-center">
          <SocialIcons />
          <button
            className="uppercase rounded-2xl bg-primary py-2 px-6 text-[13px] font-medium text-white hover:bg-white hover:text-primary transition-all duration-500 cursor-pointer"
            onClick={() => window.open(APP_URL, "_blank")}
          >
            Enter app
          </button>
        </div>
      </div>
      <Navbar {...props} />
    </>
  );
}

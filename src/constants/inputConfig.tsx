import DoneIcon from '@mui/icons-material/Done';

import type { IInputType } from '@/interfaces/inputConfig';

export const inputConfig: IInputType = {
  footer: {
    type: 'tel',
    styles: 'pl-[33px] py-[14px] pr-[47px] placeholder-additional2 bg-main1 text-additional2',
    button: (
      <button className="absolute p-[11.3px] right-[0px] bg-accent">
        <DoneIcon />
      </button>
    ),
  },
  selection: {
    type: 'text',
    styles: 'max-w-[160px] pl-[33px] py-[14px] pr-[47px] placeholder-additional2 text-additional2 bg-main1',
  },
  productSearch: {
    type: 'text',
    styles: 'w-full px-[48px] py-[20px]  placeholder-additional2 text-additional2 bg-main1',
    button: (
      <button className="absolute right-0 top-1/2 transform -translate-y-1/2 pr-[48px]">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M22.1333 24L13.7333 15.6C13.0667 16.1333 12.3 16.5556 11.4333 16.8667C10.5667 17.1778 9.64444 17.3333 8.66667 17.3333C6.24444 17.3333 4.19467 16.4942 2.51733 14.816C0.84 13.1378 0.000888889 11.088 0 8.66667C0 6.24444 0.839111 4.19467 2.51733 2.51733C4.19556 0.84 6.24533 0.000888889 8.66667 0C11.0889 0 13.1387 0.839111 14.816 2.51733C16.4933 4.19556 17.3324 6.24533 17.3333 8.66667C17.3333 9.64444 17.1778 10.5667 16.8667 11.4333C16.5556 12.3 16.1333 13.0667 15.6 13.7333L24 22.1333L22.1333 24ZM8.66667 14.6667C10.3333 14.6667 11.7502 14.0831 12.9173 12.916C14.0844 11.7489 14.6676 10.3324 14.6667 8.66667C14.6667 7 14.0831 5.58311 12.916 4.416C11.7489 3.24889 10.3324 2.66578 8.66667 2.66667C7 2.66667 5.58311 3.25022 4.416 4.41733C3.24889 5.58444 2.66578 7.00089 2.66667 8.66667C2.66667 10.3333 3.25022 11.7502 4.41733 12.9173C5.58444 14.0844 7.00089 14.6676 8.66667 14.6667Z"
            fill="#E8CDC9"
          />
        </svg>
      </button>
    ),
  },
  blogSearch: {
    type: 'text',
    styles: 'w-[679px] px-[48px] py-[20px]  placeholder-additional2 text-additional2 bg-main1',
    button: (
      <button className="absolute right-0 top-1/2 transform -translate-y-1/2 pr-[48px]">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M22.1333 24L13.7333 15.6C13.0667 16.1333 12.3 16.5556 11.4333 16.8667C10.5667 17.1778 9.64444 17.3333 8.66667 17.3333C6.24444 17.3333 4.19467 16.4942 2.51733 14.816C0.84 13.1378 0.000888889 11.088 0 8.66667C0 6.24444 0.839111 4.19467 2.51733 2.51733C4.19556 0.84 6.24533 0.000888889 8.66667 0C11.0889 0 13.1387 0.839111 14.816 2.51733C16.4933 4.19556 17.3324 6.24533 17.3333 8.66667C17.3333 9.64444 17.1778 10.5667 16.8667 11.4333C16.5556 12.3 16.1333 13.0667 15.6 13.7333L24 22.1333L22.1333 24ZM8.66667 14.6667C10.3333 14.6667 11.7502 14.0831 12.9173 12.916C14.0844 11.7489 14.6676 10.3324 14.6667 8.66667C14.6667 7 14.0831 5.58311 12.916 4.416C11.7489 3.24889 10.3324 2.66578 8.66667 2.66667C7 2.66667 5.58311 3.25022 4.416 4.41733C3.24889 5.58444 2.66578 7.00089 2.66667 8.66667C2.66667 10.3333 3.25022 11.7502 4.41733 12.9173C5.58444 14.0844 7.00089 14.6676 8.66667 14.6667Z"
            fill="#E8CDC9"
          />
        </svg>
      </button>
    ),
  },
  contactForm: {
    styles: 'h-[48px] w-[377px] mb-[16px] pl-[48px] py-[15px]  placeholder-additional2 text-additional2 bg-main1',
  },
};
